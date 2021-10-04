import * as React from "react";
import { flushSync } from "react-dom";
import { createComponent } from "reakit-system";
import { useForkRef, useLiveRef } from "reakit-utils";
import { warning } from "reakit-warning";
import raf from "raf";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";

import { SHOW_MORE_CONTENT_KEYS } from "./__keys";
import { createComposableHook } from "./createComposableHook";
import { ShowMoreStateReturn } from "./ShowMoreState";

export type ShowMoreContentOptions = BoxOptions &
  Pick<
    ShowMoreStateReturn,
    | "baseId"
    | "visible"
    | "contentSize"
    | "duration"
    | "direction"
    | "easing"
    | "onCollapseEnd"
    | "onCollapseStart"
    | "onExpandEnd"
    | "onExpandStart"
  > & {};

export type ShowMoreContentHTMLProps = BoxHTMLProps;

export type ShowMoreContentProps = ShowMoreContentOptions &
  ShowMoreContentHTMLProps;

export const showMoreComposableContent = createComposableHook<
  ShowMoreContentOptions,
  ShowMoreContentHTMLProps
>({
  name: "ShowMoreContent",
  compose: useBox,
  keys: SHOW_MORE_CONTENT_KEYS,

  useProps(options, htmlProps) {
    const {
      contentSize,
      duration,
      visible,
      direction,
      easing,
      onCollapseEnd,
      onCollapseStart,
      onExpandEnd,
      onExpandStart,
    } = options;
    const {
      ref: htmlRef,
      style: htmlStyle,
      onTransitionEnd: htmlOnTransitionEnd,
      ...restHtmlProps
    } = htmlProps;
    const ref = React.useRef<HTMLElement>(null);
    const onTransitionEndRef = useLiveRef(htmlOnTransitionEnd);
    const collapsedPxSize = `${contentSize || 0}px`;
    const collapsedStyles = React.useMemo(
      () => ({
        ...(direction === "vertical"
          ? { height: collapsedPxSize }
          : { width: collapsedPxSize }),
        overflow: "hidden",
      }),
      [collapsedPxSize, direction],
    );

    const [styles, setStylesRaw] = React.useState<React.CSSProperties>(
      visible ? {} : collapsedStyles,
    );
    const setStyles = (newStyles: {} | ((oldStyles: {}) => {})): void => {
      // We rely on reading information from layout
      // at arbitrary times, so ensure all style changes
      // happen before we might attempt to read them.
      flushSync(() => {
        setStylesRaw(newStyles);
      });
    };
    const mergeStyles = React.useCallback((newStyles: {}): void => {
      setStyles(oldStyles => ({ ...oldStyles, ...newStyles }));
    }, []);

    function getTransitionStyles(size: number | string): {
      transition: string;
    } {
      const _duration = duration || getAutoSizeDuration(size);

      return {
        transition: `${
          direction === "vertical" ? "height" : "width"
        } ${_duration}ms ${easing}`,
      };
    }

    useEffectAfterMount(() => {
      if (visible) {
        raf(() => {
          onExpandStart?.();

          mergeStyles({
            willChange: `${direction === "vertical" ? "height" : "width"}`,
            overflow: "hidden",
          });

          raf(() => {
            const size =
              direction === "vertical"
                ? getElementHeight(ref)
                : getElementWidth(ref);

            mergeStyles({
              ...getTransitionStyles(size),
              ...(direction === "vertical"
                ? { height: size }
                : { width: size }),
            });
          });
        });
      } else {
        raf(() => {
          onCollapseStart?.();

          const size =
            direction === "vertical"
              ? getElementHeight(ref)
              : getElementWidth(ref);

          mergeStyles({
            willChange: `${direction === "vertical" ? "height" : "width"}`,
            ...(direction === "vertical" ? { height: size } : { width: size }),
            ...getTransitionStyles(size),
          });
          raf(() => {
            mergeStyles({
              ...(direction === "vertical"
                ? { height: collapsedPxSize }
                : { width: collapsedPxSize }),
              overflow: "hidden",
            });
          });
        });
      }
    }, [visible]);

    const onTransitionEnd = React.useCallback(
      (event: React.TransitionEvent) => {
        onTransitionEndRef.current?.(event);

        if (event.defaultPrevented) return;

        const side = direction === "vertical" ? "height" : "width";

        // Sometimes onTransitionEnd is triggered by another transition,
        // such as a nested collapse panel transitioning. But we only
        // want to handle this if this component's element is transitioning
        if (event.target !== ref.current || event.propertyName !== side) {
          return;
        }

        // The height comparisons below are a final check before
        // completing the transition
        // Sometimes this callback is run even though we've already begun
        // transitioning the other direction
        // The conditions give us the opportunity to bail out,
        // which will prevent the collapsed content from flashing on the screen
        const stylesSize =
          direction === "vertical" ? styles.height : styles.width;

        if (visible) {
          const size =
            direction === "vertical"
              ? getElementHeight(ref)
              : getElementWidth(ref);

          // If the height at the end of the transition
          // matches the height we're animating to,
          if (size === stylesSize) {
            setStyles({});
          } else {
            // If the heights don't match, this could be due the height
            // of the content changing mid-transition
            mergeStyles({
              ...(direction === "vertical"
                ? { height: collapsedPxSize }
                : { width: collapsedPxSize }),
            });
          }

          onExpandEnd?.();

          // If the height we should be animating to matches the collapsed height,
          // it's safe to apply the collapsed overrides
        } else if (stylesSize === collapsedPxSize) {
          setStyles(collapsedStyles);

          onCollapseEnd?.();
        }
      },
      [
        collapsedPxSize,
        collapsedStyles,
        direction,
        mergeStyles,
        onCollapseEnd,
        onExpandEnd,
        onTransitionEndRef,
        styles.height,
        styles.width,
        visible,
      ],
    );

    const style = { ...styles, ...htmlStyle };

    return {
      ref: useForkRef(ref, htmlRef),
      id: options.baseId,
      style,
      onTransitionEnd,
      ...restHtmlProps,
    };
  },
});

