import { UrlShortenRequest, UrlShortenResult } from "./types";
import Axios from "axios"

const axios = Axios.create({
    baseURL: "https://bridged.cc/"
})


export async function makeShortUrl(request: UrlShortenRequest): Promise<UrlShortenResult> {
    const res = await axios.post('/short', request)
    const data = res.data as UrlShortenResult
    return data;
}

export * from "./types"
