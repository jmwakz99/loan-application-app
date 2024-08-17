import { FC } from "react";
import { View } from "react-native";

import ScreenTitle from "@/components/ScreenTitle";
import { styles } from "@/styles/loanApplication";
import { INPUTS } from "@/constants/inputs";
import FormItem from "@/components/FormItem";
import Button from "@/components/Button";

const LoanApplication: FC = () => {
  const formSubmitHandler = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.screenTitle}>
        <ScreenTitle title="Apply for a loan" />
      </View>
      <View style={styles.formItemContainer}>
        {INPUTS.map((input) => (
          <View key={input.name} style={styles.inputContainer}>
            <FormItem
              label={input.label}
              placeholder={input.placeholder}
              inputType={input.type}
              name={input.name}
            />
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button label="Submit" onPress={formSubmitHandler} />
      </View>
    </View>
  );
};

export default LoanApplication;
