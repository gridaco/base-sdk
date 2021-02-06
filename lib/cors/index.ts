import Axios, { AxiosProxyConfig } from "axios";
import { CORS_SERVICE_HOST } from "../constants/hosts";

/**
 * A base axios object that holds cors.bridged.cc as base host
 */
export const corsAxios = Axios.create({
    baseURL: CORS_SERVICE_HOST,
});

export const corsAxiosProxyConfig: AxiosProxyConfig = {
    host: CORS_SERVICE_HOST,
    port: 443,
};

/**
 * builds cors free request url with givvne input.
 */
export function buildCorsFreeUrl(url: string): string {
    return `${CORS_SERVICE_HOST}/${url}`;
}
