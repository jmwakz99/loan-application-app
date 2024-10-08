import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { KeyboardType } from "react-native";

export type Styles = { [key: string]: string | number };

export type Size = "small" | "large";

export type ButtonVariant = "solid" | "outlined";

export type IconName = keyof typeof Ionicons.glyphMap;

export type InputField = {
  label: string;
  placeholder: string;
  type: KeyboardType;
  name: string;
};

export type FieldValue = {
  value: string;
  error: string;
};

export type FormValues = {
  [key: string]: FieldValue;
};

export type LoanApplicationPayload = {
  full_name: string;
  email: string;
  loan_amount: number;
  loan_purpose: string;
};

export type ProcessStatus = "await" | "processing" | "accepted" | "rejected";

export type LoanApplicationCtx = {
  status?: ProcessStatus;
  setStatus?: (status: ProcessStatus) => void;
  createLoan: (loanApplicationPayload: LoanApplicationPayload) => void;
  errorMessage?: string;
  clearError: () => void;
};

export type RootStackParamList = {
  index: undefined;
  LoanApplication: undefined;
};

export type Navigation = NavigationProp<RootStackParamList>;
