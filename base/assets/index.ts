
import { ServiceResponse } from "../services-abstract"

/**
 * the type of the managed asset. default by file / text / color if parsed, if non fallbacked to file with no extension.
 */
export enum AssetType {
    uri = "URI",
    text = "TEXT",
    image = "IMAGE",
    icon = "ICON",
    illust = "ILLUST",
    color = "COLOR",
    file = "FILE",
    other = "UNKNOWN",
}

/**
 * the asset transport layer
 */
export interface RawAsset {
    id: string
    name?: string
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
    name?: string
    type: AssetType
    value: string
    key?: string
    tags?: string[]
}

export interface RawAssetUpdateRequest {
    id: string
    name?: string
    type?: AssetType
    value?: string
    tags?: string[]
}


export interface NestedAssetPutRequest {
    name?: string
    value: string
    tags?: string[]
}

export interface VariantAssetRegisterRequest {
    key?: string
    name?: string
    type: AssetType
    description?: string
    tags?: string[]
    initialAssets: Map<string, NestedAssetPutRequest>
}

export interface VariantAddRequest {
    variantAssetId: string
    variant: string
    asset: NestedAssetPutRequest
}

/**
 * request interface for updaiting variant n variant asset (updates raw asset liked to the target variant asset)
 */
export interface VariantUpdateRequest {
    variantAssetId: string
    variant: string
    asset: NestedAssetPutRequest
}

export interface VariantPutRequest {
    variantAssetId: string
    variant: string
    asset: NestedAssetPutRequest
}



/**
 * create and link new raw asset and link it to existing variant asset
 */
export interface VariantAssetAddRequest {
    variantId: string
    asset: RawAssetRegisterRequest
}

/**
 * response of register variant asset request returned by service server
 */
export interface VariantAssetRegisterResponse extends ServiceResponse<VariantAsset> { }


/**
 * response of register asset request returned by service server
 */
export interface RawAssetRegisterResponse extends ServiceResponse<RawAsset> { }
