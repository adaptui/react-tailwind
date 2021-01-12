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
    const Custom = () => (
      <svg viewBox={"0 0 100 100"}>
        <path d="M12"></path>
      </svg>
    );
    const { container } = render(<Icon as={Custom} />);

    expect(screen.queryByTestId("testid-icon")).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should render as expected with component as div", () => {
    const { container } = render(
      <Icon as={"div"}>
        <FaCross viewBox={"0 0 100 100"} />
      </Icon>,
    );

    expect(screen.queryByTestId("testid-icon")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should not have a11y violations", async () => {
    await testA11y(<Icon />);
  });
});
