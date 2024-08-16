import { render } from "@testing-library/react-native";

import ScreenTitle from "@/components/ScreenTitle";

it("It renders corectly", () => {
  const title = "Test Title";

  const screenTitle = render(<ScreenTitle title={title} />).toJSON();

  expect(screenTitle).toMatchSnapshot();
});
