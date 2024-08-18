import { FC } from "react";
import { KeyboardType, Text, TextInput, View } from "react-native";

import { styles } from "@/styles/formItem";

type Props = {
  label: string;
  placeholder: string;
  errorMessage?: string;
  onInputChange?: (value: string, name: string) => void;
  inputType?: KeyboardType;
  name: string;
  value: string;
};

const FormItem: FC<Props> = ({
  label,
  placeholder,
  errorMessage = "",
  onInputChange = (value: string, name: string) => {},
  inputType = "default",
  name,
  value,
}) => {
  return (
    <View style={styles.formItemContainer}>
      <Text style={styles.formItemLabel}>{label}</Text>

      <TextInput
        placeholder={placeholder}
        onChangeText={(value) => onInputChange(value, name)}
        style={styles.formItemInput}
        autoComplete="off"
        keyboardType={inputType}
        value={value}
        autoCapitalize="none"
      />
      {errorMessage && <Text style={styles.formItemError}>{errorMessage}</Text>}
    </View>
  );
};

export default FormItem;
