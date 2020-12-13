import Axios from "axios"
import { ASSET_SERVICE_HOST } from "../../constants/hosts"
import { VariantAsset, VariantAssetRegisterRequest, VariantAssetRegisterResponse, VariantUpdateRequest } from ".."
import { ServiceResponse } from "../../services-abstract/response"

const VARIANT_ASSETS_ROUTE = "variant-assets"
const axios = Axios.create({
    baseURL: ASSET_SERVICE_HOST
})


export async function registerVariantAsset(projectId: string, req: VariantAssetRegisterRequest): Promise<VariantAssetRegisterResponse> {
    const resp = await axios.post(VARIANT_ASSETS_ROUTE, req)
    return resp.data as VariantAssetRegisterResponse
}

export async function getVariantAsset(projectId: string, id: string): Promise<ServiceResponse<VariantAsset>> {
    const resp = await axios.get(`${VARIANT_ASSETS_ROUTE}/${id}`)
    return resp.data as ServiceResponse<VariantAsset>
}

/**
 * 
 * @param projectId 
 */
export async function putVariant(projectId: string, variantAssetId: string, variantKey: string) {
    // TODO - make body from request interface
    const body = {

    }
    const resp = await axios.put(`${VARIANT_ASSETS_ROUTE}/${variantAssetId}/variants`, body)
}

export async function addAvariant() {
    // FIXME
    await axios.post(`${VARIANT_ASSETS_ROUTE}/`)
}

export async function updateVariant(projectId: string, request: VariantUpdateRequest) {
    // FIXME  - this is wrong configuration
    const resp = await axios.patch(`${VARIANT_ASSETS_ROUTE}/${request.variantAssetId}/variants/`)
}
