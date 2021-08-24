import { utils_url } from "@base-sdk/core";
import { AppLanguage } from "../../types/app-languages";
import { AppFramework } from "../../types/app-frameworks";

export interface ScenePreviewParams {
    id: string;
    framework: AppFramework;
    language: AppLanguage;
    url: string;
    name: string;
    w?: number;
    h?: number;
}

export function buildScenePreviewUrl(props: ScenePreviewParams) {
    const querystring = utils_url.encodeQueryData(props);
    return `https://app.grida.co/preview?${querystring}`;
}
