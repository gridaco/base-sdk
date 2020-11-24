import { TextManifest, ImageManifest } from "@reflect.bridged.xyz/core"
import { TransportLayer } from "./vanilla-transport"

/**
 * Vanilla Element type alias. can be text or image at this time.
 */
export type VanilaElement = TransportLayer<TextManifest> | TransportLayer<ImageManifest>

export * from "./vanilla-transport"