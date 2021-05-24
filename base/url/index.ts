import { UrlShortenRequest, UrlShortenResult } from "./types";
import Axios from "axios";
import { __HOSTS } from "@base-sdk/core";

const axios = Axios.create({
    baseURL: __HOSTS.URL_SERVICE_HOST,
});

export async function makeShortUrl(
    request: UrlShortenRequest
): Promise<UrlShortenResult> {
    const res = await axios.post("/short", request);
    const data = res.data as UrlShortenResult;
    return data;
}

export * from "./types";
