import { IconConfig } from "@reflect-ui/core";
import Axios from "axios";

export async function loadSvg(
    key: string,
    config: IconConfig
): Promise<string> {
    const url = makeIconUrl(key, config);
    const raw = await (await Axios.get(url)).data;
    return raw;
}

export function makeIconUrl(name: string, config: IconConfig): string {
    return `https://reflect-icons.s3-us-west-1.amazonaws.com/${config.host}/${name}.svg`;
}
