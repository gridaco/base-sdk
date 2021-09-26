import { NamedIconConfig } from "@reflect-ui/core";
import { cors } from "@base-sdk/core";
import Axios from "axios";

export async function loadSvg(
    key: string,
    config: NamedIconConfig
): Promise<string> {
    const url = makeIconUrl(key, config);
    const requestUrl = cors.buildCorsFreeUrl(url);
    // console.log(`svg request: `, requestUrl);
    const raw = await (await Axios.get(requestUrl)).data;
    // console.log(`icon raw data loaded for ${key}, length of ${raw.length}`);
    return raw;
}

export function makeIconUrl(name: string, config: NamedIconConfig): string {
    return `https://reflect-icons.s3-us-west-1.amazonaws.com/${config.host}/${name}.svg`;
}
