import { GlobalizedKeyRegisterRequest, GlobalizedTextKeyRegisterRequest, TextTranslationPutRequest } from "../api";
import { LayerKeyMapRepository } from "./layer-key-map.repository";
import { TextTranslationRepository } from "./text-translation.repository";

export class DesignGlobalizationRepositoriesStore {
    static readonly repositories: Array<DesignGlobalizationRepository> = []

    static make(projectId: string, sceneId: string): DesignGlobalizationRepository {
        const repo = new DesignGlobalizationRepository(projectId, sceneId)
        this.repositories.push(repo)
        console.log('created DesignGlobalizationRepository', repo)
        return repo
    }

    static find(sceneId: string): DesignGlobalizationRepository {
        return this.repositories.find(r => r.sceneId == sceneId)!
    }


}


export class DesignGlobalizationRepository {
    private readonly textTranslationRepository: TextTranslationRepository
    private readonly layerKeyMapRepository: LayerKeyMapRepository
    constructor(readonly projectId: string, readonly sceneId: string) {
        this.textTranslationRepository = new TextTranslationRepository(projectId)
        this.layerKeyMapRepository = new LayerKeyMapRepository(sceneId)
    }

    async registerKey(layerId: string, request: GlobalizedKeyRegisterRequest) {
        throw 'not implemented'
    }

    async registerTextKey(layerId: string, request: GlobalizedTextKeyRegisterRequest) {
        const key = await this.textTranslationRepository.registerKey(request)
        this.layerKeyMapRepository.registerMap(layerId, key.id)
        return key
    }

    async putTextTranslation(layerId: string, request: TextTranslationPutRequest) {
        const key = await this.textTranslationRepository.putTranslation(request)
        return key
    }

    async fetchKeys() {
        throw 'not implemented'
    }

    async fetchTranslations() {
        throw 'not implemented'
    }
}