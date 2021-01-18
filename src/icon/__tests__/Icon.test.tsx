import * as React from "react";
import { screen } from "@testing-library/react";

import { Icon } from "../Icon";
import { render, testA11y } from "../../utils/testUtils";
import { FaCross } from "react-icons/fa";

describe("<Icon />", () => {
  expect.assertions(1);

  it("should render", () => {
    const { asFragment } = render(<Icon />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render custom svg icon", () => {
    const viewbox = "0 0 100 100";
    const Custom = () => (
      <svg data-testid="testid-customicon" viewBox={viewbox}>
        <path d="M12"></path>
      </svg>
    );
    render(<Icon as={Custom} />);

    expect(screen.queryByTestId("testid-icon")).not.toBeInTheDocument();
    expect(screen.queryByTestId("testid-customicon")).toBeInTheDocument();
    expect(screen.queryByTestId("testid-customicon")).toHaveAttribute(
      "viewBox",
      viewbox,
    );
  });

  it("should render as expected with component as div", () => {
    render(
      <Icon as={"div"}>
        <FaCross data-testid="testid-faicon" viewBox={"0 0 100 100"} />
      </Icon>,
    );

    expect(screen.queryByTestId("testid-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("testid-icon")?.tagName).toBe("DIV");
    expect(screen.queryByTestId("testid-faicon")).toBeInTheDocument();
  });

  it("should render custom icon with path children", () => {
    render(
      <Icon viewBox="0 0 200 200">
        <path
          data-testid="testid-path"
          fill="currentColor"
          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
      </Icon>,
    );

    expect(screen.queryByTestId("testid-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("testid-icon")?.tagName).toBe("svg");
    expect(screen.queryByTestId("testid-path")).toBeInTheDocument();
  });

  it("should not have a11y violations", async () => {
    await testA11y(<Icon />);
  });
});
