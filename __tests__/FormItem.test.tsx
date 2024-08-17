import { fireEvent, render } from "@testing-library/react-native";

import FormItem from "@/components/FormItem";

it("should render correctly", () => {
  const onInputChangeMock = jest.fn();

  const props = {
    label: "Test label",
    placeholder: "Test placeholder",
    errorMessage: "Test error message",
    onInputChange: onInputChangeMock,
    name: "test-name",
  };

  const formItem = render(<FormItem {...props} />);

  expect(formItem).toMatchSnapshot();
});

it("should call onInputChange when input changes", () => {
  const onInputChangeMock = jest.fn();

  const props = {
    label: "Test label",
    placeholder: "Test placeholder",
    errorMessage: "Test error message",
    onInputChange: onInputChangeMock,
    name: "test-name",
  };

  const { getByPlaceholderText } = render(<FormItem {...props} />);

  fireEvent.changeText(getByPlaceholderText("Test placeholder"), "Test input");

  expect(onInputChangeMock).toHaveBeenCalledWith("Test input", "test-name");
});
