interface SceneRecord {
    //
}

interface PublicSharedSceneRecord {}

export type GetSceneRecordResult = SceneRecord;
export type GetManySceneRecordResult = ReadonlyArray<SceneRecord>;
export type GetPublicSharedSceneRecordResult = PublicSharedSceneRecord;

export interface UpdateSharingPolicyResult {
    message: string;
    success: boolean;
    policy: string;
}
