import React from "react";
import { Composite } from "reakit";

import {
  useRadioState,
  RadioInitialState,
  RadioStateReturn,
} from "./RadioState";
import { createContext } from "../utils";
import { forwardRefWithAs } from "../utils/types";

type RadioGroupContext = RadioStateReturn & Pick<RadioGroupProps, "size">;

const [RadioProvider, useRadioGroup] = createContext<RadioGroupContext>({
  errorMessage: "Radio must be used within RadioProvider",
  name: "RadioGroup",
  strict: false,
});

export type RadioGroupProps = RadioInitialState & {
  size?: keyof Renderlesskit.GetThemeValue<"radio", "icon", "size">;
  ariaLabel?: string;
};

export const RadioGroup = forwardRefWithAs<
  RadioGroupProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { size, className, style, ariaLabel = "Radio Group", children } = props;
  const { state, setState, ...composite } = useRadioState(props);

  return (
    <RadioProvider value={{ state, setState, ...composite, size }}>
      <Composite
        ref={ref}
        role="radiogroup"
        aria-label={ariaLabel}
        className={className}
        style={style}
        {...composite}
      >
        {children}
      </Composite>
    </RadioProvider>
  );
});

RadioGroup.displayName = "RadioGroup";

export { useRadioGroup };
