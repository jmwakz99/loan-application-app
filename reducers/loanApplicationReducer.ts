import { CLEAR_ERROR, SET_ERROR, SET_STATUS } from "@/constants/actions";
import { ProcessStatus } from "@/types/global";

type LoanApplicationAction =
  | { type: "SET_STATUS"; payload: ProcessStatus }
  | { type: "CREATE_LOAN" }
  | { type: "SET_ERROR"; payload: string }
  | { type: "CLEAR_ERROR" };

type LoanApplicationState = {
  status: ProcessStatus;
  errorMessage?: string;
};

const defaultState: LoanApplicationState = {
  status: "await",
  errorMessage: "",
};
const loanApplicationReducer = (
  state = defaultState,
  action: LoanApplicationAction
): LoanApplicationState => {
  switch (action.type) {
    case SET_STATUS:
      return { ...state, status: action.payload };
    case "CREATE_LOAN":
      return { ...state, status: "processing" };
    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        errorMessage: action.payload,
      };
    case CLEAR_ERROR:
      return { ...state, status: "await", errorMessage: "" };
    default:
      return state;
  }
};

export { loanApplicationReducer };
