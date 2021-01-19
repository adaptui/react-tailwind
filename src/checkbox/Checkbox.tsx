import * as React from "react";
import {
  Checkbox as RenderlessCheckbox,
  CheckboxProps as RenderlessCheckboxProps,
} from "reakit";

import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type CheckboxProps = BoxProps & {};

export const Checkbox = forwardRefWithAs<
  CheckboxProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  return (
    <Box
      as="label"
      className="relative inline-flex items-center font-sans align-top cursor-pointer"
      ref={ref}
      {...props}
    />
  );
});

export type CheckboxInputProps = RenderlessCheckboxProps & {};

export const CheckboxInput = forwardRefWithAs<
  CheckboxInputProps,
  HTMLInputElement,
  "input"
>((props, ref) => {
  return (
    <RenderlessCheckbox
      className="absolute top-0 w-full h-full p-0 m-0 overflow-visible opacity-0 z-1"
      ref={ref}
      {...props}
    />
  );
});
