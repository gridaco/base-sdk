import Axios from "axios"
import { ASSET_SERVICE_HOST } from "../../constants/hosts"
import { VariantAddRequest, VariantAsset, VariantAssetRegisterRequest, VariantAssetRegisterResponse, VariantPutRequest, VariantUpdateRequest } from ".."

const VARIANT_ASSETS_ROUTE = "variant-assets"
const axios = Axios.create({
    baseURL: ASSET_SERVICE_HOST
})


export async function registerVariantAsset(projectId: string, req: VariantAssetRegisterRequest): Promise<VariantAssetRegisterResponse> {
    const resp = await axios.post(VARIANT_ASSETS_ROUTE, req)
    return resp.data as VariantAssetRegisterResponse
}

export async function getVariantAsset(projectId: string, id: string): Promise<VariantAsset> {
    const resp = await axios.get(`${VARIANT_ASSETS_ROUTE}/${id}`)
    return resp.data as VariantAsset
}

export async function putVariant(projectId: string, request: VariantPutRequest): Promise<VariantAsset> {
    try {
        const resp = await axios.put(`${VARIANT_ASSETS_ROUTE}/${request.variantAssetId}/variants/${request.variant}`, request.asset)
        return resp.data as VariantAsset
    } catch (_) {
        console.error('an unkwon error occured while performing putVariant', _)
    }
}

export async function addAvariant(projectId: string, request: VariantAddRequest): Promise<VariantAsset> {
    const resp = await axios.post(`${VARIANT_ASSETS_ROUTE}/${request.variantAssetId}/variants/${request.variant}`, request.asset)
    return resp.data as VariantAsset
}

export async function updateVariant(projectId: string, request: VariantUpdateRequest): Promise<VariantAsset> {
    const resp = await axios.patch(`${VARIANT_ASSETS_ROUTE}/${request.variantAssetId}/variants/${request.variant}`, request.asset)
    return resp.data as VariantAsset
}
