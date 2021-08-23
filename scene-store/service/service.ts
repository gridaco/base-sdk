import Axios from "axios";
import { __HOSTS } from "@base-sdk/core";
import * as api from "../__api";
import { _configure } from "../__api";

interface StaticToken {
    type: "token";
    token: string;
}

interface BrowserAuthOtp {
    type: "auto-browser-otp";
    token?: () => Promise<string>;
}

const DEFAULT_OTP_LOADER = async () => {
    const _r = await Axios.create({
        baseURL: "https://accounts.services.grida.co/issue/otp",
        withCredentials: true,
    }).get<{
        user_id: string;
        access_token: string;
    }>("/");

    return _r.data.access_token;
};

type CredentialProvider = StaticToken | BrowserAuthOtp;

export class SceneStoreService {
    constructor(private readonly credential: CredentialProvider) {}

    private async configure() {
        switch (this.credential.type) {
            case "auto-browser-otp": // this otp must be issued on every request.
                const act = await (
                    this.credential.token ?? DEFAULT_OTP_LOADER
                )();
                _configure(act);
            case "token":
                _configure((this.credential as StaticToken).token);
        }
    }

    async register(
        request: api.SceneRegisterRequest
    ): Promise<api.GetSceneRecordResult> {
        await this.configure();
        const resp = await api._api_registerScene(request);
        return resp;
    }

    async get(id: string): Promise<api.GetSceneRecordResult> {
        await this.configure();
        return await api._api_getScene(id);
    }

    async updateSharing(
        id: string,
        request: api.UpdateSharingPolicyRequest
    ): Promise<api.UpdateSharingPolicyResult> {
        await this.configure();
        return await api._api_updateSharingPolicy(id, request);
    }

    async list() {
        await this.configure();
        return await api._api_listMyScenes();
    }

    async getShared(id: string): Promise<api.GetSceneRecordResult> {
        return await api._api_getSharedScene(id);
    }
}
