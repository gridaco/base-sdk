
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
    key?: string
    type: AssetType
    value: string
    tags?: string[]
}


export interface VariantAsset {
    id: string
    name: string
    key: string
    description: string
    projectId: string
    type: AssetType
    tags?: string[]
    assets: Map<string, Asset>
}


/**
 * request to register asset to cloud sent by the client
 */
export interface AssetRegisterRequest {
    name: string
    type: AssetType
    value: string
    key: string
    tags?: string[]
}



export interface NestedAssetRegisterRequest {
    name: string
    value: string
    tags?: string[]
}

export interface VariantAssetRegisterRequest {
    key: string
    name: string
    type: AssetType
    description: string
    tags: string[]
    initialAssets?: Map<string, NestedAssetRegisterRequest>
}

/**
 * response of register asset request returned by service server
 */
export interface AssetRegisterResponse extends ServiceResponse<Asset> { }
