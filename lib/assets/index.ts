
import { ServiceResponse } from "../abstract"

/**
 * the type of the managed asset. default by file / text / color if parsed, if non fallbacked to file with no extension.
 */
export enum AssetType {
    uri = "uri",
    text = "text",
    image = "image",
    icon = "icon",
    illust = "illust",
    color = "color",
    file = "file",
}

/**
 * the asset transport layer
 */
export interface Asset {
    id: string
    name: string
    type: AssetType
    value: string
    tags?: string[]
}

/**
 * request to register asset to cloud sent by the client
 */
export interface AssetRegisterRequest {
    name: string
    type: AssetType
    value: string
    tags?: string[]
}

/**
 * response of register asset request returned by service server
 */
export interface AssetRegisterResponse extends ServiceResponse<Asset> { }
