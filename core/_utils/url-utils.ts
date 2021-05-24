// https://stackoverflow.com/a/111545/5463235
export function encodeQueryData(data: any) {
    try {
        const ret: string[] = [];
        for (const key of Object.keys(data))
            ret.push(
                `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
            );
        return ret.join("&");
    } catch (_) {
        return "";
    }
}

export function isUrl(
    url: string,
    options?: {
        ensureHttps: boolean;
    }
) {
    try {
        const sureUrl = new URL(url);
        if (options && options.ensureHttps) {
            if (sureUrl.protocol != "https:") {
                return false;
            }
        }
        return true;
    } catch (_) {
        return false;
    }
}
