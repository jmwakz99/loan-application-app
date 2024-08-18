import { StyleSheet, Platform } from "react-native";

import { Styles } from "@/types/global";
import { COLORS } from "@/constants/theme";
import { actuatedNormalize } from "@/utils/responsiveUtils";

const screenTitleText: Styles = {
  fontFamily: Platform.OS === "android" ? "Roboto-Bold" : "",
  fontWeight: Platform.OS === "ios" ? "bold" : "800",
  fontSize: actuatedNormalize(32),
  color: COLORS.dark,
};

export const styles = StyleSheet.create({
  screenTitleText,
});
