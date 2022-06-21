import * as React from "react";

import { runIfFn } from "../utils";

import { TextareaBase } from "./TextareaBase";
import { TextareaGhost } from "./TextareaGhost";
import { TextareaIcon } from "./TextareaIcon";
import { TextareaProps, useTextareaProps } from "./TextareaProps";
import { TextareaWrapper } from "./TextareaWrapper";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { wrapperProps, baseProps, iconProps, ghostProps, uiProps } =
      useTextareaProps(props);
    const { loading, icon, spinner } = uiProps;

    return (
      <TextareaWrapper {...wrapperProps}>
        <TextareaBase ref={ref} {...baseProps} />
        {loading ? (
          runIfFn(spinner, uiProps)
        ) : icon ? (
          <TextareaIcon {...iconProps} />
        ) : null}
        <TextareaGhost {...ghostProps} />
      </TextareaWrapper>
    );
  },
);

Textarea.displayName = "Textarea";
