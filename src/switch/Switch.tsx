import { useMemo } from "react";
import { CheckboxOptions as ReakitCheckboxOptions } from "reakit";
import { useControllableState } from "@renderlesskit/react";

import { BoxProps } from "../box";
import { CommonFieldProps } from "../form-field";
import { createContext, forwardRefWithAs, RenderProp, runIfFn } from "../utils";

import { SwitchIcon, SwitchInput, SwitchLabel, SwitchText } from "./";

type Size = keyof Renderlesskit.GetThemeValue<
  "switch",
  "icon",
  "wrapper",
  "size"
>;

export type SwitchContext = {
  state: CommonSwitchProps & {
    setState: (e: boolean) => void;
  };
  size: Size;
};

const [SwitchProvider, useSwitchContext] = createContext<SwitchContext>({
  name: "SwitchContext",
  strict: false,
});

export { useSwitchContext };

type SwitchRenderProps = RenderProp<SwitchContext["state"]>;

type CommonSwitchProps = {
  size?: Size;
  name?: string;
  value?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (v?: boolean) => void;
};

export type SwitchProps = Omit<BoxProps, "onChange"> &
  Omit<CommonFieldProps, "id"> &
  Omit<ReakitCheckboxOptions, "size" | "setState" | "value"> &
  CommonSwitchProps;

export const Switch = forwardRefWithAs<
  SwitchProps & SwitchRenderProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const {
    name,
    value,
    checked,
    onChange,
    children,
    focusable,
    isInvalid,
    isRequired,
    isDisabled,
    size = "md",
    defaultChecked,
    ...rest
  } = props;

  const [switchState, setSwitchStateChange] = useControllableState({
    value: value || checked,
    defaultValue: defaultChecked,
    onChange: onChange,
  });

  const state = useMemo(
    () => ({
      setState: setSwitchStateChange,
      value: switchState,
      checked: switchState,
      focusable,
    }),
    [setSwitchStateChange, switchState, focusable],
  );
  const context = useMemo(() => ({ state, size }), [state, size]);

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
