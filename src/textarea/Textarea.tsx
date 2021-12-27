import * as React from "react";

import { RenderProp, runIfFn } from "../utils";

import { TextareaBase, TextareaBaseHTMLProps } from "./TextareaBase";
import { TextareaGhost } from "./TextareaGhost";
import { TextareaIcon } from "./TextareaIcon";
import { useTextareaProps } from "./TextareaProps";
import { TextareaInitialState, TextareaStateReturn } from "./TextareaState";
import { TextareaWrapper } from "./TextareaWrapper";

export type TextareaOwnProps = TextareaBaseHTMLProps & {};

export type TextareaProps = TextareaInitialState &
  TextareaOwnProps &
  RenderProp<TextareaStateReturn>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { wrapperProps, baseProps, iconProps, ghostProps, state } =
      useTextareaProps(props);
    const { loading, invalid, spinner } = state;

    return (
      <TextareaWrapper {...wrapperProps}>
        <TextareaBase ref={ref} {...baseProps} />
        {loading ? (
          runIfFn(spinner, state)
        ) : invalid ? (
          <TextareaIcon {...iconProps} />
        ) : null}
        <TextareaGhost {...ghostProps} />
      </TextareaWrapper>
    );
  },
);

Textarea.displayName = "Textarea";
