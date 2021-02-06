import Axios from "axios";
import { CORS_SERVICE_HOST } from "../constants/hosts";

/**
 * A base axios object that holds cors.bridged.cc as base host
 */
export const corsAxios = Axios.create({
    baseURL: CORS_SERVICE_HOST
})

/**
 * builds cors free request url with givvne input.
 */
export function buildCorsFreeUrl(url: string): string{
    return `${CORS_SERVICE_HOST}/${url}`
}