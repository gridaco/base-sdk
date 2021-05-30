/**
 * simple, zero deps id generator for light usage.
 * @returns
 */
export function randid(): string {
    return "_" + Math.random().toString(36).substr(2, 9);
}
