import { render } from "@testing-library/react-native";

import LoanCondition from "@/components/LoanCondition";
it("it renders correctly", () => {
  const props = {
    maxLoanAmount: 1000,
    interestRate: 5,
  };

  const loanCondition = render(<LoanCondition {...props} />);

  expect(loanCondition).toMatchSnapshot();
});
