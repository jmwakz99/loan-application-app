import { useState } from "react";

import { FieldValue, FormValues } from "@/types/global";
import { INITIAL_VALUES } from "@/constants/inputs";

const useForm = (): [
  FormValues,
  (name: string, value: FieldValue) => void,
  () => void,
] => {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);

  const handleChange = (name: string, value: FieldValue) => {
    setValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const resetForm = () => {
    setValues(INITIAL_VALUES);
  };

  return [values, handleChange, resetForm];
};

export default useForm;
