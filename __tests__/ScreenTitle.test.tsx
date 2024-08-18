import { render } from "@testing-library/react-native";

import ScreenTitle from "@/components/ScreenTitle";

describe("ScreenTitle", () => {
  it("It renders corectly", () => {
    const title = "Test Title";

    const { getByText } = render(<ScreenTitle title={title} />);

    const screenTitle = getByText("Test Title");

    expect(screenTitle).toBeTruthy();
  });

  it("snapshot", () => {
    const title = "Test Title";

    const screenTitle = render(<ScreenTitle title={title} />).toJSON();

    expect(screenTitle).toMatchSnapshot();
  });
});
