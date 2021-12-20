import { FaCross } from "react-icons/fa";
import { screen } from "@testing-library/react";

import { render, testA11y } from "../../utils/testUtils";
import { Icon } from "../Icon";

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
    expect(screen.getByTestId("testid-customicon")).toBeInTheDocument();
    expect(screen.getByTestId("testid-customicon")).toHaveAttribute(
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

    expect(screen.getByTestId("testid-icon")).toBeInTheDocument();
    expect(screen.getByTestId("testid-icon")?.tagName).toBe("DIV");
    expect(screen.getByTestId("testid-faicon")).toBeInTheDocument();
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

    expect(screen.getByTestId("testid-icon")).toBeInTheDocument();
    expect(screen.getByTestId("testid-icon")?.tagName).toBe("svg");
    expect(screen.getByTestId("testid-path")).toBeInTheDocument();
  });

  it("should not have a11y violations", async () => {
    await testA11y(<Icon />);
  });
});
