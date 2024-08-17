import { Ionicons } from "@expo/vector-icons";
import { KeyboardType } from "react-native";

export type Styles = { [key: string]: string | number };

export type Size = "small" | "large";

export type ButtonVariant = "solid" | "outlined";

export type IconName = keyof typeof Ionicons.glyphMap;
export type InputField = {
  label: string;
  placeholder: string;
  type: KeyboardType;
  name: string;
};
