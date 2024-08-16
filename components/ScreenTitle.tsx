import { FC } from "react";
import { Text } from "react-native";

import { styles } from "@/styles/screenTitle";

type Props = {
  title: string;
};

const ScreenTitle: FC<Props> = ({ title }) => {
  return <Text style={styles.screenTitleText}>{title}</Text>;
};

export default ScreenTitle;
