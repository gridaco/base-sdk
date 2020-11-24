import { TextManifest, ImageManifest } from "@reflect.bridged.xyz/core"
import { IImageRepository } from "../../asset-repository"

/**
 * for transporting vanilla elements
 */
export interface VanillaScreenTransport {
    id: string
    width: number
    height: number
    project: string
    elements: Array<VanilaElement>
    repository: IImageRepository<any>
}

export interface TransportLayer<T> {
    id: string
    index: number
    type: string
    data: T
    x: number
    y: number
    width: number
    height: number
}

export type VanilaElement = TransportLayer<TextManifest> | TransportLayer<ImageManifest>
