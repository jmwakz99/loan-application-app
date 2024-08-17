import { FC } from "react";
import { Text, View } from "react-native";

import { styles } from "@/styles/LoanCondition";

type Props = {
  maxLoanAmount: number | string;
  interestRate: number;
};

const LoanCondition: FC<Props> = ({ maxLoanAmount, interestRate }) => {
  return (
    <View>
      <Text style={styles.maxAmountTitle}>Maximum Amount:</Text>
      <Text style={styles.maxLoanAmount}>${maxLoanAmount}</Text>
      <Text style={styles.interestRate}>Interest: {interestRate}%</Text>
    </View>
  );
};

export default LoanCondition;
