import Axios from "axios"
import { VariantAssetRegisterRequest, VariantAssetRegisterResponse } from ".."

const HOST = "https://assets.bridged.cc"
const VARIANT_ASSETS_ROUTE = "variant-assets"
const axios = Axios.create({
    baseURL: HOST
})


async function registerVariantAsset(req: VariantAssetRegisterRequest): Promise<VariantAssetRegisterResponse> {
    const resp = await axios.post(VARIANT_ASSETS_ROUTE)
    return resp.data as VariantAssetRegisterResponse
}