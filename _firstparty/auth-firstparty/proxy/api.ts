import Axios from "axios";
import { cors } from "@base-sdk/core";
import {
    AuthProxySessionStartRequest,
    AuthProxySessionStartResult,
    ProxyAuthResult,
} from "../types";
import axiosRetry from "axios-retry";

const _HOST = "https://accounts.services.grida.co";
const authProxyClient = Axios.create({
    baseURL: `${_HOST}/authentication/with-proxy`,
});

const authProxyResultClient = Axios.create({
    baseURL: `${_HOST}/authentication/with-proxy`,
    withCredentials: true,
});

// retry is enabled since proxy client uses totp validation. by high chance, first request may throw 403 forbidden.
axiosRetry(authProxyClient, { retries: 2 });
cors.useAxiosCors(authProxyClient, {
    apikey: process.env.NEXT_PUBLIC_CORS_GRIDA_API_KEY,
});

export async function _api_newProxySession(
    token: string,
    request: AuthProxySessionStartRequest
): Promise<AuthProxySessionStartResult> {
    const _newProxySessionReqRes = await authProxyClient.post<AuthProxySessionStartResult>(
        "/session/new",
        request,
        {
            params: {
                // auth token is accepted with query param for this api.
                token: token,
            },
        }
    );
    return _newProxySessionReqRes.data;
}

interface _TempProxySession {
    success: boolean;
    id: string;
    payload: string;
}
/**
 * check the result regarding less to the realtime proxy mode the original request was using.
 *
 * this can also be used solo
 *
 * @todo - todo. this aint implemented.
 * @returns
 */
export async function _api_checkSessionAgain(p: {
    token: string;
    session: string;
}): Promise<ProxyAuthResult | null> {
    try {
        const resp = await authProxyClient.get<_TempProxySession>(
            `/session/${p.session}/check`,
            {
                params: {
                    // auth token is accepted with query param for this api.
                    token: p.token,
                },
            }
        );
        if (resp.data.success) {
            // return only if payload is present.
            return {
                access_token: resp.data.payload,
                success: true,
            };
        }
        return null;
    } catch (_) {
        if (_.response.status == 404) {
            // this can only happen when check method is called form somewere else. (eg. explicit check call from user via check button click.)
            throw _; // if 404, the request is already read by this client. (this won't happen.)
        }
        return null;
    }
}

/**
 * this returns proxy auth result to the auth server from accounts.grida.co
 * only used from auth browser.
 */
export async function _api_returnProxyAuthResult(p: { session: string }) {
    const data = {}; /* at this point, we don't need to pass data. */
    const res = await authProxyResultClient.post<AuthProxySessionStartResult>(
        `/session/${p.session}/result-from-proxy`,
        data
    );
    return res.data;
}
