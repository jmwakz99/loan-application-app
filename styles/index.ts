import { StyleSheet } from "react-native";

import { Styles } from "@/types/global";
import { COLORS } from "@/constants/colors";
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from "@/utils/responsiveUtils";

const container: Styles = {
  flex: 1,
  paddingTop: actuatedNormalizeVertical(104),
  paddingHorizontal: actuatedNormalize(34),
};

const screenTitle: Styles = {
  fontFamily: "Roboto-Bold",
  fontWeight: "800",
  fontSize: actuatedNormalize(29),
  color: COLORS.dark,
  marginBottom: actuatedNormalizeVertical(40),
};

const listContainer: Styles = {
  marginTop: actuatedNormalizeVertical(30),
  maxHeight: actuatedNormalizeVertical(320),
};

const loanProductContainer: Styles = {
  marginBottom: actuatedNormalizeVertical(24),
};
const buttonContainer: Styles = {
  justifyContent: "center",
  alignItems: "center",
  paddingTop: actuatedNormalizeVertical(130),
};

export const styles = StyleSheet.create({
  container,
  screenTitle,
  listContainer,
  loanProductContainer,
  buttonContainer,
});
