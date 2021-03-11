import { CreateAuthenticationUrlParams } from "./types";

const ACCOUNT_SERVICE_XYZ = "https://accounts.bridged.xyz?";

export function createAuthenticationUrl(
    parameter: CreateAuthenticationUrlParams
) {
    let accountServiceParam: string = "";
    if (parameter.redirect_uri != null) {
        accountServiceParam += `redirect_uri=${parameter.redirect_uri}&`;
    }
    if (parameter.request_session_id != null) {
        accountServiceParam += `request_session_id=${parameter.request_session_id}`;
    }
    return ACCOUNT_SERVICE_XYZ + accountServiceParam;
}
