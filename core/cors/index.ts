import Axios, { AxiosProxyConfig } from "axios";
import { HOST } from "../constants";

/**
 * A base axios object that holds cors.bridged.cc as base host
 */
export const corsAxios = Axios.create({
    baseURL: HOST.CORS_SERVICE_HOST,
});

export const corsAxiosProxyConfig: AxiosProxyConfig = {
    host: HOST.CORS_SERVICE_HOST,
    port: 443,
};

/**
 * builds cors free request url with givvne input.
 */
export function buildCorsFreeUrl(url: string): string {
    return `${HOST.CORS_SERVICE_HOST}/${url}`;
}
