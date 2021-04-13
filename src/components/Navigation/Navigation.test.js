import { render } from "utility/reactTestingLibrary";
import { mockNavigation } from "./Navigation.mocks";

describe("Navigation component", () => {
  it("Renders", () => {
    const { container } = render(mockNavigation());
    expect(container).toBeDefined();
  });
});
