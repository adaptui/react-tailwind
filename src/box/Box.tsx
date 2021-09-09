import { createComponent, createHook } from "reakit-system";
import { RoleHTMLProps, RoleOptions, useRole } from "reakit";

export type BoxOptions = RoleOptions;

export type BoxHTMLProps = RoleHTMLProps;

export type BoxProps = BoxOptions & BoxHTMLProps;

export const useBox = createHook<BoxOptions, BoxHTMLProps>({
  name: "Box",
  compose: useRole,
});

export const Box = createComponent({
  as: "div",
  memo: true,
  useHook: useBox,
});
