import * as React from "react";

import { RenderProp, RenderPropType } from "../utils";

import { SwitchDescription } from "./SwitchDescription";
import { SwitchIcon } from "./SwitchIcon";
import { SwitchInput, SwitchInputProps } from "./SwitchInput";
import { SwitchLabel } from "./SwitchLabel";
import {
  SwitchInitialState,
  SwitchStateReturn,
  useSwitchProps,
} from "./SwitchState";
import { SwitchText } from "./SwitchText";

export type SwitchOwnProps = Partial<SwitchInputProps> & {
  /**
   * Provide custom icons as a replacement for the default ones.
   */
  icon?: RenderPropType<SwitchStateReturn & Pick<SwitchInputProps, "disabled">>;

  /**
   * Description for the Switch.
   */
  label?: RenderPropType<SwitchStateReturn>;

  /**
   * Description for the Switch.
   */
  description?: RenderPropType<SwitchStateReturn>;
};

export type SwitchProps = SwitchInitialState &
  SwitchOwnProps &
  RenderProp<SwitchStateReturn>;

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const {
      label,
      description,
      labelProps,
      inputProps,
      iconProps,
      textProps,
      descriptionProps,
    } = useSwitchProps(props);

    return (
      <SwitchLabel {...labelProps}>
        <SwitchInput as="button" ref={ref} {...inputProps} />
        <SwitchIcon {...iconProps} />
        {label && !description ? <SwitchText {...textProps} /> : null}
        {label && description ? (
          <div>
            <SwitchText {...textProps} />
            <SwitchDescription {...descriptionProps} />
          </div>
        ) : null}
      </SwitchLabel>
    );
  },
);

Switch.displayName = "Switch";
