import { isUrl } from "../utils/url.utils";
import { AppFramework } from "../types/app-frameworks";
import { checkFlutterFrameSourceMode } from "./flutter";

export * from "./flutter";

export type FrameSourceMode = "content" | "url" | "unknown";
export function checkFrameSourceMode(
    framework: AppFramework,
    source: string
): FrameSourceMode {
    switch (framework) {
        case AppFramework.flutter:
            return checkFlutterFrameSourceMode(source);
        case AppFramework.react:
            return isUrl(source) ? "url" : "content";
    }

    return "unknown";
}
