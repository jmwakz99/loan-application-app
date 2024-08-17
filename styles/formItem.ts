import { StyleSheet } from "react-native";

import { Styles } from "@/types/global";
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from "@/utils/responsiveUtils";
import { COLORS } from "@/constants/colors";

const formItemContainer: Styles = {
  gap: actuatedNormalizeVertical(8),
};
const formItemLabel: Styles = {
  fontFamily: "Inter-SemiBold",
  fontWeight: "500",
  fontSize: actuatedNormalize(16),
};
const formItemInput: Styles = {
  width: actuatedNormalize(297),
  height: actuatedNormalizeVertical(56),
  paddingHorizontal: actuatedNormalize(13),
  paddingVertical: actuatedNormalizeVertical(12),
  borderRadius: 8,
  borderColor: COLORS.grey400,
  borderWidth: 1,
  fontFamily: "Inter-Regular",
  fontSize: actuatedNormalize(16),
};
const formItemError: Styles = {
  fontFamily: "Inter-Regular",
  fontSize: actuatedNormalize(12),
  color: COLORS.danger,
};

export const styles = StyleSheet.create({
  formItemContainer,
  formItemLabel,
  formItemInput,
  formItemError,
});