export const useShowMoreContent = showMoreComposableContent();

export const ShowMoreContent = createComponent({
  as: "div",
  memo: true,
  useHook: useShowMoreContent,
});

// https://github.com/mui-org/material-ui/blob/da362266f7c137bf671d7e8c44c84ad5cfc0e9e2/packages/material-ui/src/styles/transitions.js#L89-L98
export function getAutoSizeDuration(size: number | string): number {
  if (!size || typeof size === "string") {
    return 0;
  }

  const constant = size / 36;

  // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

export function useEffectAfterMount(
  cb: () => void,
  dependencies: unknown[],
): void {
  const justMounted = React.useRef(true);

  React.useEffect(() => {
    if (!justMounted.current) {
      return cb();
    }

    justMounted.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

export function getElementHeight(
  el: React.RefObject<HTMLElement> | { current?: { scrollHeight: number } },
): string | number {
  if (!el?.current) {
    warning(
      true,
      `useCollapse was not able to find a ref to the collapse element via \`getCollapseProps\`. Ensure that the element exposes its \`ref\` prop. If it exposes the ref prop under a different name (like \`innerRef\`), use the \`refKey\` property to change it. Example:
{...getCollapseProps({refKey: 'innerRef'})}`,
    );
    return "auto";
  }
  return el.current.scrollHeight;
}

export function getElementWidth(
  el: React.RefObject<HTMLElement> | { current?: { scrollWidth: number } },
): string | number {
  if (!el?.current) {
    warning(
      true,
      `useCollapse was not able to find a ref to the collapse element via \`getCollapseProps\`. Ensure that the element exposes its \`ref\` prop. If it exposes the ref prop under a different name (like \`innerRef\`), use the \`refKey\` property to change it. Example:
{...getCollapseProps({refKey: 'innerRef'})}`,
    );
    return "auto";
  }
  return el.current.scrollWidth;
}
