import { render } from "@testing-library/react-native";

import LoanCondition from "@/components/LoanCondition";
it("it renders corrrectly", () => {
  const props = {
    maxLoanAmount: 1000,
    interestRate: 5,
    active: false,
  };

  const loanCondition = render(<LoanCondition {...props} />);
  expect(loanCondition).toMatchSnapshot();
});
