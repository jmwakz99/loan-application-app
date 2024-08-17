import { ProcessStatus } from "@/types/global";

interface LoanApplicationState {
  status: ProcessStatus;
  errorMessage?: string;
}

const loanApplicationReducer = (
  state: {
    status: ProcessStatus;
    errorMessage?: string;
  },
  action: { type: string; payload?: any }
): LoanApplicationState => {
  switch (action.type) {
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "CREATE_LOAN":
      return { ...state, status: "processing" };
    case "SET_ERROR":
      return {
        ...state,
        status: "rejected",
        errorMessage: action.payload,
      };
    case "CLEAR_ERROR":
      return { ...state, status: "await", errorMessage: "" };
    default:
      return state;
  }
};

export { loanApplicationReducer };
