import { PixelRatio, Platform } from "react-native";

import {
  SCALE_HORIZONTAL,
  SCALE_VERTICAL,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "@/constants/dimensions";

const normalizeIOS = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(size));

const normalizeAndroid = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(size)) - 1; // Subtract 1 on Android for font rendering differences.

const normalizedValue = (newSize: number): number => {
  return Platform.OS === "ios"
    ? normalizeIOS(newSize)
    : normalizeAndroid(newSize);
};

/**
 * Adjusts font size based on screen size and aspect ratio.
 * Normalizes a size value based on the current platform.
 * Scales size by SCALE_HORIZONTAL and normalizes for platform-specific pixel rounding.
 * On iOS, the size is rounded to the nearest pixel using `PixelRatio.roundToNearestPixel`.
 * On Android, the size is rounded to the nearest pixel and then subtracted by 1 to
 * compensate for differences in rendering.
 *
 * @param size - The size value to be normalized.
 * @returns The normalized size value.
 */
export const actuatedNormalize = (size: number): number => {
  const newSize = size * SCALE_HORIZONTAL;

  return normalizedValue(newSize);
};

export const actuatedNormalizeVertical = (size: number): number => {
  const newSize = size * SCALE_VERTICAL;

  return normalizedValue(newSize);
};

export const isTablet = (): boolean => SCREEN_WIDTH > 550;

export const isScreenHeight770 = (): boolean =>
  SCREEN_HEIGHT > 740 && SCREEN_HEIGHT < 760;
