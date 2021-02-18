import { encodeQueryData } from "../../utils/url.utils";
import { AppLanguage } from "../../types/app-languages";
import { AppFramework } from "../../types/app-frameworks";

interface QuickLookRequestFlutter {
    flutterCode: string;
}

interface QuickLookResponse {
    url: string;
}

export interface QuicklookQueryParams {
    id: string;
    framework: AppFramework;
    language: AppLanguage;
    url?: string;
    name: string;
    w?: number;
    h?: number;
}

export function buildConsoleQuicklookUrl(props: QuicklookQueryParams) {
    const querystring = encodeQueryData(props);
    return `https://console.bridged.xyz/quicklook?${querystring}`;
}

export function quickLookFlutterDCC(
    args: QuickLookRequestFlutter
): QuickLookResponse {
    // TODO call api
    return {
        url: "https://console.bridged.xyz/projcets/temp/quicklook",
    };
}

export function quickLookReact(
    args: QuickLookRequestFlutter
): QuickLookResponse {
    // TODO call api
    return {
        url: "https://console.bridged.xyz/projcets/temp/quicklook",
    };
}
