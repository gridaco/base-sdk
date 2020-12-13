import Axios from "axios"
import { G11N_SERVICE_HOST } from "../../constants/hosts"
import { GlobalizedKeyRegisterRequest, TextTranslationPutRequest } from "./requests"

const axios = Axios.create({
    baseURL: G11N_SERVICE_HOST
})

// TODO
// implement
// add docs
export class G11nService {
    constructor() {
        throw 'not implemented'
    }
}


export async function registerTranslationKey(projectId: string, request: GlobalizedKeyRegisterRequest) {
    const resp = await axios.post(`keys/`, request)
    return resp.data
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