import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const SCALE_HORIZONTAL = SCREEN_WIDTH / 375;
export const SCALE_VERTICAL = SCREEN_HEIGHT / 812;

export { SCREEN_WIDTH, SCREEN_HEIGHT };
