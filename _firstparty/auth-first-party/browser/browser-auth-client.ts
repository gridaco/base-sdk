import Axios from "axios";

export const BrowserAuthenticationAxiosClient = Axios.create({
    baseURL: "https://accounts.services.grida.co",
    withCredentials: true,
});
