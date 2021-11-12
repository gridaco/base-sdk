import { _BaseRestfulClient } from "@base-sdk-fp/core";

/**
 * A signature of figma account, via OAuth result, served by Grida Accounts Services
 */
export interface ILinkedFigmaAccount {
    /**
     * access token to access figma api
     *
     * e.g. "XtxiW-xxxxxxxxxxxxxxxxxxxx"
     */
    accessToken: string;
    /**
     * creation time
     */
    createdAt: Date;
    /**
     * expiry time
     */
    expiresAt: Date;
    /**
     * A session id.
     *
     * e.g."027cxxxx-xxxx-4e8f-xxxx-dadxxx8b0e18"
     */
    id: string;
    /**
     * e.g. "632943853725586700"
     */
    oAuthUserId: string;
    /**
     * provider
     * @default "FIGMA"
     */
    provider: "FIGMA";
    /**
     * e.g. "xxxxxxxx-xxxxxxxxxx_--xxxxxxxxxxxxxxx"
     */
    refreshToken: string;
    /**
     * e.g. "2021-08-23T13:04:50.530Z"
     */
    updatedAt: Date;
    /**
     * e.g. "d4b5b27f-xxxx-4f89-b64c-xxxxxxxxxx"
     */
    userId: string;
}

/**
 * provide the client with `initClient`
 */
export class FigmaLinkedAccountsClient {
    public static basePath = "/linked-accounts/figma";
    constructor(private readonly client: _BaseRestfulClient) {}

    private get api() {
        return this.client._axios;
    }

    /**
     * returns the primary linked figma account
     * @returns
     */
    async getPrimaryLinked(): Promise<ILinkedFigmaAccount> {
        return (
            await this.api.get<ILinkedFigmaAccount>(
                FigmaLinkedAccountsClient.basePath + "/primary"
            )
        ).data;
    }

    /**
     * returns all linked figma accounts
     * @returns
     */
    async getLinkedAccounts(): Promise<ILinkedFigmaAccount[]> {
        return (
            await this.api.get<ILinkedFigmaAccount[]>(
                FigmaLinkedAccountsClient.basePath + "/"
            )
        ).data;
    }

    /**
     * returns if there is any linked figma account.
     * @returns
     */
    async hasLinkedFigmaAccount(): Promise<boolean> {
        try {
            const r = await this.getPrimaryLinked();
            if (r !== undefined) {
                return true;
            }
        } catch (_) {}
        return false;
    }
}
