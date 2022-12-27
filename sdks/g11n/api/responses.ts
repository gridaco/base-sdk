import { AssetType } from "@base-sdk/assets";

export interface GlobalizedKeyRegisterResponse {
    id: string;
    keyName: string;
    type: AssetType;
    /**
     * configuration of availability of this key being embedded by other key.
     * defaults to false
     *
     * if embeddable set to true, this key will be visible for search results of key.
     * if embeddable 'changed' to false, all the referening assets will be replaced with last known value & localse of this key's asset.
     */
    embeddable?: boolean;

    // TODO add typings to this field
    assets: any;
}
