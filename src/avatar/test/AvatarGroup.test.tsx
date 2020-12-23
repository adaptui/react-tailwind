import * as React from "react";
import { Avatar } from "../Avatar";
import { configureAxe } from "jest-axe";
import { render, screen } from "@testing-library/react";
import { AvatarGroup } from "../AvatarGroup";

const axe = configureAxe({
  rules: {
    // disabled landmark rules when testing isolated components.
    region: { enabled: false },
  },
});

describe("<AvatarGroup />", () => {
  expect.assertions(1);

  it("should render correctly", () => {
    const { asFragment } = render(
      <AvatarGroup>
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should pass the size to all avatars", () => {
    const { asFragment } = render(
      <AvatarGroup size="lg">
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should be able to overwrite specific avatar size", () => {
    const { asFragment } = render(
      <AvatarGroup size="lg">
        <Avatar />
        <Avatar size="xs" />
      </AvatarGroup>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should not render truncated avatar counter if avatar count is less than limit", () => {
    render(
      <AvatarGroup limit={5}>
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    );

    const truncateCircle = screen.queryByTestId("testid-truncated");
    expect(truncateCircle).not.toBeInTheDocument();

    const group = screen.getByRole("group", {
      name: /avatar group/i,
    });

    expect(group.childElementCount).toEqual(3);
  });

  it("should render truncated avatar counter if avatar count is greater than limit", () => {
    render(
      <AvatarGroup limit={2}>
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    );

    const truncateCircle = screen.queryByTestId("testid-truncated");
    expect(truncateCircle).toHaveTextContent("+1");

    const group = screen.getByRole("group", {
      name: /avatar group/i,
    });

    expect(group.childElementCount).toEqual(3);
  });

  it("should not render truncated avatars counter if limit is equal to avatars count", () => {
    render(
      <AvatarGroup limit={2}>
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    );

    const truncateCircle = screen.queryByTestId("testid-truncated");
    expect(truncateCircle).not.toBeInTheDocument();

    const group = screen.getByRole("group", {
      name: /avatar group/i,
    });

    expect(group.childElementCount).toEqual(2);
  });

  it("should not have axe violations", async () => {
    const { container } = render(
      <AvatarGroup>
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
