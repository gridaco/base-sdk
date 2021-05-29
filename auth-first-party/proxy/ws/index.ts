import { __HOSTS } from "@base-sdk/core";
import { totp } from "otplib";
import { ProxyAuthResult } from "types";
/// request proxy

export class WsProxyAuthProc {
    readonly ws: WebSocket;
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

    private _on_message(ev: MessageEvent) {
        const data: ProxyAuthResult = ev.data;
    }

    private _make_token(): string {
        return totp.generate(this.secret);
    }
}
