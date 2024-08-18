import { fireEvent, render } from "@testing-library/react-native";

import Button from "@/components/Button";
import { ButtonVariant, IconName, Size } from "@/types/global";

describe("Button", () => {
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

    const { getByText } = render(<Button {...props} />);

    const textLabel = getByText("Test label");

    expect(textLabel).toBeTruthy();
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

  it("snapshot", () => {
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

    const button = render(<Button {...props} />).toJSON();

    expect(button).toMatchSnapshot();
  });
});
