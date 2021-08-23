/** server side object */
enum __S_DesignOrigin {
    /** figma desktop - figma plugin */
    FIGMA_DESKTOP = "FIGMA_DESKTOP",
    /** figma web // via api / url */
    FIGMA_WEB = "FIGMA_WEB",
    /** sketch desktop - sketch file or sketch plugin */
    SKETCH_DESKTOP = "SKETCH_DESKTOP",
    /** via sketch file upload */
    SKETCH_FILE = "SKETCH_FILE",
    /** xd desktop - xd plugin */
    XD_DESKTOP = "XD_DESKTOP",
    /**  design from uploaded image (unknown source) */
    IMAGE_UPLOAD = "IMAGE_UPLOAD",
    /** totally unknown source */
    UNKNOWN = "UNKNOWN",
}

/** server side object */
enum __S_StorableSceneType {
    /** any node */
    ANYNODE = "ANYNODE",
    /** node that is detected and marked as screen */
    SCREEN = "SCREEN",
    /** node that is a component host */
    COMPONENT = "COMPONENT",
    /** node that is a documentation */
    DOCS = "DOCS",
}

interface __PutSharingPolicy {
    policy: "none" | "*";
}

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
