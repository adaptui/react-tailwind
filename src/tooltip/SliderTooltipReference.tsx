import * as React from "react";
import { createComponent, createHook } from "reakit-system";
import { useForkRef, useLiveRef } from "reakit-utils";
import { useFocusVisible } from "@react-aria/interactions";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { RenderPropType } from "../utils";

import { SLIDER_TOOLTIP_REFERENCE_KEYS } from "./__keys";
import { TooltipStateReturn } from "./TooltipState";

export type SliderTooltipReferenceOptions = BoxOptions &
  Pick<Partial<TooltipStateReturn>, "setAnchor" | "baseId"> &
  Pick<TooltipStateReturn, "show" | "hide"> & {
    prefix: RenderPropType<TooltipStateReturn>;
    isDragging?: boolean;
    setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
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
      onPointerDown: htmlOnPointerDown,
      children: htmlChildren,
      ...htmlProps
    },
  ) {
    const { show, hide, baseId, setAnchor, isDragging, setIsDragging } =
      options;
    const onFocusRef = useLiveRef(htmlOnFocus);
    const onBlurRef = useLiveRef(htmlOnBlur);
    const onMouseEnterRef = useLiveRef(htmlOnMouseEnter);
    const onMouseLeaveRef = useLiveRef(htmlOnMouseLeave);
    const onPointerDownRef = useLiveRef(htmlOnPointerDown);

    const [hasMouseLeft, setHasMouseLeft] = React.useState(false);
    const { isFocusVisible } = useFocusVisible();

    React.useEffect(() => {
      if (!isFocusVisible && hasMouseLeft && !isDragging) {
        hide();
      }
    }, [hide, isDragging, hasMouseLeft, isFocusVisible]);

    const onFocus = React.useCallback(
      (event: React.FocusEvent) => {
        onFocusRef.current?.(event);
        if (event.defaultPrevented) return;

        show?.();
      },
      [onFocusRef, show],
    );

    const onPointerDown = React.useCallback(
      (event: React.PointerEvent) => {
        onPointerDownRef.current?.(event);
        setIsDragging(true);

        if (event.defaultPrevented) return;
      },
      [onPointerDownRef, setIsDragging],
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
      onPointerDown,
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
