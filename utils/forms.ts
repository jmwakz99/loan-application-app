import { ERROR_MESSAGES, FIELD_NAMES } from "@/constants/inputs";
import { isEmailValid } from "./common";
import { FormValues } from "@/types/global";

/**
 * Validates a form field value based on the field name.
 *
 * @param name - The name of the form field to validate.
 * @param value - The value of the form field to validate.
 * @returns An empty string if the field value is valid, or an error message if the field value is invalid.
 */
export const validateField = (name: string, value: string): string => {
  if (!value) return ERROR_MESSAGES.REQUIRED;

  switch (name) {
    case FIELD_NAMES.EMAIL:
      return isEmailValid(value) ? "" : ERROR_MESSAGES.INVALID_EMAIL;
    case FIELD_NAMES.LOAN_AMOUNT:
      return parseInt(value) > 0 ? "" : ERROR_MESSAGES.INVALID_LOAN_AMOUNT;
    default:
      return "";
  }
};

/**
 * Validates the form values to ensure all required fields are provided and have no errors.
 *
 * @param values - The form values to validate.
 * @returns `true` if all form fields are valid, `false` otherwise.
 */
export const validateForm = (values: FormValues): boolean => {
  return Object.values(values).every((field) => field.value && !field.error);
};
