export interface ProxyRequestUrlParams {
    request_session_id: string;
    client_id: string;
    redirect_uri: string;
}

export function makeProxyAuthUrl(params: { ProxyRequestUrlParams }) {
    const q = new URLSearchParams(params).toString();
    return `https://accounts.grida.co/proxy?${q}`;
}
