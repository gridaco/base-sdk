import { IconConfig } from "@reflect-ui/core";
import Axios from "axios";

export async function loadSvg(
    key: string,
    config: IconConfig,
    options?: {
        disable_cache: boolean;
    }
): Promise<string> {
    const headers = {};
    if (options?.disable_cache) {
        headers["Cache-Control"] = "no-cache";
    }

    const url = makeIconUrl(key, config);
    const raw =
        await // s3 cors issue. fetching resource wil cause cors issue with 200, if cache is enabled. (don't know why !)
        (
            await Axios.get(url, { headers: headers })
        ).data;
    return raw;
}

export function makeIconUrl(name: string, config: IconConfig): string {
    return `https://reflect-icons.s3-us-west-1.amazonaws.com/${config.host}/${name}.svg`;
}
