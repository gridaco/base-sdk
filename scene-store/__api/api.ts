import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://scene-store.bridged.cc/scenes",
});

const axios_public_access = Axios.create({
    baseURL: "https://scene-store.bridged.cc/scenes",
});

export async function _api_registerScene() {
    await axios.post("new", {
        // data here
    });
}

export async function _api_getScene(id: string) {
    await axios.get(`${id}`);
}

export async function _api_updateSharingPolicy(id: string, sharing) {
    await axios.post(`${id}/sharing`, {
        ...sharing,
    });
}

/** public api */
export async function _api_getSharedScene(id: string) {
    await axios_public_access.get(`shared/${id}`);
    //
}
export async function _api_listMyScenes() {
    await axios.get(`/`);
}
