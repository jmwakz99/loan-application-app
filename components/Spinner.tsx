import { FC } from "react";
import { ActivityIndicator, View } from "react-native";

import { styles } from "@/styles/spinner";
import { COLORS } from "@/constants/colors";
import { Size } from "@/types/global";

type Props = {
  size?: Size;
  color?: string;
};

const Spinner: FC<Props> = ({ size = "small", color = COLORS.primary400 }) => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Spinner;
