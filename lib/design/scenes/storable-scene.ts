import { StorableLayer } from "../layers";
import { StorableSceneType } from "./storable-scene-type";

export interface StorableScene {
    /**
       * the unique id on the database
       */
    id: string

    /**
     * the id of this scene's origin design file's node of this content
     */
    nodeId: string

    /**
     * preview image as png for this scene.
     */
    cachedPreview: string

    /**
     * the type of this scene. rather it can be screen, component, or docs.
     */
    sceneType: StorableSceneType

    /**
     * the route of this scene, used for screen.
     */
    route?: string

    /**
     * name of this layer described by designer, defaults to the node's name, can be overriden through the console.
     * which means, the name can be different with the design node's name.
     */
    name?: string

    /**
     * the explicit description of this scene set by editor. for human communication purpose.
     */
    description?: string

    /**
     * the explicit tags set by editor. for human communication.
     */
    tags?: string[]


    /**
     * alias for containing many variants
     * ```
     * e.g. "main-page" is the alias for screens below
     * - "main-page/(lg)"
     * - "main-page/(md)"
     * - "main-page/(xs)"
     * ```
     */
    alias?: string


    /**
     * the unique variant under alias.
     * 
     * for alias main page and page "main-page/(lg)", the variant is "lg"
     */
    variant?: string

    /**
     * the layers holded on this scene. can be vanilla, group, or instance.
     */
    layers: StorableLayer[]

    /**
     * the width of the scene. as-is
     */
    width: number

    /**
     * the height of the scene. as-is
     */
    height: number

    /**
     * the background of this scene. can be color or asset uri.
     * in most cases, it will be color. #FFFFFF
     */
    background: string
}