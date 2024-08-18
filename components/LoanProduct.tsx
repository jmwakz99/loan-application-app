import { FC } from "react";
import { View } from "react-native";

import LoanProductTitle from "./LoanProductTitle";
import LoanCondition from "./LoanCondition";
import Button from "./Button";
import { styles } from "@/styles/LoanProduct";

type Props = {
  name: string;
  maxLoanAmount: number | string;
  interestRate: number;
  active: boolean;
};

const LoanProduct: FC<Props> = ({
  name,
  maxLoanAmount,
  interestRate,
  active,
}) => {
  return (
    <View style={[styles.container, active && styles.active]}>
      <View style={styles.titleContainer}>
        <LoanProductTitle title={name} />
      </View>
      <View style={styles.conditionContainer}>
        <LoanCondition
          maxLoanAmount={maxLoanAmount}
          interestRate={interestRate}
        />
        <View>
          <Button
            variant="outlined"
            label="Learn More"
            size="small"
            iconName={"arrow-forward"}
          />
        </View>
      </View>
    </View>
  );
};

export default LoanProduct;
