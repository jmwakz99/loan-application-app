import { useCallback, useState } from "react";

import { FieldValue, FormValues } from "@/types/global";
import { INITIAL_VALUES } from "@/constants/inputs";

type UseFormReturn = {
  values: FormValues;
  handleChange: (name: string, value: FieldValue) => void;
  resetForm: () => void;
};

const useForm = (): UseFormReturn => {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);

  const handleChange = (name: string, value: FieldValue) => {
    setValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const resetForm = useCallback(() => {
    setValues(INITIAL_VALUES);
  }, []);

  return { values, handleChange, resetForm };
};

export default useForm;
