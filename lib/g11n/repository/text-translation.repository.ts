import { AssetType } from "../../assets"
import { RepositoryLoadingState } from "../../types/repository-loading-state"
import { GlobalizedTextKeyRegisterRequest, TextTranslationPutRequest, G11nService, } from "../api"
import { GlobalizedKeyRegisterResponse } from "../api/responses"

export class TextTranslationRepository {
    readonly api: G11nService
    constructor(readonly projectId: string) {
        this.api = new G11nService(projectId)
    }

    async status(): Promise<RepositoryLoadingState> {
        // TODO implement this. initially fetch keys when repository is created
        return 'loading'
    }

    async registerKey(request: GlobalizedTextKeyRegisterRequest): Promise<GlobalizedKeyRegisterResponse> {
        return await this.api.registerKey({
            keyName: request.keyName,
            embeddable: request.embeddable,
            initialTranslations: request.initialTranslations,
            assetType: AssetType.text
        })
    }

    async updateKeyName(id: string, newKeyName: string) {
        return await this.api.updateKeyName(id, newKeyName)
    }

    async putTranslation(request: TextTranslationPutRequest) {
        return await this.api.putTextTranslation(request)
    }

    async fetchTranslation(id: string) {
        return await this.api.fetchTranslation(id)
    }
}