/**
 * the type of managed scenes.
 * (WARNING FOR DEVELOPERS) the enum value is matched with [services](https://github.com/bridgedxyz/services)'s scene-store db table value. caution on making changes on the value. (feel free to change the enum key)
 */
export enum StorableSceneType {
    /**
     * the screen, or state containing unique route.
     * the screen size variant or screen state variant will be handled as alias, it will still be marked as screen.
     */
    screen = "SCREEN",

    /**
     * anything marked as component can be component, we recommand to mark only a general component as a component.
     * in some cases designers make whole screen as a component for ease of reusement on docs or making overlay-screen, this we will handle as different type in further updates.
     */
    component = "COMPONENT",

    /**
     * many designers make component and screen documentations inside the design file. the docs type refers to this, not the design document itself.
     */
    docs = "DOCS"
}