import { Ionicons } from "@expo/vector-icons";

export type Styles = { [key: string]: string | number };
export type Size = "small" | "large";
export type ButtonVariant = "solid" | "outlined";
export type IconName = keyof typeof Ionicons.glyphMap;
