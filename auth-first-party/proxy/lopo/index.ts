import { __HOSTS } from "@base-sdk/core";
import { ProxyAuthResult } from "../types";
import { AuthProxyProcBase } from "../proc-base";

/**
 * @deprecated not implemented
 */
class LongPollingSource {
    constructor() {}
    onmessage: (ev: MessageEvent) => void;
}

/**
 * @deprecated - not used
 */
export class LogPollingAuthProxyProc extends AuthProxyProcBase<LongPollingSource> {
    resolve: (result: ProxyAuthResult) => void;
    reject: (reason?: any) => void;

    readonly evsrc: LongPollingSource;
    constructor(readonly session: string, readonly secret: string) {
        super(session, secret);
        this.evsrc = new LongPollingSource();
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
