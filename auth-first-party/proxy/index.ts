import { ProxyAuthResult } from "types";
import { WsProxyAuthProc } from "./ws";
import Axios from "axios";
export * from "./ws";

const client = Axios.create({
    // todo
    baseURL: "",
});

export async function requesetProxyAuth(req: {
    mode: /**
     * resolves the async request with ws connection.
     */
    | "ws"
        /**
         * resolves the async request with sse result. - not recommanded. only available for request within under 6 seconds.
         */
        | "sse"
        /**
         * if mode is none, the request client will have to check the result manually with time interval based long-polling.
         */
        | "none";
    secret: string;
}): Promise<ProxyAuthResult> {
    // todo

    const sessionId = await _api_newProxySession();
    switch (req.mode) {
        case "ws":
            const wsproc = new WsProxyAuthProc(sessionId, req.secret);
            return await wsproc.onResult();
        case "none":
            break;
        default:
            throw `mode "${req.mode}" is not supported yet.`;
    }
}

async function _api_newProxySession(): Promise<string> {
    const _newProxySessionReqRes = await client.post("/session/new");
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
async function _api_checkSessionAgain(): Promise<ProxyAuthResult | null> {
    return null;
}
