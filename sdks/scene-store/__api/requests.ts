import {
    __PutSharingPolicy,
    __S_DesignOrigin,
    __S_StorableSceneType,
} from "./server-types";

export interface SceneRegisterRequest {
    /** the id of this scene's origin design file */
    fileId: string;

    /** the id of this scene's origin design file's node of this content */
    nodeId: string;

    /* sharing policy  (currently supports ["none", "*"]) */
    initialSharingPolicy?: __PutSharingPolicy;

    /** raw big json tree data (snapshot) */
    raw: object;

    /** raw (original) name at the point of registration. */
    rawname: string;

    // preview of this scene as png hosted url
    preview?: string;

    // name of this layer described by designer, defaults to the node's name, can be overriden through the console.
    // which means, the name can be different with the design node's name.
    newname?: string;

    // the explicit description of this scene set by editor. for human communication purpose.
    description?: string;

    // the design platform used for design of this origin design file.
    from: __S_DesignOrigin;

    // the type of this scene. rather it can be screen, component, or docs.
    sceneType: __S_StorableSceneType;

    initialTags: string[];

    customdata_1p: {};

    // region layer property
    background?: string;
    width: number;
    height: number;
    // endregion layer property
}

export interface UpdateSharingPolicyRequest {
    sharingPolicy: __PutSharingPolicy;
}
