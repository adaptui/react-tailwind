import * as React from "react";
import { Button } from "../Button";

import { configureAxe } from "jest-axe";
import { render, screen } from "../../utils/testUtils";

const axe = configureAxe({
  rules: {
    // disabled landmark rules when testing isolated components.
    region: { enabled: false },
  },
});

describe("Testing Button", () => {
  it("should render properly", () => {
    render(<Button>Hello World</Button>);

    expect(screen.getByRole("button")).toHaveTextContent(/hello world/i);
  });

  it("should not have axe violations", async () => {
    const { container } = render(<Button>Ally</Button>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
