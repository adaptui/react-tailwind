import { isValidElement } from "react";
import {
  render as RtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { RunOptions } from "axe-core";
import { configureAxe } from "jest-axe";

import theme from "../../adaptui.config";
import { AdaptUIProvider } from "../theme";

export * from "@testing-library/react";

type Render = (
  children: React.ReactNode,
  options?: RenderOptions,
) => RenderResult;

export const render: Render = (children, options = {}) => {
  const result = RtlRender(
    <AdaptUIProvider extend={theme}>{children}</AdaptUIProvider>,
    options,
  );

  const _rerender = (rerenderUi: any) => {
    result.rerender(
      <AdaptUIProvider extend={theme}>{rerenderUi}</AdaptUIProvider>,
    );
  };

  return { ...result, rerender: _rerender };
};

export const axe = configureAxe({
  rules: {
    // disabled landmark rules when testing isolated components.
    region: { enabled: false },
  },
});

type UI = Parameters<typeof render>[0] | Element;
type TestA11YOption = RenderOptions & {
  axeOptions?: RunOptions;
};

export const testA11y = async (
  ui: UI,
  { axeOptions, ...options }: TestA11YOption = {},
) => {
  jest.useRealTimers();

  const container = isValidElement(ui) ? render(ui, options).container : ui;

  // @ts-ignore
  const results = await axe(container, axeOptions);

  expect(results).toHaveNoViolations();
};

const DELAY = 1;
const LOAD_IMAGE = "load.png";
const ERROR_IMAGE = "error.png";
const orignalImage = window.Image;

export const mockImage = (loadState: string) => {
  jest.useFakeTimers("modern");

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
  // https://github.com/facebook/jest/issues/7151#issuecomment-622134853
  await Promise.resolve().then(() => jest.advanceTimersByTime(mockImage.DELAY));
};
