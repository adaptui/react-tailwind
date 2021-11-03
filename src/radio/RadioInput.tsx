import { createComponent, createHook } from "reakit-system";
import {
  cx,
  RadioHTMLProps,
  RadioOptions,
  useRadio,
} from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { RADIO_INPUT_KEYS } from "./__keys";
import { RadioStateReturn } from "./RadioState";

export type RadioInputOptions = BoxOptions &
  RadioOptions &
  Pick<RadioStateReturn, "size">;

export type RadioInputHTMLProps = BoxHTMLProps & Omit<RadioHTMLProps, "size">;

export type RadioInputProps = RadioInputOptions & RadioInputHTMLProps;

export const useRadioInput = createHook<RadioInputOptions, RadioInputHTMLProps>(
  {
    name: "RadioInput",
    compose: [useBox, useRadio],
    keys: RADIO_INPUT_KEYS,

    useProps(options, htmlProps) {
      const { className: htmlClassName, ...restHtmlProps } = htmlProps;

      const theme = useTheme("radio");
      const className = cx(theme.input, htmlClassName);

      return { className, ...restHtmlProps };
    },
  },
);

export const RadioInput = createComponent({
  as: "input",
  memo: true,
  useHook: useRadioInput,
});
