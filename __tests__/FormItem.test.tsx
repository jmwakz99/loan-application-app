import { fireEvent, render } from "@testing-library/react-native";

import FormItem from "@/components/FormItem";

describe("FormItem", () => {
  it("it should render correctly", () => {
    const onInputChangeMock = jest.fn();

    const props = {
      label: "Test label",
      placeholder: "Test placeholder",
      errorMessage: "Test error message",
      onInputChange: onInputChangeMock,
      name: "test-name",
      value: "test-value",
    };

    const { getByPlaceholderText } = render(<FormItem {...props} />);

    const formItem = getByPlaceholderText("Test placeholder");

    expect(formItem).toBeTruthy();
  });

  it("should call onInputChange when input changes", () => {
    const onInputChangeMock = jest.fn();

    const props = {
      label: "Test label",
      placeholder: "Test placeholder",
      errorMessage: "Test error message",
      onInputChange: onInputChangeMock,
      name: "test-name",
      value: "test-value",
    };

    const { getByPlaceholderText } = render(<FormItem {...props} />);

    fireEvent.changeText(
      getByPlaceholderText("Test placeholder"),
      "Test input"
    );

    expect(onInputChangeMock).toHaveBeenCalledWith("Test input", "test-name");
  });

  it("snapshot", () => {
    const onInputChangeMock = jest.fn();

    const props = {
      label: "Test label",
      placeholder: "Test placeholder",
      errorMessage: "Test error message",
      onInputChange: onInputChangeMock,
      name: "test-name",
      value: "test-value",
    };

    const formItem = render(<FormItem {...props} />).toJSON();

    expect(formItem).toMatchSnapshot();
  });
});
