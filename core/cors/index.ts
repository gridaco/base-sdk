import Axios, { AxiosProxyConfig, AxiosStatic, AxiosInstance } from "axios";
import { HOST } from "../constants";

/**
 * A base axios object that holds cors.bridged.cc as base host
 */
export const corsAxios = Axios.create({
    baseURL: HOST.CORS_SERVICE_HOST,
});

/**
 * @deprecated - use `useAxiosCors` instead. the proxy config won't work as expected.
 */
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

export function useAxiosCors(
    axios: AxiosStatic | AxiosInstance,
    config?: {
        // enabled by default. if false not set explicitly, cors will be enabled.
        enabled?: boolean;
    }
) {
    // if explicitly disabled, then do nothing.
    if (config?.enabled === false) {
        return;
    }
    axios.interceptors.request.use((cf) => {
        return {
            ...cf,
            baseURL: buildCorsFreeUrl(cf.baseURL),
        };
    });
}
