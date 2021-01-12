import {
  render as RtlRender,
  RenderOptions,
  waitFor,
  RenderResult,
} from "@testing-library/react";
import * as React from "react";
import { RunOptions } from "axe-core";
import { configureAxe } from "jest-axe";

// @ts-ignore
import tailwindConfig from "../../tailwind.config";
import { RenderlesskitProvider } from "../theme";
export * from "@testing-library/react";

type Render = (
  children: React.ReactNode,
  options?: RenderOptions,
) => RenderResult;

export const render: Render = (children, options = {}) => {
  return RtlRender(
    <RenderlesskitProvider tailwindConfig={tailwindConfig}>
      {children}
    </RenderlesskitProvider>,
    options,
  );
};

export const axe = configureAxe({
  rules: {
    // disabled landmark rules when testing isolated components.
    region: { enabled: false },
  },
});

type UI = Parameters<typeof render>[0] | Element;
type TestA11YOptions = RenderOptions & {
  axeOptions?: RunOptions;
};

export const testA11y = async (
  ui: UI,
  { axeOptions, ...options }: TestA11YOptions = {},
) => {
  jest.useRealTimers();

  const container = React.isValidElement(ui)
    ? render(ui, options).container
    : ui;

  // @ts-ignore
  const results = await axe(container, axeOptions);

  expect(results).toHaveNoViolations();
};

const DELAY = 0;
const LOAD_IMAGE = "load.png";
const ERROR_IMAGE = "error.png";
const orignalImage = window.Image;

export const mockImage = (loadState: string) => {
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

mockImage.DELAY = DELAY;
mockImage.LOAD_IMAGE = LOAD_IMAGE;
mockImage.ERROR_IMAGE = ERROR_IMAGE;
mockImage.ERROR_IMAGE = ERROR_IMAGE;
mockImage.load = () => mockImage(LOAD_IMAGE);
mockImage.error = () => mockImage(ERROR_IMAGE);
mockImage.restoreMock = () => (window.Image = orignalImage);
mockImage.advanceTimer = async () => {
  return await waitFor(() => {
    jest.advanceTimersByTime(mockImage.DELAY);
  });
};
