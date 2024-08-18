import { FC, useContext, useEffect } from "react";
import { Alert, View } from "react-native";

import ScreenTitle from "@/components/ScreenTitle";
import { styles } from "@/styles/loanApplication";
import { INPUTS } from "@/constants/inputs";
import FormItem from "@/components/FormItem";
import Button from "@/components/Button";
import useForm from "@/hooks/useForm";
import { isEmailValid } from "@/utils/common";
import { LoanApplicationContext } from "@/context/LoanApplicationContext";
import { useNavigation } from "expo-router";

const LoanApplication: FC = () => {
  const navigation = useNavigation();

  const [values, handleChange] = useForm();
  const { status, errorMessage, createLoan, clearError } = useContext(
    LoanApplicationContext
  );

  const formSubmitHandler = async () => {
    if (
      !values.fullName.value ||
      !values.email.value ||
      !values.loanAmount.value ||
      !values.loanPurpose.value ||
      values.fullName.error ||
      values.email.error ||
      values.loanAmount.error ||
      values.loanPurpose.error
    ) {
      Alert.alert("Error", "Please fill in all the fields", [
        { style: "destructive", text: "OK" },
      ]);

      return;
    }

    const loanApplicationPayload = {
      full_name: values.fullName.value,
      email: values.email.value,
      loan_amount: parseInt(values.loanAmount.value),
      loan_purpose: values.loanPurpose.value,
    };

    createLoan(loanApplicationPayload);
  };

  const onInputChangeHandler = (value: string, name: string) => {
    if (!value) {
      handleChange(name, { value, error: "This field is required" });
    } else if (name === "email" && !isEmailValid(value)) {
      handleChange(name, { value, error: "Please enter a valid email" });
    } else if (name === "loanAmount" && parseInt(value) <= 0) {
      handleChange(name, {
        value,
        error: "Please enter a valid number greater than 0",
      });
    } else {
      handleChange(name, { value, error: "" });
    }
  };

  useEffect(() => {
    if (status === "accepted") {
      Alert.alert("Success", "Your loan application has been accepted", [
        { style: "default", text: "OK" },
      ]);
      navigation.navigate("index" as never);
      clearError();
    } else if (status === "rejected") {
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
