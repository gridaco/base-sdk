import Axios from "axios";
import { __HOSTS, cors } from "@base-sdk/core";
import {
    AuthProxySessionStartRequest,
    AuthProxySessionStartResult,
    ProxyAuthResult,
} from "../types";
import axiosRetry from "axios-retry";

const authProxyClient = Axios.create({
    baseURL: `${__HOSTS.INTERNAL_SECURE_ACCOUNTS_SERVICE_HOST}/authentication/with-proxy`,
});

const authProxyResultClient = Axios.create({
    baseURL: `${__HOSTS.INTERNAL_SECURE_ACCOUNTS_SERVICE_HOST}/authentication/with-proxy`,
    withCredentials: true,
});

// retry is enabled since proxy client uses totp validation. by high chance, first request may throw 403 forbidden.
axiosRetry(authProxyClient, { retries: 2 });
cors.useAxiosCors(authProxyClient);

export async function _api_newProxySession(
    token: string,
    request: AuthProxySessionStartRequest
): Promise<AuthProxySessionStartResult> {
    const _newProxySessionReqRes =
        await authProxyClient.post<AuthProxySessionStartResult>(
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
            `/session/${p.session}/check`
        );
        return {
            access_token: resp.data.payload,
            success: true,
        };
    } catch (_) {
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
