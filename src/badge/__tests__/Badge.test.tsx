import React from "react";
import { Badge } from "../Badge";
import { render, screen } from "../../utils/testUtils";

describe("<Badge />", () => {
  it("should render properly", () => {
    const { asFragment } = render(<Badge>Hello world</Badge>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render floating badge", () => {
    render(
      <div data-testid="testid-badge_parent">
        <Badge floating>Hello world</Badge>
      </div>,
    );

    expect(screen.getByTestId("testid-badge_parent")).toHaveClass("relative");
  });

  it("should render floating badge with position", () => {
    const { asFragment } = render(
      <div data-testid="testid-badge_parent">
        <Badge floating position="bottom-left">
          Hello world
        </Badge>
      </div>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
