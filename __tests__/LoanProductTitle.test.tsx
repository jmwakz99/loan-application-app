import { render } from "@testing-library/react-native";

import LoanProductTitle from "@/components/LoanProductTitle";

it("It renders corectly", () => {
  const title = "Test Title";

  const screenTitle = render(<LoanProductTitle title={title} />).toJSON();

  expect(screenTitle).toMatchSnapshot();
});
