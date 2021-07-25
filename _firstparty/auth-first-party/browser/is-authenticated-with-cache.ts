import { verifyBorwserAuth } from "./verify-browser-auth";

// authentication information cache - this presumes that the last authentication is not expired.
const __last_authentication_meta = {
    at: null,
    authenticated: false,
    expiresAt: null,
};

export async function isAuthenticated(): Promise<boolean> {
    // todo - add expire time checker
    if (__last_authentication_meta.authenticated) {
        return true;
    }
    try {
        __last_authentication_meta.at = Date.now();
        const res = await verifyBorwserAuth();
        if (res) {
            __last_authentication_meta.authenticated = true;
            // __last_authentication_meta.expiresAt = res.expiresAt;
            return true;
        } else {
            return false;
        }
    } catch (_) {
        return false;
    }
}
