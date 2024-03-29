import { screen } from "@testing-library/react";

import { render } from "../../utils/testUtils";
import { Avatar } from "../index";

jest.useFakeTimers("modern");

describe("<Avatar />", () => {
  expect.assertions(1);

  it("should render Avatar", () => {
    const { asFragment } = render(<Avatar />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with AvatarStatusIndicator", () => {
    const { asFragment } = render(<Avatar status="active"></Avatar>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a name avatar if no src", () => {
    const name = "Dan Abramov";
    render(<Avatar name="Dan Abramov" />);

    const content = screen.getByLabelText(name);
    expect(content).toHaveTextContent("DA");
  });

  it("renders a custom fallback if src & name both are not provided", () => {
    const fallbackContent = "I'm a fallback";
    render(
      <Avatar icon={<div aria-label="fallback">{fallbackContent}</div>} />,
    );

    expect(screen.getByLabelText("fallback")).toHaveTextContent(
      fallbackContent,
    );
  });

  it("prioritize name between fallback & name", () => {
    const fallbackContent = "I'm a fallback";
    const name = "Anurag Hazra";
    render(
      <Avatar
        name={name}
        icon={<div aria-label="fallback">{fallbackContent}</div>}
      />,
    );

    const content = screen.queryByLabelText(name);
    expect(content).toHaveTextContent("AH");
    expect(screen.queryByLabelText("fallback")).not.toBeInTheDocument();
  });
});
