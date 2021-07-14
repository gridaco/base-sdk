import Axios from "axios";

export async function format({
    code,
    lang,
}: {
    code: string;
    lang: "html" | "ts" | "js" | "dart";
}): Promise<string> {
    try {
        const res = await Axios.post(
            "https://code-format.functions.bridged.cc/format",
            {
                code,
                lang,
            }
        );
        return res.data.code;
    } catch (_) {
        console.log(_);
        throw _;
    }
}
