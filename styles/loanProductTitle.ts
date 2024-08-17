import { Platform, StyleSheet } from "react-native";

import { Styles } from "@/types/global";
import { COLORS } from "@/constants/colors";
import { actuatedNormalize } from "@/utils/responsiveUtils";

const titleText: Styles = {
  fontFamily: Platform.OS === "android" ? "Roboto-Bold" : "",
  fontWeight: Platform.OS === "ios" ? "bold" : "700",
  fontSize: actuatedNormalize(20),
  color: COLORS.dark,
};

export const styles = StyleSheet.create({
  titleText,
});
