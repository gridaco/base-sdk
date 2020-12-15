export class LayerKeyMapRepository {
    private readonly layerKeyMap = new Map<string, string>()
    constructor(readonly sceneId: string) {

    }


    registerMap(layerId: string, keyId: string) {
        this.layerKeyMap.set(layerId, keyId)
    }

    getLayerHasKey(layerId: string): boolean {
        return this.layerKeyMap.has(layerId)
    }

    getLayerKey(layerId: string): string | undefined {
        return this.layerKeyMap.get(layerId)
    }
}