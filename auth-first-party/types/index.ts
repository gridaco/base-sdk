/**
 * (This is not a OAuth) Proxy mode designed for internal bridged's product authentication for non-browser platforms.
 */
export enum ProxyAuthenticationMode {
    /**
     * resolves the async request with ws connection.
     * authenticate using bridged's official websocket proxy for non browser url callback supported platforms.
     */
    ws = "ws",
    /**
     * resolves the async request with sse result. - not recommanded. only available for request within under 6 seconds.
     */
    sse = "sse",
    /**
     * if mode is none, the request client will have to check the result manually with time interval based long-polling.
     */
    long_polling = "long-polling",
    none = "none",
}

/**
 * Client model
 */
export interface AuthProxySessionStartResult {
    id: string;
    mode: ProxyAuthenticationMode | string;
    expiresAt: Date;
    authUrl: string;
}

/**
 * result object of proxy auth. this exposes the access_token.
 *
 * this is not used on a browser environment, safely used preventing attacks.
 *
 * this token is requested by the user, only exposed to the requester.
 *
 * e.g. CLI login uses the proxy auth. request from cli, login from browser, token via proxy (ws, sse, grpc, etc..)
 */
export interface ProxyAuthResult {
    /**
     * ping of the clientId. same as request.
     */
    clientId: string;
    /**
     * success result of the process. success can be false when user cancel the process on the browser, or proxy session is expired (timeout)
     */
    success: boolean;
    message: string;
    /**
     * access token issued by proxy auth request. saved on a secure place, for only non-browser environment.
     *
     * `+` this field exceptionally follows snake_case naming.
     *
     * `access_token` will be empty when process failed (success is false)
     */
    access_token?: string;
}

/**
 * @todo - move this to base-sdk types
 * interface for building query params of accounts.bridged.xyz/(singin/signup)
 * with redirect
 * with proxy
 *
 * e.g.
 * ```
 * {
 *    redirect: "https://bridged.xyz/welcome",
 *    proxy: true,
 *    mode: ProxyAuthenticationMode.ws
 * }
 * ```
 * builds https://accounts.bridged.xyz/?redirect=https://bridged.xyz/welcome&proxy=1&mode=ws
 */
export interface AthenticationWebPageClientUrlBuilderParam {
    redirect: string;
    sessionId: string;
    mode: ProxyAuthenticationMode;
    proxy: boolean;
}
