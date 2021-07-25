import { BrowserAuthenticationAxiosClient } from "./browser-auth-client";

/**
 * simple verification that the browser instance is authenticated with cookie.
 */
export async function verifyBorwserAuth(): Promise<boolean> {
    try {
        return (await (
            await BrowserAuthenticationAxiosClient.get("/verify/browser-auth")
        ).data) as boolean;
    } catch (_) {
        if (_.response.status == 401) {
            return false;
        }
        throw _;
    }
}
