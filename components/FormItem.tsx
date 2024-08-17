import { styles } from "@/styles/formItem";
import { FC } from "react";
import { Text, TextInput, View } from "react-native";

type Props = {
  label: string;
  placeholder: string;
  errorMessage?: string;
  onInputChange?: (value: string) => void;
};

const FormItem: FC<Props> = ({
  label,
  placeholder,
  errorMessage = "",
  onInputChange = (_: string) => {},
}) => {
  return (
    <View style={styles.formItemContainer}>
      <Text style={styles.formItemLabel}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onInputChange}
        style={styles.formItemInput}
      />
      {errorMessage && <Text style={styles.formItemError}>{errorMessage}</Text>}
    </View>
  );
};

export default FormItem;
