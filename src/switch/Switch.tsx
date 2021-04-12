import * as React from "react";
import { CheckboxOptions as ReakitCheckboxOptions } from "reakit";
import { useControllableState } from "@renderlesskit/react";

import { BoxProps } from "../box";
import { SwitchIcon } from "./SwitchIcon";
import { SwitchLabel } from "./SwitchLabel";
import { SwitchInput } from "./SwitchInput";
import { createContext, runIfFn } from "../utils";
import { forwardRefWithAs, RenderProp } from "../utils/types";
import { CommonFieldProps } from "../form-field";
import { SwitchText } from "./SwitchText";

export type SwitchContext = {
  state: CommonSwitchProps & {
    setState: (e: boolean) => void;
  };
  size: SwitchProps["size"];
};

const [SwitchProvider, useSwitchContext] = createContext<SwitchContext>({
  name: "SwitchContext",
  strict: false,
});

export { useSwitchContext };

type SwitchRenderProps = RenderProp<SwitchContext["state"]>;

type Size = keyof Renderlesskit.GetThemeValue<
  "switch",
  "icon",
  "wrapper"
>["size"];

type CommonSwitchProps = {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  size?: Size;
  name?: string;
  value?: boolean;
};

export type SwitchProps = BoxProps &
  Omit<CommonFieldProps, "id"> &
  Omit<ReakitCheckboxOptions, "size" | "setState" | "value" | "onChange"> &
  CommonSwitchProps;

export const Switch = forwardRefWithAs<
  SwitchProps & SwitchRenderProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const {
    onChange,
    value,
    checked,
    defaultChecked,
    name,
    isDisabled,
    isInvalid,
    isRequired,
    focusable,
    size = "md",
    children,
    ...rest
  } = props;

  const [switchState, setSwitchStateChange] = useControllableState({
    value: value || checked,
    defaultValue: defaultChecked,
    onChange: onChange,
  });

  const state = React.useMemo(
    () => ({
      setState: setSwitchStateChange,
      value: switchState,
      checked: switchState,
      focusable,
    }),
    [setSwitchStateChange, switchState, focusable],
  );
  const context = React.useMemo(() => ({ state, size }), [state, size]);

  if (!children) {
    return (
      <SwitchProvider value={context}>
        <SwitchLabel {...rest}>
          <SwitchInput
            ref={ref}
            name={name}
            isDisabled={isDisabled}
            isRequired={isRequired}
            isInvalid={isInvalid}
          />
          <SwitchIcon />
        </SwitchLabel>
      </SwitchProvider>
    );
  }

  return (
    <SwitchProvider value={context}>
      {typeof children !== "string" ? (
        runIfFn(children, state)
      ) : (
        <SwitchLabel {...rest}>
          <SwitchInput
            ref={ref}
            name={name}
            isDisabled={isDisabled}
            isRequired={isRequired}
            isInvalid={isInvalid}
          />
          <SwitchIcon />
          <SwitchText>{children}</SwitchText>
        </SwitchLabel>
      )}
    </SwitchProvider>
  );
});

Switch.displayName = "Switch";
