import { ProxyAuthResult } from "../types";

type _EventSource = WebSocket | EventSource;

export abstract class AuthProxyProcBase<SRC = _EventSource> {
    constructor(readonly session: string, readonly secret: string) {}

    resolve: (result: ProxyAuthResult) => void;
    reject: (reason?: any) => void;

    readonly evsrc: SRC;
    abstract startListenToSession();
    abstract __onmessage(ev: MessageEvent);
    abstract onResult(): Promise<ProxyAuthResult>;
}
