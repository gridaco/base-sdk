import { IImageRepository } from "../../asset-repository"
import { StorableLayer, StorableLayerData } from "../layers/storable-layer"
import { StorableLayerType } from "../layers/storable-layer-type"

/**
 * for transporting vanilla elements
 */
export interface VanillaScreenTransport {
    id: string
    width: number
    height: number
    project: string
    elements: Array<TransportLayer>
    repository: IImageRepository<any>
    background?: string
    backgroundColor: string
}

/**
 * the single layer used for transportation as vanilla design
 */
export interface TransportLayer extends StorableLayer {
    nodeId: string
    index: number
    type: StorableLayerType
    data: StorableLayerData
    x: number
    y: number
    width: number
    height: number
}

