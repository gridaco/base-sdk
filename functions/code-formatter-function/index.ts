import https from "https";

// @todo
export async function format() {
    https.request({
        hostname: "functions.bridged.cc",
        path: "format",
        method: "POST",
    });
}
