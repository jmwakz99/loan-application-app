import { fireEvent, render } from "@testing-library/react-native";

import Button from "@/components/Button";
import { ButtonVariant } from "@/types/global";

it("it renders correctly", () => {
  const onPressMock = jest.fn();

  const props = {
    label: "Test label",
    iconName: "wifi" as IconName,
    size: "large" as Size,
    variant: "solid" as ButtonVariant,
    loading: false,
    disabled: false,
    onPress: onPressMock,
  };

  const button = render(<Button {...props} />);

  expect(button).toMatchSnapshot();
});

it("should call onPress when button is pressed", () => {
  const onPressMock = jest.fn();

  const props = {
    label: "Test label",
    iconName: "wifi" as IconName,
    size: "large" as Size,
    variant: "solid" as ButtonVariant,
    loading: false,
    disabled: false,
    onPress: onPressMock,
  };

  const { getByText } = render(<Button {...props} />);

  fireEvent.press(getByText("Test label"));

  expect(onPressMock).toHaveBeenCalledTimes(1);
});
