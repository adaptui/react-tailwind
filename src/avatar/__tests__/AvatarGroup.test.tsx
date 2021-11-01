import { screen } from "@testing-library/react";

import { render } from "../../utils/testUtils";
import { Avatar } from "../Avatar";
import { AvatarGroup } from "../AvatarGroup";

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

  it("should not render truncated avatar counter if avatar count is less than max", () => {
    render(
      <AvatarGroup max={5}>
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    );

    const truncateCircle = screen.queryByTestId("testid-excess_label");
    expect(truncateCircle).not.toBeInTheDocument();

    const group = screen.getByRole("group", {
      name: /avatar group/i,
    });

    expect(group.childElementCount).toEqual(3);
  });

  it("should render truncated avatar counter if avatar count is greater than max", () => {
    render(
      <AvatarGroup max={2}>
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    );

    const truncateCircle = screen.queryByTestId("testid-excess_label");
    expect(truncateCircle).toHaveTextContent("1");

    const group = screen.getByRole("group", {
      name: /avatar group/i,
    });

    expect(group.childElementCount).toEqual(3);
  });

  it("should not render truncated avatars counter if max is equal to avatars count", () => {
    render(
      <AvatarGroup max={2}>
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    );

    const truncateCircle = screen.queryByTestId("testid-excess_label");
    expect(truncateCircle).not.toBeInTheDocument();

    const group = screen.getByRole("group", {
      name: /avatar group/i,
    });

    expect(group.childElementCount).toEqual(2);
  });
});
