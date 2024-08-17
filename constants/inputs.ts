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
    placeholder: "yourname@",
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
