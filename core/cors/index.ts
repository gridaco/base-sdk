import Axios, { AxiosProxyConfig } from "axios";
import { __HOSTS } from "@base-sdk/core";

/**
 * A base axios object that holds cors.bridged.cc as base host
 */
export const corsAxios = Axios.create({
    baseURL: __HOSTS.CORS_SERVICE_HOST,
});

export const corsAxiosProxyConfig: AxiosProxyConfig = {
    host: __HOSTS.CORS_SERVICE_HOST,
    port: 443,
};

/**
 * builds cors free request url with givvne input.
 */
export function buildCorsFreeUrl(url: string): string {
    return `${__HOSTS.CORS_SERVICE_HOST}/${url}`;
}
