import { screen } from "@testing-library/react";

import { Avatar } from "../index";
import { render, testA11y, mockImage } from "../../utils/testUtils";

jest.useFakeTimers("modern");
afterEach(() => {
  mockImage.restoreMock();
});

describe("<Avatar />", () => {
  expect.assertions(1);

  it("should render Avatar", () => {
    const { asFragment } = render(<Avatar />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render Avatar renderProps", () => {
    render(
      <Avatar name="Anurag hazra">
        {({ name, getInitials }) => <p>{getInitials!(name)}</p>}
      </Avatar>,
    );

    expect(screen.getByTestId("testid-avatar_children")).toHaveTextContent(
      "Ah",
    );
  });

  it("should render with AvatarBadge", () => {
    const { asFragment } = render(<Avatar status="online"></Avatar>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a name avatar if no src", () => {
    const name = "Dan Abramov";
    const { getByLabelText } = render(<Avatar name="Dan Abramov" />);

    const content = getByLabelText(name);
    expect(content).toHaveTextContent("DA");
  });

  it("renders a custom fallback if src & name both are not provided", () => {
    const fallbackContent = "I'm a fallback";
    const { getByLabelText } = render(
      <Avatar fallback={<div aria-label="fallback">{fallbackContent}</div>} />,
    );

    expect(getByLabelText("fallback")).toHaveTextContent(fallbackContent);
  });

  it("prioritize name between fallback & name", () => {
    const fallbackContent = "I'm a fallback";
    const name = "Anurag Hazra";
    const { queryByLabelText } = render(
      <Avatar
        name={name}
        fallback={<div aria-label="fallback">{fallbackContent}</div>}
      />,
    );

    const content = queryByLabelText(name);
    expect(content).toHaveTextContent("AH");
    expect(queryByLabelText("fallback")).not.toBeInTheDocument();
  });

  it("prioritize src between fallback, name & src", async () => {
    mockImage.load();
    const fallbackContent = "I'm a fallback";
    const name = "Anurag Hazra";
    const src = "demo.png";
    render(
      <Avatar
        src={src}
        name={name}
        fallback={<div aria-label="fallback">{fallbackContent}</div>}
      />,
    );

    await mockImage.advanceTimer();

    expect(screen.getByTestId("testid-avatarimg")).toBeInTheDocument();
  });

  it("Avatar Image loads", async () => {
    mockImage.load();
    render(<Avatar src={"demo.png"}></Avatar>);

    await mockImage.advanceTimer();

    expect(screen.getByTestId("testid-avatarimg")).toBeInTheDocument();
  });

  it("Avatar onError", async () => {
    mockImage.error();
    const onErrorFn = jest.fn();

    render(<Avatar src={"demo.png"} onError={onErrorFn}></Avatar>);

    await mockImage.advanceTimer();

    expect(onErrorFn).toBeCalledTimes(1);
  });

  it("should not have a11y violations", async () => {
    await testA11y(<Avatar>Ally</Avatar>);
  });
});
