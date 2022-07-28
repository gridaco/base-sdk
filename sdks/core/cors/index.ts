import Axios, { AxiosProxyConfig, AxiosStatic, AxiosInstance } from "axios";
import { HOST } from "../constants";

/**
 * A base axios object that holds cors.bridged.cc as base host
 */
export const corsAxios = (apikey: string) =>
    Axios.create({
        baseURL: HOST.CORS_SERVICE_HOST,
        headers: {
            "x-cors-grida-api-key": apikey,
        },
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
        // required - https://github.com/gridaco/base/issues/23
        apikey?: string;
    }
) {
    // if explicitly disabled, then do nothing.
    if (config?.enabled === false) {
        return;
    }
    axios.interceptors.request.use((cf) => {
        return {
            ...cf,
            baseURL: buildCorsFreeUrl(cf.baseURL!),
            headers: {
                ...cf.headers,
                "x-cors-grida-api-key": config?.apikey,
            },
        };
    });
}
