import { SceneRecord } from "./server-types";

type PublicSharedSceneRecord = SceneRecord;

export type GetSceneRecordResult = SceneRecord;
export type GetManySceneRecordResult = ReadonlyArray<SceneRecord>;
export type GetPublicSharedSceneRecordResult = PublicSharedSceneRecord;

export interface UpdateSharingPolicyResult {
    message: string;
    success: boolean;
    policy: string;
}
