import { FC, useContext, useEffect } from "react";
import { Alert, View } from "react-native";
import { useNavigation } from "expo-router";

import ScreenTitle from "@/components/ScreenTitle";
import { INPUTS } from "@/constants/inputs";
import FormItem from "@/components/FormItem";
import Button from "@/components/Button";
import useForm from "@/hooks/useForm";
import { LoanApplicationContext } from "@/context/LoanApplicationContext";
import { Navigation } from "@/types/global";
import { validateField, validateForm } from "@/utils/forms";
import { styles } from "@/styles/loanApplication";
import { STATUSES } from "@/constants/statuses";

const LoanApplication: FC = () => {
  const navigation = useNavigation<Navigation>();

  const { values, handleChange } = useForm();

  const { status, errorMessage, createLoan, clearError } = useContext(
    LoanApplicationContext
  );

  const formSubmitHandler = async () => {
    const { fullName, email, loanAmount, loanPurpose } = values;

    if (!validateForm(values)) {
      Alert.alert("Error", "Please complete all the fields correctly.", [
        { style: "destructive", text: "OK" },
      ]);

      return;
    }

    const loanApplicationPayload = {
      full_name: fullName.value,
      email: email.value,
      loan_amount: Number(loanAmount.value),
      loan_purpose: loanPurpose.value,
    };

    if (isNaN(loanApplicationPayload.loan_amount)) {
      Alert.alert("Error", "Please enter a valid loan amount.", [
        { style: "destructive", text: "OK" },
      ]);
      return;
    }

    createLoan(loanApplicationPayload);
  };

  const onInputChangeHandler = (value: string, name: string) => {
    const error = validateField(name, value);

    handleChange(name, { value, error: error });
  };

  useEffect(() => {
    if (status === STATUSES.ACCEPTED) {
      Alert.alert("Success", "Your loan application has been accepted", [
        { style: "default", text: "OK" },
      ]);
      navigation.navigate("index");
      clearError();
    } else if (status === STATUSES.REJECTED) {
      Alert.alert("Error", errorMessage, [
        { style: "destructive", text: "OK" },
      ]);
      clearError();
    }
  }, [status, clearError, errorMessage, navigation]);

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
              errorMessage={values[input.name]?.error}
              value={values[input.name]?.value}
              onInputChange={onInputChangeHandler}
            />
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label="SUBMIT"
          onPress={formSubmitHandler}
          loading={status === "processing"}
        />
      </View>
    </View>
  );
};

export default LoanApplication;
