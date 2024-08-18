import { render } from "@testing-library/react-native";

import LoanProductTitle from "@/components/LoanProductTitle";

describe("LoanProductTitle", () => {
  it("it renders corectly", () => {
    const title = "Test Title";

    const { getByText } = render(<LoanProductTitle title={title} />);

    const loanProductTitle = getByText("Test Title");

    expect(loanProductTitle).toBeTruthy();
  });

  it("snapshot", () => {
    const title = "Test Title";

    const loanProductTitle = render(<LoanProductTitle title={title} />);

    expect(loanProductTitle).toMatchSnapshot();
  });
});
