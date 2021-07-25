import { useEffect, useState } from "react";
import { browser } from "@base-sdk-fp/auth";

export type LoginState = "signedin" | "loading" | "expired" | "unauthorized";
export function useAuthState() {
    const [isAuthenticated, setIsAuthenticated] =
        useState<LoginState>("loading");

    useEffect(() => {
        browser
            .verifyBorwserAuth()
            .then((r) => {
                if (r) {
                    setIsAuthenticated("signedin");
                } else {
                    setIsAuthenticated("expired");
                }
            })
            .catch(() => setIsAuthenticated("unauthorized"))
            .finally();
    }, []);

    return isAuthenticated;
}
