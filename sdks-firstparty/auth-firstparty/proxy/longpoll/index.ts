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

const _DEFAULT_POLLING_INTERVAL = 10000; // 10 sec
const _DEFAULT_POLLING_TIMEOUT = 60000 * 5; // 5 min
const _DEFAULT_POLLING_INITIAL_DELAY = 15000; // 15 sec
export class LogPollingAuthProxyProc extends AuthProxyProcBase<LongPollingSource> {
    resolve: (result: ProxyAuthResult) => void;
    reject: (reason?: any) => void;

    readonly delay: number;
    // readonly evsrc: LongPollingSource;
    constructor(
        readonly session: string,
        readonly secret: string,
        delay?: number
    ) {
        super(session, secret);
        // this.evsrc = new LongPollingSource();
        // this.evsrc.onmessage = this.__onmessage;
        this.delay = delay ?? _DEFAULT_POLLING_INITIAL_DELAY;
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

    async poll() {
        /** in unix time ms*/
        const timeoutat = Date.now() + _DEFAULT_POLLING_TIMEOUT;
        await new Promise((resolve) => setTimeout(resolve, this.delay));
        return poll(this.secret, this.session, timeoutat);
    }
}

async function poll(
    secret: string,
    session: string,
    timeoutat: number
): Promise<ProxyAuthResult> {
    if (Date.now() > timeoutat) {
        throw "timeout";
    }

    const token = totp.generate(secret);
    const check = await _api_checkSessionAgain({
        token: token,
        session: session,
    });

    const _poll = () => poll(secret, session, timeoutat);
    const wait = async () => {
        await new Promise((resolve) =>
            setTimeout(resolve, _DEFAULT_POLLING_INTERVAL)
        );
    };

    if (!check) {
        await wait();
        return await _poll();
    } else if (!check.success) {
        await wait();
        return await _poll();
    } else {
        // data is present & the success = true
        return check;
    }
}
