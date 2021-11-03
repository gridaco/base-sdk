import Axios, { AxiosInstance } from "axios";

export function makeclient(p: {
    appid: string;
    access_token: string;
}): AxiosInstance {
    const AuthenticationAxiosClient = Axios.create({
        baseURL:
            "https://accounts.services.grida.co/authentication/from-firstparty",
        headers: {
            Authorization: `Bearer ${p.access_token}`,
        },
    });

    return AuthenticationAxiosClient;
}
