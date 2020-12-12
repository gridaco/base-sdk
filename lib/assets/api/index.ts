import Axios from "axios"
import { ASSET_SERVICE_HOST } from "../../constants/hosts"
import { VariantAsset, VariantAssetAddRequest, VariantAssetRegisterRequest, VariantAssetRegisterResponse, VariantUpdateRequest } from ".."
import { ServiceResponse } from "../../services-abstract/response"

const VARIANT_ASSETS_ROUTE = "variant-assets"
const axios = Axios.create({
    baseURL: ASSET_SERVICE_HOST
})


export async function registerVariantAsset(projectId: string, req: VariantAssetRegisterRequest): Promise<VariantAssetRegisterResponse> {
    const resp = await axios.post(VARIANT_ASSETS_ROUTE, req)
    return resp.data as VariantAssetRegisterResponse
}

export async function addVariantToAsset(projectId: string, request: VariantAssetAddRequest) {
    const resp = await axios.post('')
}

export async function getVariantAsset(projectId: string, id: string): Promise<ServiceResponse<VariantAsset>> {
    const resp = await axios.get(`${VARIANT_ASSETS_ROUTE}/${id}`)
    return resp.data as ServiceResponse<VariantAsset>
}

export async function updateVariant(projectId: string, request: VariantUpdateRequest) {
    const resp = await axios.post()
}