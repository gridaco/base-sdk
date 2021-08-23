import Axios from "axios";
import * as req from "./requests";
import * as res from "./response";

const axios = Axios.create({
    baseURL: "https://scene-store.bridged.cc/scenes",
});

const axios_public_access = Axios.create({
    baseURL: "https://scene-store.bridged.cc/scenes",
});

export async function _api_registerScene(
    req: req.SceneRegisterRequest
): Promise<res.GetSceneRecordResult> {
    const _r = await axios.post<res.GetSceneRecordResult>("new", {
        ...req,
    });

    return _r.data;
}

export async function _api_getScene(
    id: string
): Promise<res.GetSceneRecordResult> {
    const _r = await axios.get<res.GetSceneRecordResult>(`${id}`);
    return _r.data;
}

export async function _api_updateSharingPolicy(
    id: string,
    req: req.UpdateSharingPolicyRequest
): Promise<res.UpdateSharingPolicyResult> {
    const _r = await axios.post<res.UpdateSharingPolicyResult>(
        `${id}/sharing`,
        {
            ...req,
        }
    );

    return _r.data;
}

/** public api */
export async function _api_getSharedScene(
    id: string
): Promise<res.GetPublicSharedSceneRecordResult> {
    const _r =
        await axios_public_access.get<res.GetPublicSharedSceneRecordResult>(
            `shared/${id}`
        );
    //

    return _r.data;
}

export async function _api_listMyScenes(): Promise<res.GetManySceneRecordResult> {
    const _r = await axios.get<res.GetManySceneRecordResult>(`/`);
    return _r.data;
}
