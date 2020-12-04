
/**
 * the type of the layer inside scene to be represented as  pure db record.
 */
export enum StorableLayerType {
    /**
     * instance of some scne of type = "COMPONENT"
     */
    instance = "INSTANCE",

    /**
     * single layer holding configuration to be a group, with children layer data
     */
    group = "GROUP",

    /**
     * single layer holding its data only. interpreted as graphics (image/vector)
     * also known as frame / ellipse / rectangle
     */
    vanilla = "VANILLA",

    /**
     * A pure text layer with ReflectTextManifest data
     */
    text = "TEXT",

    /**
     * A pure line layer with ReflectLineManifest data
     */
    line = "LINE",

    /**
     * A pure vector (grouped) asset
     * supports svg
     */
    vector = "VECTOR",

    /**
     * A pure bitmap image containing layer.
     * supports png
     */
    image = "IMAGE"
}