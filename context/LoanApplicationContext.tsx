import { createContext, useMemo, useReducer } from "react";

import { LoanApplicationCtx, LoanApplicationPayload } from "@/types/global";
import { loanApplicationReducer } from "@/reducers/loanApplicationReducer";
import loanService from "@/services/loanService";

export const LoanApplicationContext = createContext<LoanApplicationCtx>({
  status: "await",
  setStatus: () => {},
  createLoan: () => {},
  errorMessage: "",
  clearError: () => {},
});

const LoanApplicationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loanApplicationState, dispatch] = useReducer(loanApplicationReducer, {
    status: "await",
  });

  const createLoan = async (loanApplicationPayload: LoanApplicationPayload) => {
    dispatch({ type: "CREATE_LOAN" });

    try {
      const res = await loanService.createLoan(loanApplicationPayload);
      if (res.status === 201) {
        dispatch({
          type: "SET_STATUS",
          payload: "accepted",
        });
      }
    } catch (error: any) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });
    }
  };

  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" });
  };

  const setStatus = (status: string) => {
    dispatch({ type: "SET_STATUS", payload: status });
  };

  const value = useMemo(
    () => ({
      status: loanApplicationState.status,
      errorMessage: loanApplicationState.errorMessage,
      setStatus,
      createLoan,
      clearError,
    }),
    [loanApplicationState]
  );

  return (
    <LoanApplicationContext.Provider value={value}>
      {children}
    </LoanApplicationContext.Provider>
  );
};

export default LoanApplicationProvider;
