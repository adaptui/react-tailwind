import * as React from "react";
import {
  Checkbox as RenderlessCheckbox,
  CheckboxProps as RenderlessCheckboxProps,
} from "reakit";
import { Box, BoxProps } from "../box";

import { forwardRefWithAs, PropsWithAs } from "../utils/types";

export type CheckboxProps = BoxProps & {};

function CheckboxComponent(
  props: PropsWithAs<CheckboxProps, "label">,
  ref: React.Ref<HTMLLabelElement>,
) {
  return (
    <Box
      as="label"
      className="relative inline-flex items-center font-sans align-top cursor-pointer"
      ref={ref}
      {...props}
    />
  );
}

export const Checkbox = forwardRefWithAs<CheckboxProps, "label">(
  CheckboxComponent,
);

export type CheckboxInputProps = RenderlessCheckboxProps & {};

function CheckboxInputComponent(
  props: PropsWithAs<CheckboxInputProps, "input">,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <RenderlessCheckbox
      className="absolute top-0 w-full h-full p-0 m-0 overflow-visible opacity-0 z-1"
      ref={ref}
      {...props}
    />
  );
}

export const CheckboxInput = forwardRefWithAs<CheckboxInputProps, "input">(
  CheckboxInputComponent,
);
