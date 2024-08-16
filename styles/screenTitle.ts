import { StyleSheet } from "react-native";

import { Styles } from "@/types/global";
import { COLORS } from "@/constants/colors";
import { actuatedNormalize } from "@/utils/responsiveUtils";

const screenTitleText: Styles = {
  fontFamily: "Roboto-Bold",
  fontWeight: "700",
  fontSize: actuatedNormalize(32),
  color: COLORS.dark,
};

export const styles = StyleSheet.create({
  screenTitleText,
});
