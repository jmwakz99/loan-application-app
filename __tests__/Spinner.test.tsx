import { render } from "@testing-library/react-native";

import Spinner from "@/components/Spinner";
import { Size } from "@/types/global";

it("renders correctly", () => {
  const props = {
    size: "large" as Size,
    color: "blue",
  };

  const spinner = render(<Spinner {...props} />).toJSON();

  expect(spinner).toMatchSnapshot();
});
