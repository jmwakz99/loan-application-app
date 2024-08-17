import { StyleSheet } from "react-native";

import { Styles } from "@/types/global";
import { COLORS } from "@/constants/colors";
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from "@/utils/responsiveUtils";

const buttonOuterContainer: Styles = {
  justifyContent: "center",
  alignItems: "center",
  width: actuatedNormalize(333),
  height: actuatedNormalizeVertical(56),
  borderRadius: actuatedNormalize(20),
  backgroundColor: COLORS.primary700,
  paddingHorizontal: actuatedNormalize(4),
};
const buttonInnerContainer: Styles = {
  ...buttonOuterContainer,
  flexDirection: "row",
  paddingHorizontal: actuatedNormalize(4),
  borderWidth: 1,
  borderColor: COLORS.primary700,
};

const buttonText: Styles = {
  fontFamily: "Inter-Bold",
  fontSize: actuatedNormalize(16),
  fontWeight: "600",
  textAlign: "center",
  color: COLORS.light,
};
const buttonSmallText: Styles = {
  fontFamily: "Roboto-Bold",
  fontWeight: "400",
  fontSize: actuatedNormalize(8),
};

const outlinedButton: Styles = {
  backgroundColor: "transparent",
  borderColor: COLORS.primary700,
  borderWidth: 1,
  borderRadius: actuatedNormalize(20),
};
const outlinedButtonText: Styles = {
  fontFamily: "Inter-Bold",
  fontSize: actuatedNormalize(16),
  fontWeight: "400",
  color: COLORS.primary700,
};

const buttonSmall: Styles = {
  width: actuatedNormalize(93.07),
  height: actuatedNormalizeVertical(21),
  borderRadius: actuatedNormalize(10),
};

const buttonIcon: Styles = {
  paddingLeft: actuatedNormalize(7),
};

export const styles = StyleSheet.create({
  buttonOuterContainer,
  buttonInnerContainer,
  buttonText,
  outlinedButton,
  outlinedButtonText,
  buttonSmall,
  buttonSmallText,
  buttonIcon,
});
