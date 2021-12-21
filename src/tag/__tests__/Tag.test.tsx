import { screen } from "@testing-library/react";

import { render, testA11y } from "../../utils/testUtils";
import { Tag } from "../Tag";

const spyWarn = jest.spyOn(console, "warn");

beforeEach(() => {
  spyWarn.mockReset();
});

afterEach(() => {
  expect(spyWarn).not.toHaveBeenCalled();
});

describe("<Tag />", () => {
  it("close icon should not be visible if closable=false", () => {
    render(<Tag>hello</Tag>);

    expect(
      screen.queryByTestId("testid-close-element"),
    ).not.toBeInTheDocument();
  });

  it("should not have a11y violations", async () => {
    await testA11y(<Tag>Ally</Tag>);
  });
});
