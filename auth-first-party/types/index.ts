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
