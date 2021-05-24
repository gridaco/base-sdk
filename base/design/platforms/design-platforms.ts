
/**
 * the design platforms supported by bridged.
 * the bundle identifier is based on mac app's App.app/Contents/Info.plist 's [CFBundleIdentifier](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleidentifier)
 */
export enum DesignPlatform {
    /**
     * [figma](https://figma.com) general desktop app on Nov 2020
     */
    figma = "com.figma.Desktop",
    /**
     * [sketch](https://sketch.com) general desktop app on Nov 2020, version 69
     */
    sketch = "com.bohemiancoding.sketch3",
    /**
     * non-released [bridged](https://bridged.xyz) desktop app based on N/A
     */
    bridged = "xyz.bridged.bridged"
}