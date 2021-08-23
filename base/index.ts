// preserve
export const PACKAGE_NAME = "@base-sdk/base";

// exports
export * as url from "@base-sdk/url";
export * as hosting from "@base-sdk/hosting";
export * as build from "@base-sdk/build";
export * as _abstract from "./services-abstract";
export * as projects from "./projects";
export * as features from "./features";
export * as assets from "./assets";
export * from "./asset-repository";
export * as resources from "@base-sdk/resources";
export * from "./design";
export * as versions from "./versions";
export * as types from "./types";

// export cors explicitly
export { cors } from "@base-sdk/core";
