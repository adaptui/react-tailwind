import * as React from "react";
import { Button } from "../Button";

import { screen } from "@testing-library/react";
import { render, testA11y } from "../../utils/testUtils";

describe("Testing Button", () => {
  it("should render properly", () => {
    render(<Button>Hello World</Button>);

    expect(screen.getByRole("button")).toHaveTextContent(/hello world/i);
  });

  it("should not have axe violations", async () => {
    testA11y(<Button>Ally</Button>);
  });
});
