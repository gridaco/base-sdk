import { __HOSTS } from "@base-sdk/core";
import { ProxyAuthResult } from "../types";
import { AuthProxyProcBase } from "../proc-base";
import { _api_checkSessionAgain } from "../api";
import { totp } from "otplib";

/**
 * @deprecated not implemented
 */
class LongPollingSource {
    constructor() {}
    onmessage: (ev: MessageEvent) => void;
}

const _DEFAULT_POLLING_INTERVAL = 1000;
const _DEFAULT_POLLING_TIMEOUT = 60000;

export class LogPollingAuthProxyProc extends AuthProxyProcBase<LongPollingSource> {
    resolve: (result: ProxyAuthResult) => void;
    reject: (reason?: any) => void;

    // readonly evsrc: LongPollingSource;
    constructor(readonly session: string, readonly secret: string) {
        super(session, secret);
        // this.evsrc = new LongPollingSource();
        // this.evsrc.onmessage = this.__onmessage;
    }

    startListenToSession() {
        // pass.
    }

    __onmessage(ev: MessageEvent) {
        // pass.
    }

    onResult(): Promise<ProxyAuthResult> {
        return this.poll();
    }

    poll() {
        return poll(this.secret, this.session);
    }
}

async function poll(secret: string, session: string): Promise<ProxyAuthResult> {
    const token = totp.generate(secret);
    const check = await _api_checkSessionAgain({
        token: token,
        session: session,
    });

    const _poll = () => poll(secret, session);

    if (!check) {
        // Status 502 is a connection timeout error,
        // may happen when the connection was pending for too long,
        // and the remote server or a proxy closed it
        // let's reconnect
        return await _poll();
    } else if (!check.success) {
        await new Promise((resolve) =>
            setTimeout(resolve, _DEFAULT_POLLING_INTERVAL)
        );
        return await _poll();
    } else {
        return await _poll();
    }
}
