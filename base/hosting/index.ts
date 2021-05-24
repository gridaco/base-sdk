// import Lambda, { InvocationRequest } from 'aws-sdk/clients/lambda';
import { FileHostingRequest, FileHostingResult } from "./types";
import { __HOSTS } from "@base-sdk/core";
try {
    global.FormData = require("form-data");
} catch (_) {}

import Axios from "axios";
const axios = Axios.create({
    baseURL: __HOSTS.HOSTING_SERVICE_HOST,
});

export async function upload(request: FileHostingRequest) {
    try {
        let file;

        if (typeof window === "undefined") {
            // this works on server side node js
            // TODO this may not work intime
            file = JSON.stringify(request.file);
        } else {
            // this works on browser js
            if (!(request.file instanceof Blob)) {
                file = new Blob([request.file]);
            } else {
                file = request.file;
            }
        }

        const form = new FormData();
        //@ts-ignore
        form.append("file", file, { filename: request.name });
        //@ts-ignore
        const header = form.getHeaders
            ? {
                  //@ts-ignore
                  "content-type": form.getHeaders()["content-type"],
                  //@ts-ignore
                  "content-length": form.getLengthSync(),
              }
            : undefined;
        const res = await axios.post("/resources", form, {
            headers: header,
        });
        return res.data as FileHostingResult;
    } catch (e) {
        console.log(e);
        throw e.response ?? e;
    }
}

// const lambda = new Lambda({
//     region: "us-west-1"
// })
// const SERVICE_NAME_RESOURCE_HOSTING = "resource-hosting-dev-main"
// export async function uploadLambda(request: FileHostingRequest): Promise<FileHostingResult> {
//     const params: InvocationRequest = {
//         FunctionName: SERVICE_NAME_RESOURCE_HOSTING,
//         InvocationType: "RequestResponse",
//         Payload: JSON.stringify(request),
//     };

//     const result = await (await lambda.invoke(params).promise()).$response.data
//     return result as FileHostingResult
// }
