import type { ProxyAuthenticationMode } from "../proxy/types";

export * from "../proxy/types";

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
