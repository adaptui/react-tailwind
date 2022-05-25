import * as React from "react";

import { SwitchDescription } from "./SwitchDescription";
import { SwitchIcon } from "./SwitchIcon";
import { SwitchInput } from "./SwitchInput";
import { SwitchLabel } from "./SwitchLabel";
import { SwitchProps, useSwitchProps } from "./SwitchProps";
import { SwitchText } from "./SwitchText";

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const {
      labelProps,
      inputProps,
      iconProps,
      textProps,
      descriptionProps,
      uiProps,
    } = useSwitchProps(props);
    const { label, description } = uiProps;

    return (
      <SwitchLabel {...labelProps}>
        <SwitchInput as="button" ref={ref} {...inputProps} />
        {label && !description ? <SwitchText {...textProps} /> : null}
        {label && description ? (
          <div>
            <SwitchText {...textProps} />
            <SwitchDescription {...descriptionProps} />
          </div>
        ) : null}
        <SwitchIcon {...iconProps} />
      </SwitchLabel>
    );
  },
);

Switch.displayName = "Switch";
