import { StyleSheet } from "react-native";

import { Styles } from "@/types/global";
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from "@/utils/responsiveUtils";

const container: Styles = {
  flex: 1,
  paddingTop: actuatedNormalizeVertical(104),
  paddingHorizontal: actuatedNormalize(32),
};
const screenTitle: Styles = {
  paddingBottom: actuatedNormalizeVertical(63),
};
const formItemContainer: Styles = {
  paddingBottom: actuatedNormalizeVertical(58),
};
const inputContainer: Styles = {
  paddingBottom: actuatedNormalizeVertical(24),
};

const buttonContainer: Styles = {
  justifyContent: "center",
  alignItems: "center",
};

export const styles = StyleSheet.create({
  container,
  screenTitle,
  formItemContainer,
  inputContainer,
  buttonContainer,
});
