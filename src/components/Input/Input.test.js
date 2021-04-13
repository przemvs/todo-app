import { render } from "utility/reactTestingLibrary";
import { mockInput } from "./Input.mocks";

describe("Input component", () => {
  it("Renders", () => {
    const { container } = render(mockInput());
    expect(container).toBeDefined();
  });
});
