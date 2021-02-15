import * as React from "react";
import { screen } from "@testing-library/react";

import { AvatarBadge } from "../index";
import { render, testA11y } from "../../utils/testUtils";

describe("<AvatarBadge />", () => {
  it("should render default AvatarBadge", () => {
    render(<AvatarBadge />);

    expect(screen.queryByTestId("testid-icon")).toBeInTheDocument();
  });

  it("should render with AvatarBadge with status", () => {
    render(<AvatarBadge status="sleep"></AvatarBadge>);

    expect(screen.queryByTestId("testid-icon")).toBeInTheDocument();
  });

  it("should not have a11y violations", async () => {
    await testA11y(<AvatarBadge />);
  });
});
