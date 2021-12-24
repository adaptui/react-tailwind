import * as React from "react";

import { RenderProp } from "../utils";

import { TextareaBase, TextareaBaseHTMLProps } from "./TextareaBase";
import { TextareaGhost } from "./TextareaGhost";
import { TextareaIcon } from "./TextareaIcon";
import { useTextareaProps } from "./TextareaProps";
import { TextareaInitialState, TextareaStateReturn } from "./TextareaState";
import { TextareaWrapper } from "./TextareaWrapper";
import { useAutoSize } from "./useAutoSize";

export type TextareaOwnProps = TextareaBaseHTMLProps & {};

export type TextareaProps = TextareaInitialState &
  TextareaOwnProps &
  RenderProp<TextareaStateReturn>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { wrapperProps, baseProps, iconProps, ghostProps, icon, state } =
      useTextareaProps(props);

    const { handleChange, handleRef, shadowRef, inlineStyles } = useAutoSize({
      ref,
      ...state,
      ...props,
    });
    const textareaInlineStyles = {
      height: inlineStyles.outerHeightStyle,
      // Need a large enough difference to allow scrolling.
      // This prevents infinite rendering loop.
      overflow: inlineStyles.overflow ? "hidden" : undefined,
    };

    return (
      <TextareaWrapper {...wrapperProps}>
        <TextareaBase
          ref={handleRef}
          onChange={handleChange}
          style={textareaInlineStyles}
          {...baseProps}
        />
        {icon ? <TextareaIcon {...iconProps} /> : null}
        <TextareaGhost ref={shadowRef} {...ghostProps} />
      </TextareaWrapper>
    );
  },
);

Textarea.displayName = "Textarea";
