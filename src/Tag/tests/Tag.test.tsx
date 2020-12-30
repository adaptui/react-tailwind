import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { Tag } from "../Tag";
import { testA11y } from "../../utils/testUtils";

const spyWarn = jest.spyOn(console, "warn");

beforeEach(() => {
  spyWarn.mockReset();
});

afterEach(() => {
  expect(spyWarn).not.toHaveBeenCalled();
});

describe("<Tag />", () => {
  it("should be closable", () => {
    const onCloseFn = jest.fn();
    render(
      <Tag closable onClose={onCloseFn}>
        hello
      </Tag>,
    );

    fireEvent.click(screen.getByRole("button"));
    expect(onCloseFn).toHaveBeenCalled();
  });

  it("close icon should not be visible if closable=false", () => {
    render(<Tag>hello</Tag>);

    expect(
      screen.queryByTestId("testid-close-element"),
    ).not.toBeInTheDocument();
  });

  it("custom suffix", () => {
    render(
      <Tag closable suffix={<p>Suffix</p>}>
        hello
      </Tag>,
    );

    expect(screen.queryByTestId("testid-close-element")).toBeInTheDocument();
    expect(screen.getByText(/suffix/i)).toBeInTheDocument();
  });

  // TODO: Fix spy warn not firing
  it.skip("should throw warning if suffix is provided with and closable is false", () => {
    render(<Tag suffix={<p>Suffix</p>}>hello</Tag>);

    expect(
      screen.queryByTestId("testid-close-element"),
    ).not.toBeInTheDocument();

    expect(spyWarn).toBeCalledTimes(1);
  });

  it("should not have a11y violations", async () => {
    await testA11y(<Tag>Ally</Tag>);
  });
});
