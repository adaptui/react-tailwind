import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { debounce } from "../utils";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { useMergeRefs, useSafeLayoutEffect } from "../hooks";

export type TextareaProps = BoxProps & {
  resize?: keyof Renderlesskit.GetThemeValue<"textarea", "resize">;
  cols?: number;
  rowsMin?: number;
  rowsMax?: number;
  autoSize?: boolean;
};

export const Textarea = forwardRefWithAs<
  TextareaProps,
  HTMLTextAreaElement,
  "textarea"
>((props, ref) => {
  const {
    autoSize,
    resize = "horizontal",
    rows,
    rowsMax,
    rowsMin = 1,
    cols,
    value,
    className,
    style,
    children,
    onChange,
    ...rest
  } = props;
  const rowsMinProp = rows || rowsMin;

  const { current: isControlled } = React.useRef(value != null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const handleRef = useMergeRefs(ref, inputRef);
  const shadowRef = React.useRef<HTMLTextAreaElement>(null);
  const renders = React.useRef(0);

  const [state, setState] = React.useState<{
    outerHeightStyle?: number;
    overflow?: boolean;
  }>({});

  const theme = useTheme();
  const textaresStyles = cx(
    theme.textarea.base,
    theme.textarea.resize[resize],
    className,
  );
  const shadowTextareaStyles = cx(textaresStyles, theme.textarea.shadow);

  // Logic from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/TextareaAutosize/TextareaAutosize.js
  const syncHeight = React.useCallback(() => {
    const input = inputRef.current;
    if (input == null) return;

    const computedStyle = window.getComputedStyle(
      (input as unknown) as Element,
    );

    const inputShallow = shadowRef.current;
    if (inputShallow == null) return;

    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += " ";
    }

    // @ts-ignore
    const boxSizing = computedStyle["box-sizing"];
    const padding =
      getStyleValue(computedStyle, "padding-bottom") +
      getStyleValue(computedStyle, "padding-top");
    const border =
      getStyleValue(computedStyle, "border-bottom-width") +
      getStyleValue(computedStyle, "border-top-width");

    // The height of the inner content
    const innerHeight = inputShallow.scrollHeight - padding;

    // Measure height of a textarea with a single row
    inputShallow.value = "x";
    const singleRowHeight = inputShallow.scrollHeight - padding;

    // The height of the outer content
    let outerHeight = innerHeight;

    if (rowsMinProp) {
      outerHeight = Math.max(
        Number(rowsMinProp) * singleRowHeight,
        outerHeight,
      );
    }
    if (rowsMax) {
      outerHeight = Math.min(Number(rowsMax) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);

    // Take the box sizing into account for applying this value as a style.
    const outerHeightStyle =
      outerHeight + (boxSizing === "border-box" ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;

    setState(prevState => {
      // Need a large enough difference to update the height.
      // This prevents infinite rendering loop.
      if (
        renders.current < 20 &&
        ((outerHeightStyle > 0 &&
          Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1) ||
          prevState.overflow !== overflow)
      ) {
        renders.current += 1;

        return {
          overflow,
          outerHeightStyle,
        };
      }

      if (process.env.NODE_ENV !== "production") {
        if (renders.current === 20) {
          console.error(
            [
              "Too many re-renders. The layout is unstable.",
              "AutoResize limits the number of renders to prevent an infinite loop.",
            ].join("\n"),
          );
        }
      }

      return prevState;
    });
  }, [rowsMax, rowsMinProp, props.placeholder]);

  React.useEffect(() => {
    if (!autoSize) return;

    const handleResize = debounce(() => {
      renders.current = 0;
      syncHeight();
    });

    window.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [syncHeight, autoSize]);

  useSafeLayoutEffect(() => {
    if (!autoSize) return;

    syncHeight();
  });

  React.useEffect(() => {
    renders.current = 0;
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    renders.current = 0;

    if (!isControlled) {
      if (!autoSize) return;

      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <React.Fragment>
      <Box
        as="textarea"
        ref={handleRef}
        value={value}
        onChange={handleChange}
        rows={rowsMinProp}
        cols={cols}
        style={{
          height: state.outerHeightStyle,
          // Need a large enough difference to allow scrolling.
          // This prevents infinite rendering loop.
          overflow: state.overflow ? "hidden" : undefined,
          ...style,
        }}
        className={textaresStyles}
        {...rest}
      />
      <Box
        as="textarea"
        ref={shadowRef}
        aria-hidden
        readOnly
        tabIndex={-1}
        className={shadowTextareaStyles}
      />
    </React.Fragment>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;

function getStyleValue(computedStyle: CSSStyleDeclaration, property: string) {
  // @ts-ignore
  return parseInt(computedStyle[property], 10) || 0;
}
