/**
 * request body of URL shortener api
 */
export interface UrlShortenRequest {
    /**
     * the origin url
     */
    url: string
}


/**
 * result of url shortener
 */
export interface UrlShortenResult {
    id: string
    /**
     * the original givven url
     */
    origin: string
    /**
     * the host of bridged's url shortener service
     */
    host: string
    /**
     * the new-built short url
     */
    url: string
}