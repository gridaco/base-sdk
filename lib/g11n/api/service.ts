import Axios from "axios"
import { G11N_SERVICE_HOST } from "../../constants/hosts"
import { GlobalizedKeyRegisterRequest, TextTranslationPutRequest } from "./requests"
import { GlobalizedKeyRegisterResponse } from "./responses"
const axios = Axios.create({
    baseURL: G11N_SERVICE_HOST
})

// TODO
// add docs
export class G11nService {
    constructor(readonly projecId: string) {
    }

    async registerKey(request: GlobalizedKeyRegisterRequest): Promise<GlobalizedKeyRegisterResponse> {
        return await registerTranslationKey(this.projecId, request)
    }


    async updateKeyName(id: string, newKeyName: string) {
        updateKeyName(id, {
            keyName: newKeyName
        })
    }

    async putTextTranslation(request: TextTranslationPutRequest) {
        return await putTextTranslation(this.projecId, request)
    }
}


export async function registerTranslationKey(projectId: string, request: GlobalizedKeyRegisterRequest): Promise<GlobalizedKeyRegisterResponse> {
    const resp = await axios.post(`keys/`, request)
    return resp.data as GlobalizedKeyRegisterResponse
}

export async function updateKeyName(id: string, request: {
    keyName: string
}) {
    const resp = await axios.patch(`/keys/${id}/name`, request)
    return resp.data
}

export async function putTextTranslation(projectId: string, request: TextTranslationPutRequest) {
    const resp = await axios.put(`translations/${request.keyId}/locales/${request.locale}`, {
        value: request.value
    })
    return resp.data
}