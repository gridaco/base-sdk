import { makeclient } from "./node-auth-client";
export async function validate(p: {
    appid: string;
    access_token: string;
}): Promise<boolean> {
    const client = makeclient(p);
    try {
        const res = await client.get("/valid");
        return res.data.valid;
    } catch (_) {
        return false;
    }
}

export async function accessWorkspace(p: {
    appid: string;
    access_token: string;
    workspace: string;
}): Promise<boolean> {
    const client = makeclient(p);
    try {
        const res = await client.post("/valid/workspace-access", {
            workspace: p.workspace,
        });
        return res.data.valid;
    } catch (_) {
        return false;
    }
}
