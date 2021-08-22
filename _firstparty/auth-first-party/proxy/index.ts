export * from "./url";
export * from "./ws";
import { ProxyAuthenticationMode, ProxyAuthResult } from "../types";
import { WsAuthProxyProc } from "./ws";
import { __HOSTS } from "@base-sdk/core";
import { totp } from "otplib";
import { AuthProxyProcBase } from "./proc-base";
import { SseAuthProxyProc } from "./sse";
import { LogPollingAuthProxyProc } from "./longpoll";
import { _api_newProxySession } from "./api";
import {
    AuthProxySessionStartRequest,
    AuthProxySessionStartResult,
} from "./types";

export async function openProxyAuthSession(
    /**
     * for oss development, defaults to `"00000000"`
     * enter key for `GRIDA_FIRST_PARTY_PROXY_AUTH_REQUEST_TOTP_SECRET`
     */
    secret: string,
    request: AuthProxySessionStartRequest,
    config?: {
        /**
         * false by default. if non set, the caller will have to open the session url via url outside of this function.
         */
        autoOpen?: boolean;
        openner?: (uri: string) => void;
    }
): Promise<AuthProxySessionStartResult> {
    const token = totp.generate(secret);
    const session = await _api_newProxySession(token, request);

    // opens the auth session on the browser if config is set so.
    if (config?.autoOpen) {
        try {
            (config.openner ?? open)(session.authUrl);
        } catch (e) {
            console.error(
                "cannot open the session via browser. (the platform may not be supported)",
                e
            );
        }
    }
    if (!secret) {
        throw "cannot request session with empty secret";
    }

    return session;
}

export async function requesetProxyAuthWithSession(
    secret: string,
    session: AuthProxySessionStartResult,
    request: AuthProxySessionStartRequest
) {
    const sessionId = session.id;
    let proc: AuthProxyProcBase<any>;
    switch (request.mode) {
        case ProxyAuthenticationMode.ws:
            proc = new WsAuthProxyProc(sessionId, secret);
            return await proc.onResult();
        case ProxyAuthenticationMode.sse:
            proc = new SseAuthProxyProc(sessionId, secret);
            break;
        case ProxyAuthenticationMode.long_polling:
            proc = new LogPollingAuthProxyProc(sessionId, secret);
            break;
        default:
            throw `mode "${request.mode}" is not supported yet.`;
    }
    return await proc.onResult();
}

export async function requesetProxyAuth(
    /**
     * for oss development, defaults to `"00000000"`
     * enter key for `GRIDA_FIRST_PARTY_PROXY_AUTH_REQUEST_TOTP_SECRET`
     */
    secret: string,
    request: AuthProxySessionStartRequest,
    config?: {
        /**
         * false by default. if non set, the caller will have to open the session url via url outside of this function.
         */
        autoOpen?: boolean;
        openner?: (uri: string) => void;
    }
): Promise<ProxyAuthResult> {
    if (!secret) {
        throw "cannot request session with empty secret";
    }

    const session = await openProxyAuthSession(secret, request, config);
    return requesetProxyAuthWithSession(secret, session, request);
}
