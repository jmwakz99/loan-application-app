import { createContext, useCallback, useMemo, useReducer } from "react";

import {
  LoanApplicationCtx,
  LoanApplicationPayload,
  ProcessStatus,
} from "@/types/global";
import { loanApplicationReducer } from "@/reducers/loanApplicationReducer";
import loanService from "@/services/loanService";
import { CLEAR_ERROR, SET_ERROR, SET_STATUS } from "@/constants/actions";

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
    errorMessage: "",
  });

  const createLoan = useCallback(
    async (loanApplicationPayload: LoanApplicationPayload) => {
      dispatch({ type: "SET_STATUS", payload: "await" });

      try {
        const res = await loanService.createLoan(loanApplicationPayload);
        if (res.status === 201) {
          dispatch({
            type: SET_STATUS,
            payload: "accepted",
          });
        }
      } catch (error) {
        if (error instanceof Error) {
          dispatch({
            type: SET_ERROR,
            payload: error.message,
          });
        } else {
          dispatch({
            type: SET_ERROR,
            payload: "An unknown error occurred",
          });
        }
        dispatch({ type: SET_STATUS, payload: "rejected" });
      }
    },
    []
  );

  const clearError = useCallback(() => {
    dispatch({ type: CLEAR_ERROR });
  }, []);

  const setStatus = useCallback((status: ProcessStatus) => {
    dispatch({ type: SET_STATUS, payload: status });
  }, []);

  const value = useMemo(
    () => ({
      status: loanApplicationState.status,
      errorMessage: loanApplicationState.errorMessage,
      setStatus,
      createLoan,
      clearError,
    }),
    [loanApplicationState, setStatus, createLoan, clearError]
  );

  return (
    <LoanApplicationContext.Provider value={value}>
      {children}
    </LoanApplicationContext.Provider>
  );
};

export default LoanApplicationProvider;
