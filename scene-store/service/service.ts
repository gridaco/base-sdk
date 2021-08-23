import { __HOSTS } from "@base-sdk/core";
import * as api from "../__api";

export class SceneStoreService {
    constructor() {}

    async register(
        request: api.SceneRegisterRequest
    ): Promise<api.GetSceneRecordResult> {
        const resp = await api._api_registerScene(request);
        return resp;
    }

    async get(id: string): Promise<api.GetSceneRecordResult> {
        return await api._api_getScene(id);
    }

    async updateSharing(
        id: string,
        request: api.UpdateSharingPolicyRequest
    ): Promise<api.UpdateSharingPolicyResult> {
        return await api._api_updateSharingPolicy(id, request);
    }

    async list() {
        return await api._api_listMyScenes();
    }

    async getShared(id: string): Promise<api.GetSceneRecordResult> {
        return await api._api_getSharedScene(id);
    }
}
