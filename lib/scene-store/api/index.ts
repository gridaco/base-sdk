import { StorableLayer, StorableScene } from "../../design";

export interface SceneRegisterRequest extends StorableScene {
    // ... and...
    fileId: string
    projectId: string
}
