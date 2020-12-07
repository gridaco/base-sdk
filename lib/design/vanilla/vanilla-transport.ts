import { IImageRepository } from "../../asset-repository"
import { StorableLayer, StorableLayerData } from "../layers/storable-layer"
import { StorableLayerType } from "../layers/storable-layer-type"
import { StorableScene } from "../scenes"

/**
 * for transporting vanilla elements
 */
export interface VanillaSceneTransport {
    id: string
    scene: StorableScene
    repository: IImageRepository<any>
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

