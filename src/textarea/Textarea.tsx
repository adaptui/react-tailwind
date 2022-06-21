import * as React from "react";

import { TextareaBase } from "./TextareaBase";
import { TextareaGhost } from "./TextareaGhost";
import { TextareaIcon } from "./TextareaIcon";
import { TextareaProps, useTextareaProps } from "./TextareaProps";
import { TextareaSpinner } from "./TextareaSpinner";
import { TextareaWrapper } from "./TextareaWrapper";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      wrapperProps,
      baseProps,
      spinnerProps,
      iconProps,
      ghostProps,
      uiProps,
    } = useTextareaProps(props);
    const { loading, icon } = uiProps;

    return (
      <TextareaWrapper {...wrapperProps}>
        <TextareaBase ref={ref} {...baseProps} />
        {loading ? (
          <TextareaSpinner {...spinnerProps} />
        ) : icon ? (
          <TextareaIcon {...iconProps} />
        ) : null}
        <TextareaGhost {...ghostProps} />
      </TextareaWrapper>
    );
  },
);

Textarea.displayName = "Textarea";
