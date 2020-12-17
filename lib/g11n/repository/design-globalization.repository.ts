import { RawAsset } from "../../assets";
import { IGlobalizedKey, LayerTranslation } from "..";
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
    readonly locales = ['en', 'ja', 'ko']
    readonly chache = new Map<string, RawAsset>()
    private readonly textTranslationRepository: TextTranslationRepository
    private readonly layerKeyMapRepository: LayerKeyMapRepository
    constructor(readonly projectId: string, readonly sceneId: string) {
        this.textTranslationRepository = new TextTranslationRepository(projectId)
        this.layerKeyMapRepository = new LayerKeyMapRepository(projectId, sceneId)
    }

    async registerTextKey(layerId: string, request: GlobalizedTextKeyRegisterRequest) {
        const key = await this.textTranslationRepository.registerKey(request)
        this.layerKeyMapRepository.putMap(layerId, key.id)
        return key
    }

    async putTextTranslation(layerId: string, request: TextTranslationPutRequest) {
        const key = await this.textTranslationRepository.putTranslation(request)
        return key
    }

    async fetchTranslation(layerId: string, options?: {
        cached?: boolean
    }): Promise<IGlobalizedKey | undefined> {
        const lt = await this.layerKeyMapRepository.fetchLayerTranslation(layerId)
        if (lt) {
            const translation = lt.translation
            console.log(`fetched translation for layer ${layerId}`, translation)
            return translation
        }

        return undefined
    }

    async fetchLocaleTranslation(layerId: string, locale: string): Promise<string | undefined> {
        const translation = await this.fetchTranslation(layerId)
        const translations = (translation?.translations as any)
        if (translations) {
            return (translations[locale] as RawAsset)?.value
        }
    }

    async fetchKeys(): Promise<ReadonlyArray<string>> {
        return (await this.layerKeyMapRepository.fetchTranslations()).map((e) => e.keyId)
    }

    async fetchTranslations(): Promise<ReadonlyArray<LayerTranslation>> {
        return await this.layerKeyMapRepository.fetchTranslations()
    }
}