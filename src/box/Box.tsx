import { createComponent, createHook } from "reakit-system";
import { RoleHTMLProps, RoleOptions, useRole } from "reakit";

import { tcm } from "../utils";

export type BoxOptions = RoleOptions;

export type BoxHTMLProps = RoleHTMLProps;

export type BoxProps = BoxOptions & BoxHTMLProps;

export const useBox = createHook<BoxOptions, BoxHTMLProps>({
  name: "Box",
  compose: useRole,

  useProps(options, htmlProps) {
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;
    const className = tcm(htmlClassName);

    return { className, ...restHtmlProps };
  },
});

export const Box = createComponent({
  as: "div",
  memo: true,
  useHook: useBox,
});
