interface QuickLookRequestFlutter {
    flutterCode: string;
}

interface QuickLookResponse {
    url: string;
}

export function quickLookFlutterDCC(
    args: QuickLookRequestFlutter
): QuickLookResponse {
    // TODO call api
    return {
        url: "https://console.grida.co/projcets/temp/quicklook",
    };
}

export function quickLookReact(
    args: QuickLookRequestFlutter
): QuickLookResponse {
    // TODO call api
    return {
        url: "https://console.grida.co/projcets/temp/quicklook",
    };
}
