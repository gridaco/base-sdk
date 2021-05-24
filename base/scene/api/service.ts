import Axios from "axios";
import { __HOSTS } from "@base-sdk/core";
import { SceneRegisterRequest } from "./requests";

const axios = Axios.create({
    baseURL: __HOSTS.LEGACY_SCENE_STORE_SERVICE_HOST,
    // TODO - replace host name when ready
    //DESIGN_STORE_SERVICE_HOST
});
export class SceneStoreService {
    constructor(readonly projectId: string, readonly fileId: string) {}

    updateScene(id: string, data: any) {
        throw "not implemented";
    }

    async fetchScene(id: string) {
        const resp = await axios.get(`/scenes/${id}`);
        return resp;
    }

    async registerNewScene(request: SceneRegisterRequest) {
        const resp = await axios.post(`/scenes`, request);
        return resp;
    }
}
