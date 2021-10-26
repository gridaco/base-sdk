import { NamedIconConfig } from "@reflect-ui/core";
import Axios from "axios";

export async function loadSvg(
    key: string,
    config: NamedIconConfig
): Promise<string> {
    const url = makeIconUrl(key, config);
    const raw = await (await Axios.get(url)).data;
    return raw;
}

export function makeIconUrl(name: string, config: NamedIconConfig): string {
    return `https://reflect-icons.s3-us-west-1.amazonaws.com/${config.host}/${name}.svg`;
}
