import Axios from "axios"
import { ASSET_SERVICE_HOST } from "../../constants/hosts"
import { VariantAssetAddRequest, VariantAssetRegisterRequest, VariantAssetRegisterResponse } from ".."

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