import { StyleSheet } from "react-native";

import { Styles } from "@/types/global";
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from "@/utils/responsiveUtils";
import { COLORS } from "@/constants/theme";

const container: Styles = {
  width: actuatedNormalize(298),
  height: actuatedNormalizeVertical(139),
  borderRadius: 10,
  borderColor: COLORS.grey400,
  borderWidth: 1,
};

const titleContainer: Styles = {
  paddingVertical: actuatedNormalizeVertical(22),
  paddingHorizontal: actuatedNormalize(11.44),
};
const conditionContainer: Styles = {
  paddingHorizontal: actuatedNormalize(11.44),
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
};

const active: Styles = {
  backgroundColor: COLORS.primary400,
};

export const styles = StyleSheet.create({
  container,
  titleContainer,
  conditionContainer,
  active,
});
