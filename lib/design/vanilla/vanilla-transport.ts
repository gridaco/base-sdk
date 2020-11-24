import { IImageRepository } from "../../asset-repository"
import { StorableLayer } from "../layers/storable-layer"

/**
 * for transporting vanilla elements
 */
export interface VanillaScreenTransport {
    id: string
    width: number
    height: number
    project: string
    elements: Array<TransportLayer<any>>
    repository: IImageRepository<any>
}

/**
 * the single layer used for transportation as vanilla design
 */
export interface TransportLayer<T> extends StorableLayer<T> {
    id: string
    index: number
    type: string
    data: T
    x: number
    y: number
    width: number
    height: number
}

