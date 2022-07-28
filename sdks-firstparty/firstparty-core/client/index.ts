import Axios, { AxiosInstance } from "axios";
import { _is_internal_dev, __internal_dev_hosts } from "../internal-dev";

const _BASE_ACCOUNTS_SERVICES_URL = "https://accounts.services.grida.co";

const _host = _is_internal_dev()
    ? //// if internal dev mode, return localhost environment for calling account services
      __internal_dev_hosts.__INTERNAL_DEV_ACCOUNTS_SERVICES_HOST
    : _BASE_ACCOUNTS_SERVICES_URL;

type InitClientInput = InitClientWithAccessTokenInput;
interface InitClientWithAccessTokenInput {
    accessToken: string;
}
export function initClient(init?: InitClientInput) {
    if (init) {
        if ("accessToken" in init) {
            return new Client(init);
        }
        throw new Error(
            "Invalid init. you can use `<empty>` or `{ accessToken: string }` initlializer."
        );
    } else {
        return new BrowserClient();
    }
}

/**
 * abscration of base client with http request using {@link Axios}
 */
export abstract class _BaseRestfulClient {
    readonly _axios: AxiosInstance;

    constructor({ axios }: { axios: AxiosInstance }) {
        this._axios = axios;
    }
}

/**
 * client that uses secure cookie. - only works on grida.co familly domains.
 */
export class BrowserClient extends _BaseRestfulClient {
    constructor() {
        super({
            axios: Axios.create({
                baseURL: _host,
                withCredentials: true,
            }),
        });
    }
}

/**
 * Client with issued access-token for the current user.
 */
export class Client extends _BaseRestfulClient {
    private readonly _accessToken: string;
    constructor({ accessToken }: InitClientWithAccessTokenInput) {
        super({
            axios: Axios.create({
                baseURL: _host,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
        });
        this._accessToken = accessToken;
    }
}
