import { __HOSTS } from "@base-sdk/core";
import { ProxyAuthResult } from "types";
import { AuthProxyProcBase } from "../proc-base";

/**
 * @deprecated - not used
 */
export class SseAuthProxyProc extends AuthProxyProcBase<EventSource> {
    resolve: (result: ProxyAuthResult) => void;
    reject: (reason?: any) => void;

    readonly evsrc: EventSource;
    constructor(readonly session: string, readonly secret: string) {
        super(session, secret);
        this.evsrc = new EventSource(
            `${__HOSTS.INTERNAL_SECURE_ACCOUNTS_SERVICE_HOST}/session/${this.session}/listen-for-result`
        );
        this.evsrc.onmessage = this.__onmessage;
    }

    startListenToSession() {
        // pass.
    }

    __onmessage(ev: MessageEvent) {}

    onResult(): Promise<ProxyAuthResult> {
        throw new Error("Method not implemented.");
    }
}
