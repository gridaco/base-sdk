import { UrlShortenRequest, UrlShortenResult } from "./types";
import Axios from "axios"
import { URL_SERVICE_HOST } from "../constants/hosts";

const axios = Axios.create({
    baseURL: URL_SERVICE_HOST
})


export async function makeShortUrl(request: UrlShortenRequest): Promise<UrlShortenResult> {
    const res = await axios.post('/short', request)
    const data = res.data as UrlShortenResult
    return data;
}

export * from "./types"
