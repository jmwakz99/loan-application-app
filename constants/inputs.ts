import { InputField } from "@/types/global";

export const INPUTS: InputField[] = [
  {
    label: "Full Name",
    placeholder: "Full Name",
    type: "default",
    name: "fullName",
  },
  {
    label: "Email",
    placeholder: "yourname@example.com",
    type: "default",
    name: "email",
  },
  {
    label: "Loan Amount",
    placeholder: "UGX",
    type: "decimal-pad",
    name: "loanAmount",
  },
  {
    label: "Loan Purpose",
    placeholder: "UGX",
    type: "default",
    name: "loanPurpose",
  },
];

export const INITIAL_VALUES = {
  fullName: { value: "", error: "" },
  email: { value: "", error: "" },
  loanAmount: { value: "", error: "" },
  loanPurpose: { value: "", error: "" },
};

export const FIELD_NAMES = {
  EMAIL: "email",
  LOAN_AMOUNT: "loanAmount",
  LOAN_PURPOSE: "loanPurpose",
  FULL_NAME: "fullName",
};

export const ERROR_MESSAGES = {
  REQUIRED: "This field is required",
  INVALID_EMAIL: "Please enter a valid email",
  INVALID_LOAN_AMOUNT: "Please enter a valid number greater than 0",
};
