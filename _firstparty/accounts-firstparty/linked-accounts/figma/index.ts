import { _BaseRestfulClient } from "@base-sdk-fp/core";

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
    async getPrimaryLinked() {
        return (
            await this.api.get(FigmaLinkedAccountsClient.basePath + "/primary")
        ).data;
    }

    /**
     * returns all linked figma accounts
     * @returns
     */
    async getLinkedAccounts() {
        return (await this.api.get(FigmaLinkedAccountsClient.basePath + "/"))
            .data;
    }

    /**
     * returns if there is any linked figma account.
     * @returns
     */
    async hasLinkedFigmaAccount() {
        try {
            const r = await this.getPrimaryLinked();
            if (r !== undefined) {
                return true;
            }
        } catch (_) {}
        return false;
    }
}
