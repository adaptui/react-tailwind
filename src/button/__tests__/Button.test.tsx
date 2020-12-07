import * as React from "react";
import { Button } from "../Button";

import { configureAxe } from "jest-axe";
import { render, screen } from "@testing-library/react";

const axe = configureAxe({
  rules: {
    // disabled landmark rules when testing isolated components.
    region: { enabled: false },
  },
});

describe("Testing Button", () => {
  it("should render properly", () => {
    render(<Button label="Hello world" />);

    expect(screen.getByRole("button")).toHaveTextContent(/hello world/i);
  });

  it("should not have axe violations", async () => {
    const { container } = render(<Button label="ally" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
