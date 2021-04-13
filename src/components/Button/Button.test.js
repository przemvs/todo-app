import { render, fireEvent } from "utility/reactTestingLibrary";
import { mockButton } from "./Button.mocks";

describe("Button component", () => {
  it("Renders", () => {
    const { container } = render(mockButton());
    expect(container).toBeDefined();
  });

  it("Triggers clickEvent on click", async () => {
    const mockFn = jest.fn();
    const buttonTextNode = "Test Button";

    const { getByText } = render(
      mockButton({
        onClick: mockFn,
        children: buttonTextNode
      })
    );

    const Button = getByText(buttonTextNode);

    fireEvent.click(Button);
    fireEvent.click(Button);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
