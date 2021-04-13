import { render } from "utility/reactTestingLibrary";
import { mockKendoGrid } from "./KendoGrid.mocks";

describe("KendoGrid component", () => {
  it("Renders", () => {
    const { container } = render(mockKendoGrid());
    expect(container).toBeDefined();
  });
});
