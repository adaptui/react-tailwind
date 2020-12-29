import * as React from "react";
import { render as RtlRender, RenderOptions } from "@testing-library/react";

// @ts-ignore
import tailwindConfig from "../../tailwind.config";
import { RenderlesskitProvider } from "../theme";

export const render = (
  children: React.ReactNode,
  options: RenderOptions = {},
) => {
  return RtlRender(
    <RenderlesskitProvider tailwindConfig={tailwindConfig}>
      {children}
    </RenderlesskitProvider>,
    options,
  );
};

export * from "@testing-library/react";
