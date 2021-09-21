import { createComponent, createHook } from "reakit-system";
import { useRadio, RadioOptions, RadioHTMLProps } from "@renderlesskit/react";

import { tcm } from "../utils";
import { useTheme } from "../theme";
import { RADIO_INPUT_KEYS } from "./__keys";
import { RadioStateReturn } from "./RadioState";

export type RadioInputOptions = RadioOptions & {
  size: RadioStateReturn["size"];
};

export type RadioInputHTMLProps = Omit<RadioHTMLProps, "size">;

export type RadioInputProps = RadioInputOptions & RadioInputHTMLProps;

export const useRadioInput = createHook<RadioInputOptions, RadioInputHTMLProps>(
  {
    name: "RadioInput",
    compose: useRadio,
    keys: RADIO_INPUT_KEYS,

    useProps(options, htmlProps) {
      const { className: htmlClassName, ...restHtmlProps } = htmlProps;

      const theme = useTheme("radio");
      const className = tcm(theme.input, htmlClassName);

      return { className, ...restHtmlProps };
    },
  },
);

export const RadioInput = createComponent({
  as: "input",
  memo: true,
  useHook: useRadioInput,
});
