import { styles } from "@/styles/loanProductTitle";
import { FC } from "react";
import { Text } from "react-native";

type Props = {
  title: string;
};

const LoanProductTitle: FC<Props> = ({ title }) => {
  return <Text style={styles.titleText}>{title}</Text>;
};

export default LoanProductTitle;
