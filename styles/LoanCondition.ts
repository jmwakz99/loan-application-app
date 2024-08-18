import { Platform, StyleSheet } from "react-native";

import { Styles } from "@/types/global";
import { COLORS } from "@/constants/theme";
import { actuatedNormalize } from "@/utils/responsiveUtils";

const maxAmountTitle: Styles = {
  fontFamily: "Inter-SemiBold",
  fontWeight: "500",
  fontSize: actuatedNormalize(10),
  color: COLORS.dark,
};

const maxLoanAmount: Styles = {
  fontFamily: "Inter-SemiBold",
  fontWeight: "500",
  fontSize: actuatedNormalize(24),
  color: COLORS.primary700,
};

const interestRate: Styles = {
  fontFamily: Platform.OS === "android" ? "Roboto-Bold" : "",
  fontWeight: Platform.OS === "ios" ? "bold" : "700",
  fontSize: actuatedNormalize(11),
  color: COLORS.dark,
};

export const styles = StyleSheet.create({
  maxAmountTitle,
  maxLoanAmount,
  interestRate,
});
