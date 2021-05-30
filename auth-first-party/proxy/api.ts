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

/**
 * check the result regarding less to the realtime proxy mode the original request was using.
 *
 * this can also be used solo
 *
 * @todo - todo. this aint implemented.
 * @returns
 */
export async function _api_checkSessionAgain(): Promise<ProxyAuthResult | null> {
    return null;
}
