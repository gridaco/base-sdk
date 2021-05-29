import { __HOSTS } from "@base-sdk/core";
import { totp } from "otplib";
import { ProxyAuthResult } from "types";
/// request proxy

export class WsProxyAuthProc {
    readonly ws: WebSocket;
    resolve: (result: ProxyAuthResult) => void;
    reject: (reason?: any) => void;
    constructor(readonly session: string, readonly secret: string) {
        this.ws = new WebSocket(__HOSTS.INTERNAL_WS_PROXY_AUTH_HOST);
        this.ws.onmessage = this._on_message;
    }

    async startListenToSession() {
        const payload = {
            action: "get-authenticated",
            token: this._make_token(),
            sessionId: this.session,
        };
        const _jsonstr = JSON.stringify(payload);
        this.ws.send(_jsonstr);
    }

    async onResult(): Promise<ProxyAuthResult> {
        return new Promise<ProxyAuthResult>((resolve, reject) => {
            this.resolve = resolve;
            this.reject = this.reject;
        });
    }

    private _on_message(ev: MessageEvent) {
        // the only incomming message is final result. (at this time 2021Q3)
        // close all connection after receiving the message.
        const data: ProxyAuthResult = ev.data;
        this.resolve(data);
        this.ws.close();
    }

    private _make_token(): string {
        return totp.generate(this.secret);
    }
}
