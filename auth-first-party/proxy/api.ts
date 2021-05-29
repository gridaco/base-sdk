import Axios from "axios";
import { __HOSTS } from "@base-sdk/core";
import { ProxyAuthResult } from "../types";
const authProxyClient = Axios.create({
    baseURL: `${__HOSTS.INTERNAL_SECURE_ACCOUNTS_SERVICE_HOST}/authentication/with-proxy`,
});

export async function _api_newProxySession(token: string): Promise<string> {
    const _newProxySessionReqRes = await authProxyClient.post("/session/new");
    const sessionId = _newProxySessionReqRes.data.sessionId;
    return sessionId;
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
