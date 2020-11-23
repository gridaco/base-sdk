
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
export interface RawAsset {
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
    assets: Map<string, RawAsset>
}


/**
 * request to register asset to cloud sent by the client
 */
export interface RawAssetRegisterRequest {
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
 * response of register variant asset request returned by service server
 */
export interface VariantAssetRegisterResponse extends ServiceResponse<VariantAsset> { }


/**
 * response of register asset request returned by service server
 */
export interface RawAssetRegisterResponse extends ServiceResponse<RawAsset> { }
