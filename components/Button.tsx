import { FC } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { ButtonVariant, IconName, Size } from "@/types/global";
import { COLORS } from "@/constants/colors";
import { styles } from "@/styles/button";
import { globalStyles } from "@/styles/global";
import { actuatedNormalize } from "@/utils/responsiveUtils";

type Props = {
  label: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  size?: Size;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
};

const Button: FC<Props> = ({
  label,
  iconName = "",
  size = "large",
  variant = "solid",
  loading,
  disabled,
  onPress = () => {},
}) => {
  return (
    <View
      style={[
        styles.buttonOuterContainer,
        variant === "outlined" && styles.outlinedButton,
        size === "small" && styles.buttonSmall,
      ]}
    >
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && [globalStyles.pressed]}
        android_ripple={{ color: COLORS.primary400 }}
      >
        <View
          style={[
            styles.buttonInnerContainer,
            (loading || disabled) && globalStyles.pressed,
            variant === "outlined" && styles.outlinedButton,
            size === "small" && styles.buttonSmall,
          ]}
        >
          {loading && <ActivityIndicator color={COLORS.light} size="small" />}
          <Text
            style={[
              styles.buttonText,
              variant === "outlined" && styles.outlinedButtonText,
              size === "small" && styles.buttonSmallText,
            ]}
          >
            {label}
          </Text>
          {iconName && (
            <Ionicons
              name={iconName as IconName}
              color={variant === "solid" ? COLORS.light : COLORS.primary700}
              size={
                size === "large" ? actuatedNormalize(24) : actuatedNormalize(12)
              }
              style={styles.buttonIcon}
            />
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default Button;
