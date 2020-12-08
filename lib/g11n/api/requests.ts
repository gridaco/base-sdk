import { AssetType } from "../../assets";

export interface GlobalizedKeyRegisterRequest {
    /**
    * name of the key, commonly said as just "key" on the client side.
    */
    keyName: string

    /**
    * type of asset to be linked with this key.
    */
    assetType: AssetType

    /**
     * configuration of availability of this key being embedded by other key.
     * defaults to false
     * 
     * if embeddable set to true, this key will be visible for search results of key.
     * if embeddable 'changed' to false, all the referening assets will be replaced with last known value & localse of this key's asset.
     */
    embeddable?: boolean
}