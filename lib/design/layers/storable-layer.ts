import { TextManifest, ImageManifest } from "@reflect.bridged.xyz/core";
import { StorableLayerType } from "./storable-layer-type";

/**
 * the data type that storable layer can hold. at this moment, text or image manifest data.
 */
export type StorableLayerData = TextManifest | ImageManifest

export interface StorableLayer {
    /**
    * node id of this layer originated from design file
    */
    nodeId: string

    /**
    * un-managed name of this layer. usually if the layer is unmanaged, it will give us name such like "Group 2" and "Rectangle 13".
    * Other wise the layer is a instance, it might contain readable name defined by designer.
    */
    name: string

    /**
     * the type of the layer. it can be instance, group, or vanilla.
     * wichh, vanilla can be text, shape, image, or other various types.
     * Since it's rapidly changing, we don't manage the vanilla layer in the managed way.
     * simply storing the raw-configuration of the layer by the sdk-version.
     */
    type: StorableLayerType


    /**
     * in the case this layer's type is group or instance, it holds extra layers data underneath it.
     * 
     * e.g. the type of this layer is component or group, it always holds extra layer data.
     */
    layers?: StorableLayer[]

    /**
    * the index of this layer based on the scene it's attatched to. the layer under parent group layer will still have index relative to root scene.
    */
    index: number

    /**
     * the custom data this layer holds. matches the StorableLayerData
     */
    data?: StorableLayerData

    /**
     * the id of this layer, as scene if possible. scene only component can be embedded under layer, the scene is explicitly renamed as component.
     */
    componentId?: string

    /**
     * the relative x position of this layer
     */
    x: number

    /**
     * the relative y position of this layer
     */
    y: number

    /**
    * the width of the layer. as-is
    */
    width: number

    /**
    * the height of the layer. as-is
    */
    height: number
}