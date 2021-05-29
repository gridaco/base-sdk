import { ProxyAuthenticationMode, ProxyAuthResult } from "../types";
import { WsAuthProxyProc } from "./ws";

import { __HOSTS } from "@base-sdk/core";
export * from "./ws";
import { totp } from "otplib";
import { AuthProxyProcBase } from "./proc-base";
import { SseAuthProxyProc } from "./sse";
import { LogPollingAuthProxyProc } from "./lopo";
import { _api_newProxySession } from "./api";

export async function requesetProxyAuth(req: {
    mode: ProxyAuthenticationMode;
    /**
     * for oss development, defaults to `"00000000"`
     * enter key for `BRIDGED_FIRST_PARTY_PROXY_AUTH_REQUEST_TOTP_SECRET`
     */
    secret: string;
}): Promise<ProxyAuthResult> {
    // todo
    const token = totp.generate(req.secret);
    const sessionId = await _api_newProxySession(token);
    let proc: AuthProxyProcBase<any>;
    switch (req.mode) {
        case ProxyAuthenticationMode.ws:
            proc = new WsAuthProxyProc(sessionId, req.secret);
            return await proc.onResult();
        case ProxyAuthenticationMode.sse:
            proc = new SseAuthProxyProc(sessionId, req.secret);
            break;
        case ProxyAuthenticationMode.long_polling:
            proc = new LogPollingAuthProxyProc(sessionId, req.secret);
        default:
            throw `mode "${req.mode}" is not supported yet.`;
    }
    return await proc.onResult();
}
