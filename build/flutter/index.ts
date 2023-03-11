import { compileComplete } from "dart-services";
import { makeShortUrl } from "@base-sdk/url";
import { upload } from "@base-sdk/hosting";
import { _utils } from "@base-sdk/core";

export interface AppBuildResult {
    id: string;
    name?: string;
    js?: string;
}

export async function compileFlutterApp(props: {
    dart: string;
    id?: string;
}): Promise<AppBuildResult> {
    // compile dart source to js
    const compiled = await compileComplete(props.dart);
    if (!compiled.success) {
        throw `compile failed with error ${JSON.stringify(
            compiled.error,
            null,
            2
        )}`;
    }

    return {
        // if no id provided, create random id and assign. (since it must be non-tracked build separated from bridged services)
        id: props.id ?? _utils.randid(),
        js: compiled.result,
    };
}

export async function buildAndHostSimpleApp(props: {
    dart: string;
    id: string;
    short?: boolean;
}): Promise<string> {
    const compiled = await compileFlutterApp({
        dart: props.dart,
        id: props.id,
    });

    // host js file
    const hosted = await upload({
        file: compiled.js,
        name: props.id,
    });

    // make short url for hosted js file
    if (props.short) {
        const short = await makeShortUrl({
            url: hosted.url,
        });
        // return the short url
        return short.url;
    } else {
        return hosted.url;
    }
}
