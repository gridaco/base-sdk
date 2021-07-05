import type { ProxyAuthenticationMode } from "../proxy/types";

export * from "../proxy/types";

/**
 * @todo - move this to base-sdk types
 * interface for building query params of accounts.grida.co/(singin/signup)
 * with redirect
 * with proxy
 *
 * e.g.
 * ```
 * {
 *    redirect: "https://grida.co/welcome",
 *    proxy: true,
 *    mode: ProxyAuthenticationMode.ws
 * }
 * ```
 * builds https://accounts.grida.co/?redirect=https://grida.co/welcome&proxy=1&mode=ws
 */
export interface AthenticationWebPageClientUrlBuilderParam {
    redirect: string;
    sessionId: string;
    mode: ProxyAuthenticationMode;
    proxy: boolean;
}
