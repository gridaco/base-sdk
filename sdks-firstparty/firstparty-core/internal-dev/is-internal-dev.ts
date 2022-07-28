export const _IS_INTERNAL_DEV = process.env.USE_GRIDA_INTERNAL_DEV_LOCAL_AUTH
    ? (JSON.parse(process.env.USE_GRIDA_INTERNAL_DEV_LOCAL_AUTH) as boolean)
    : false;

/**
 * this indicates currnet app is running in internal dev mode
 * */
export function _is_internal_dev(): boolean {
    return _IS_INTERNAL_DEV;
}
