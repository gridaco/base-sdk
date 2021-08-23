/** server side object */
export enum __S_DesignOrigin {
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
export enum __S_StorableSceneType {
    /** any node */
    ANYNODE = "ANYNODE",
    /** node that is detected and marked as screen */
    SCREEN = "SCREEN",
    /** node that is a component host */
    COMPONENT = "COMPONENT",
    /** node that is a documentation */
    DOCS = "DOCS",
}

export interface __PutSharingPolicy {
    policy: "none" | "*";
}

export interface SceneRecord {
    id: string;
    owner: string;
    sharing: __PutSharingPolicy;
    fileId: string;
    nodeId: string;
    sdkVersion: string;
    raw: object;
    rawname: string;
    preview: string;
    newname: string;
    description: string;
    from: __S_DesignOrigin;
    sceneType: __S_StorableSceneType;
    route: string;
    tags: string[];
    customdata_1p: object;
    customdata_3p: object;
    background: string;
    width: number;
    height: number;
    createdAt: Date;
    updatedAt: Date;
    archived: boolean;
    archivedAt: Date;
}
