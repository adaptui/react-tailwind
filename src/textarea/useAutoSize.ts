import React from "react";
import { debounce } from "../utils";
import { TextareaProps } from ".";
import { useMergeRefs, useSafeLayoutEffect } from "..";

type UseAutoSizeProps = Pick<
  TextareaProps,
  "autoSize" | "value" | "rowsMax" | "onChange" | "ref" | "placeholder"
> & { rowsMinProp?: number | undefined };

export const useAutoSize = ({
  autoSize,
  value,
  rowsMax,
  rowsMinProp,
  onChange,
  ref,
  placeholder,
}: UseAutoSizeProps) => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const handleRef = useMergeRefs(ref, inputRef);
  const shadowRef = React.useRef<HTMLTextAreaElement>(null);

  const { current: isControlled } = React.useRef(value != null);
  const renders = React.useRef(0);

  const [state, setState] = React.useState<{
    outerHeightStyle?: number;
    overflow?: boolean;
  }>({});

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
    inputShallow.value = input.value || placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += " ";
    }

    const boxSizing = computedStyle["boxSizing"];
    console.log(boxSizing);
    const padding =
      getStyleValue(computedStyle, "paddingBottom") +
      getStyleValue(computedStyle, "paddingTop");
    const border =
      getStyleValue(computedStyle, "borderBottomWidth") +
      getStyleValue(computedStyle, "borderTopWidth");

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowsMax, rowsMinProp, placeholder]);

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

  return { handleChange, state, handleRef, shadowRef };
};

function getStyleValue(
  computedStyle: CSSStyleDeclaration,
  property: keyof CSSStyleDeclaration,
) {
  return parseInt(computedStyle[property] as string, 10) || 0;
}
