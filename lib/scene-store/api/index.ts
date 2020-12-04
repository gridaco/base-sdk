import { StorableLayer, StorableScene } from "../../design";

export interface SceneRegisterRequest extends StorableScene {
    // ... and...
    fileId: string
    projectId: string
    preview: string

    // TODO - handle linked components registration logic with recursive safe logic.
    /**
     * when initially registering the scene, or updating the scene, all the linked components are also recognized as a scene, and the layer of the originally requested scne should reference the component being linked to this scene.
     * in order to make this possible, we require client to upload all referenced, (via connection tree, the sub component of the component, ant its one too.) should be uploaded initially, in a nested form.
     */
    linkedComponents?: StorableScene[]
}

// layer request, formed differently as able to reference the compennet id if po
export interface LayerRegisterNestedRequst {

}