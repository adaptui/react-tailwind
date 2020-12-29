import * as React from "react";
import { render, waitFor } from "@testing-library/react";

import { Avatar, AvatarBadge } from "../Avatar";
import { testA11y } from "../../utils/testUtils";

const DELAY = 0;
const LOAD_IMAGE = "load.png";
const ERROR_IMAGE = "error.png";
const orignalImage = window.Image;

const mockImage = (loadState: string) => {
  jest.useFakeTimers();

  (window.Image as unknown) = class MockImage {
    onload: () => void = () => {};
    onerror: () => void = () => {};
    src: string = "";
    constructor() {
      if (loadState === LOAD_IMAGE) {
        setTimeout(() => {
          this.onload();
        }, DELAY);
      }
      if (loadState === ERROR_IMAGE) {
        setTimeout(() => {
          this.onerror();
        }, DELAY);
      }
      return this;
    }
  };
};

afterAll(() => {
  window.Image = orignalImage;
});

describe("<Avatar />", () => {
  expect.assertions(1);

  it("should render Avatar", () => {
    const { asFragment } = render(<Avatar />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with AvatarBadge", () => {
    const { asFragment } = render(
      <Avatar>
        <AvatarBadge>*</AvatarBadge>
      </Avatar>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with AvatarBadge & children", () => {
    const { asFragment } = render(
      <Avatar>
        <p>Some Child Element</p>
        <AvatarBadge>*</AvatarBadge>
      </Avatar>,
    );

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

  it("Avatar onError", async () => {
    mockImage(ERROR_IMAGE);
    const onErrorFn = jest.fn();

    render(<Avatar src={"demo.png"} onError={onErrorFn}></Avatar>);

    await waitFor(() => {
      jest.advanceTimersByTime(DELAY);
    });
    expect(onErrorFn).toBeCalledTimes(1);
  });

  it("should not have a11y violations", async () => {
    await testA11y(<Avatar>Ally</Avatar>);
  });
});
