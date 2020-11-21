
import { ServiceResponse } from "../abstract"

export enum AssetType {
    uri = "uri",
    text = "text",
    image = "image",
    icon = "icon",
    illust = "illust",
    color = "color"
}

export interface Asset {
    id: string
    name: string
    type: AssetType
    value: string
}

export interface AssetRegisterRequest {
    name: string
    type: AssetType
    value: string
}

export interface AssetRegisterResponse extends ServiceResponse<Asset> { }
