/**
 * Provides screen dimensions and scale factors for the current device.
 *
 * The `SCREEN_WIDTH` and `SCREEN_HEIGHT` constants represent the width and height of the device's screen in pixels.
 * The `SCALE_HORIZONTAL` and `SCALE_VERTICAL` constants provide scale factors to convert between device-independent units (e.g. dp) and pixels.
 * These values are derived from the `Dimensions.get("window")` API, which returns the current dimensions of the app's window.
 */
import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const SCALE_HORIZONTAL = SCREEN_WIDTH / 375;
export const SCALE_VERTICAL = SCREEN_HEIGHT / 812;

export { SCREEN_WIDTH, SCREEN_HEIGHT };
