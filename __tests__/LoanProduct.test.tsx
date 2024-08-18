import { render } from "@testing-library/react-native";

import LoanProduct from "@/components/LoanProduct";

describe("LoanProduct", () => {
  it("it renders corrrectly", () => {
    const props = {
      name: "Test Loan",
      maxLoanAmount: 1000,
      interestRate: 5,
      active: false,
    };

    const { getByText } = render(<LoanProduct {...props} />);

    const maxLoanAmount = getByText("$1000");
    const interestRate = getByText("Interest: 5%");

    expect(maxLoanAmount).toBeTruthy();
    expect(interestRate).toBeTruthy();
  });

  it("snapshot", () => {
    const props = {
      name: "Test Loan",
      maxLoanAmount: 1000,
      interestRate: 5,
      active: false,
    };

    const loanProduct = render(<LoanProduct {...props} />).toJSON();

    expect(loanProduct).toMatchSnapshot();
  });
});
