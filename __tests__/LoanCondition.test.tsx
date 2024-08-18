import { render } from "@testing-library/react-native";

import LoanCondition from "@/components/LoanCondition";

describe("LoanCondition", () => {
  it("it renders correctly", () => {
    const props = {
      maxLoanAmount: 1000,
      interestRate: 5,
    };

    const { getByText } = render(<LoanCondition {...props} />);

    const maxLoanAmount = getByText("$1000");
    const interestRate = getByText("Interest: 5%");

    expect(maxLoanAmount).toBeTruthy();
    expect(interestRate).toBeTruthy();
  });

  it("snapshot", () => {
    const props = {
      maxLoanAmount: 1000,
      interestRate: 5,
    };

    const loanCondition = render(<LoanCondition {...props} />).toJSON();

    expect(loanCondition).toMatchSnapshot();
  });
});
