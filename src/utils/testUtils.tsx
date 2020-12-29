import React from "react";
import { configureAxe } from "jest-axe";
import { RunOptions } from "axe-core";
import { render, RenderOptions } from "@testing-library/react";

export const axe = configureAxe({
  rules: {
    // disabled landmark rules when testing isolated components.
    region: { enabled: false },
  },
});

type UI = Parameters<typeof render>[0] | Element;
type TestA11YOptions = Omit<RenderOptions, "queries"> & {
  axeOptions?: RunOptions;
};

export const testA11y = async (
  ui: UI,
  { axeOptions, ...options }: TestA11YOptions = {},
) => {
  const container = React.isValidElement(ui)
    ? render(ui, options).container
    : ui;

  const results = await axe(container, axeOptions);

  expect(results).toHaveNoViolations();
};
