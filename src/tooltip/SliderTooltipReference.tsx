import * as React from "react";
import { createComponent, createHook } from "reakit-system";
import { useForkRef, useLiveRef } from "reakit-utils";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useMediaQuery, usePrevious } from "../hooks";
import { RenderPropType } from "../utils";

import { SLIDER_TOOLTIP_REFERENCE_KEYS } from "./__keys";
import { TooltipStateReturn } from "./TooltipState";

export type SliderTooltipReferenceOptions = BoxOptions &
  Pick<Partial<TooltipStateReturn>, "setAnchor" | "baseId"> &
  Pick<TooltipStateReturn, "show" | "hide" | "visible"> & {
    prefix: RenderPropType<TooltipStateReturn>;
    isDragging?: boolean;
  };

export type SliderTooltipReferenceHTMLProps = Omit<BoxHTMLProps, "prefix">;

export type SliderTooltipReferenceProps = SliderTooltipReferenceOptions &
  SliderTooltipReferenceHTMLProps;

export const useSliderTooltipReference = createHook<
  SliderTooltipReferenceOptions,
  SliderTooltipReferenceHTMLProps
>({
  name: "SliderTooltipReference",
  compose: useBox,
  keys: SLIDER_TOOLTIP_REFERENCE_KEYS,

  useProps(
    options,
    {
      ref: htmlRef,
      onFocus: htmlOnFocus,
      onBlur: htmlOnBlur,
      onMouseEnter: htmlOnMouseEnter,
      onMouseLeave: htmlOnMouseLeave,
      children: htmlChildren,
      ...htmlProps
    },
  ) {
    const { visible, show, hide, baseId, setAnchor, isDragging } = options;
    const onFocusRef = useLiveRef(htmlOnFocus);
    const onBlurRef = useLiveRef(htmlOnBlur);
    const onMouseEnterRef = useLiveRef(htmlOnMouseEnter);
    const onMouseLeaveRef = useLiveRef(htmlOnMouseLeave);

    const [isMobile] = useMediaQuery("(max-width: 640px)");
    const [hasMouseLeft, setHasMouseLeft] = React.useState(false);
    const wasDragging = usePrevious(isDragging);

    React.useEffect(() => {
      if (isMobile) {
        if (!isDragging && wasDragging && visible) hide();
      } else {
        if (hasMouseLeft && !isDragging && wasDragging && visible) hide();
      }

      if (isDragging && !visible) show();
    }, [hide, wasDragging, isDragging, hasMouseLeft, visible, isMobile, show]);

    const onFocus = React.useCallback(
      (event: React.FocusEvent) => {
        onFocusRef.current?.(event);
        if (event.defaultPrevented) return;

        show?.();
      },
      [onFocusRef, show],
    );

    const onBlur = React.useCallback(
      (event: React.FocusEvent) => {
        onBlurRef.current?.(event);
        if (event.defaultPrevented) return;

        hide?.();
      },
      [hide, onBlurRef],
    );

    const onMouseEnter = React.useCallback(
      (event: React.MouseEvent) => {
        onMouseEnterRef.current?.(event);
        if (event.defaultPrevented) return;

        show?.();
        setHasMouseLeft(false);
      },
      [onMouseEnterRef, show],
    );

    const onMouseLeave = React.useCallback(
      (event: React.MouseEvent) => {
        onMouseLeaveRef.current?.(event);
        if (event.defaultPrevented) return;

        !isDragging && hide?.();
        setHasMouseLeft(true);
      },
      [hide, onMouseLeaveRef, isDragging],
    );

    const referenceChildren: React.ReactNode = (referenceProps: any) =>
      // @ts-ignore
      React.cloneElement(htmlChildren, referenceProps);

    return {
      ref: useForkRef(setAnchor, htmlRef),
      tabIndex: 0,
      onFocus,
      onBlur,
      onMouseEnter,
      onMouseLeave,
      "aria-describedby": baseId,
      children: referenceChildren,
      ...htmlProps,
    };
  },
});

export const SliderTooltipReference = createComponent({
  as: "div",
  useHook: useSliderTooltipReference,
});
