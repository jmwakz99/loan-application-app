import requestHandler from "@/services/request";
import { API_BASE_URL } from "@/constants/urls";
import { LoanApplicationPayload } from "@/types/global";

const createLoan = (payload: LoanApplicationPayload) => {
  return requestHandler.post(`${API_BASE_URL}/apply-loan`, payload);
};

export default {
  createLoan,
};
