
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
     * single layer holding its data only.
     */
    vanilla = "VANILLA"
}