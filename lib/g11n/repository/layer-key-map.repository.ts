import { LayerTranslation } from ".."
import { fetchTextTranslationFromLayer, fetchTextTranslationsFromScene, putLayerKeyMap } from "../api"

export class LayerKeyMapRepository {
    private readonly layerKeyMap = new Map<string, string>()
    constructor(readonly projectId: string, readonly sceneId: string) {

    }


    async putMap(layerId: string, keyId: string) {
        this.layerKeyMap.set(layerId, keyId)
        await putLayerKeyMap(this.projectId, {
            layerId: layerId,
            keyId: keyId,
            sceneId: this.sceneId
        })
    }


    async fetchLayerTranslation(layerId: string): Promise<LayerTranslation> {
        const t = await fetchTextTranslationFromLayer(this.projectId, {
            layerId: layerId,
            sceneId: this.sceneId
        })
        return t
    }

    async fetchTranslations(): Promise<ReadonlyArray<LayerTranslation>> {
        return await fetchTextTranslationsFromScene(this.projectId, {
            sceneId: this.sceneId
        })
    }
}