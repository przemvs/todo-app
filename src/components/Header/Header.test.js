import { render } from "utility/reactTestingLibrary";
import { mockHeader } from "./Header.mocks";

describe("Header component", () => {
  it("Renders", () => {
    const { container } = render(mockHeader());
    expect(container).toBeDefined();
  });
});
