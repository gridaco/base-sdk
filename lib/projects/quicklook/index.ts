import { encodeQueryData } from "lib/utils/url.utils";

interface QuickLookRequestFlutter {
    flutterCode: string
}

interface QuickLookResponse {
    url: string
}

export type framework = "flutter" | "react"
export type language = "dart" | "js"

export interface QuicklookQueryParams {
    id: string
    framework: framework
    language: language
    url?: string
    name: string
    w?: number
    h?: number
}

export function buildConsoleQuicklookUrl(props: QuicklookQueryParams) {
    const querystring = encodeQueryData(props);
    return `https://console.bridged.xyz/quicklook?${querystring}`;
}

export function quickLookFlutterDCC(args: QuickLookRequestFlutter): QuickLookResponse {
    // TODO call api
    return {
        url: "https://console.bridged.xyz/projcets/temp/quicklook"
    }
}

export function quickLookReact(args: QuickLookRequestFlutter): QuickLookResponse {
    // TODO call api
    return {
        url: "https://console.bridged.xyz/projcets/temp/quicklook"
    }
}