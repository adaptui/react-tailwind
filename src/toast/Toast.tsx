import * as React from "react";
import { cx } from "@renderlesskit/react";

import {
  Toast as ToastType,
  ToastPlacement,
  useToasts,
} from "./RenderlessToast";
import { useTheme } from "../theme";
import { isFunction } from "../utils";
import { Box, BoxProps } from "../box";
import { useHover, useMediaQuery } from "../hooks";
import { useMergeRefs } from "../hooks/useMergeRefs";
import { Dict, forwardRefWithAs } from "../utils/types";

export type ToastContainerProps = BoxProps & {};

export const ToastContainer = forwardRefWithAs<
  ToastContainerProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { toasts } = useToasts();

  return (
    <>
      {objectKeys(toasts).map(placement => {
        return (
          <ToastContainerWrapper
            key={placement}
            placement={placement}
            toasts={toasts[placement]}
          />
        );
      })}
    </>
  );
});

ToastContainer.displayName = "ToastContainer";

export type ToastContainerWrapperProps = BoxProps & {
  placement: ToastPlacement;
  toasts: ToastType[];
};

export const ToastContainerWrapper = forwardRefWithAs<
  ToastContainerWrapperProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { placement, toasts, className, children, ...rest } = props;
  const [side, position] = placement.split("-");
  const { hoverProps, isHovered } = useHover({});
  const { updateHeight, calculateOffset } = useToasts();

  const theme = useTheme();
  const toastContainerWrapperStyles = cx(
    theme.toast.container.base,
    theme.toast[side].container.base,
    theme.toast[side][position].container.base,
    isHovered
      ? cx(theme.toast.container.hovered, theme.toast[side].container.hovered)
      : cx(
          theme.toast.container.notHovered,
          theme.toast[side].container.notHovered,
        ),
    className,
  );

  return (
    <Box
      ref={ref}
      className={toastContainerWrapperStyles}
      {...rest}
      {...hoverProps}
    >
      {toasts.map((toast: ToastType, index) => {
        const toastsLength = toasts.length;
        const sortedIndex = toastsLength - (index + 1);

        return (
          <ToastWrapper
            key={toast.id}
            sortedIndex={sortedIndex}
            toast={toast}
            updateHeight={updateHeight}
            isHovered={isHovered}
            placement={placement}
            hoverOffset={calculateOffset(toast.id)}
          />
        );
      })}
    </Box>
  );
});

ToastContainerWrapper.displayName = "ToastContainerWrapper";

export type ToastWrapperProps = BoxProps & {
  toast: ToastType;
  placement: ToastPlacement;
  sortedIndex: number;
  isHovered: boolean;
  hoverOffset: number;
  updateHeight: (toastId: string, height: number) => void;
};

export const ToastWrapper = forwardRefWithAs<
  ToastWrapperProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    toast,
    placement,
    sortedIndex,
    updateHeight,
    isHovered,
    hoverOffset,
  } = props;

  const htmlRef = React.useCallback(
    (el: HTMLElement | null) => {
      if (el) {
        const boundingRect = el.getBoundingClientRect();
        toast.visible && updateHeight(toast.id, boundingRect.height);
      }
    },
    [updateHeight, toast.id, toast.visible],
  );

  const clampedIndex = sortedIndex > 4 ? 4 : sortedIndex;
  const translateYGap = 10 * clampedIndex;
  const scalePercent = 1 - 0.05 * clampedIndex;
  const showAlertContent = sortedIndex === 0 || isHovered;
  const theme = useTheme();

  return (
    <ToastAnimationWrapper
      ref={useMergeRefs(htmlRef, ref)}
      isVisible={toast.visible}
      placement={placement}
    >
      <ToastHoverWrapper
        toast={toast}
        sortedIndex={sortedIndex}
        isHovered={isHovered}
        hoverOffset={hoverOffset}
        translateYGap={translateYGap}
        scalePercent={scalePercent}
        placement={placement}
      >
        <ToastFill placement={placement} />
        {isFunction(toast.content) ? (
          toast.content({ toast, showAlertContent })
        ) : (
          <div role="alert" className={theme.toast.default}>
            {toast.content}
          </div>
        )}
      </ToastHoverWrapper>
    </ToastAnimationWrapper>
  );
});

ToastWrapper.displayName = "ToastWrapper";

export type ToastAnimationWrapperProps = BoxProps & {
  isVisible: boolean;
  placement: ToastPlacement;
};

export const ToastAnimationWrapper = forwardRefWithAs<
  ToastAnimationWrapperProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { isVisible, placement, className, children, ...rest } = props;
  const [side, position] = placement.split("-");

  const theme = useTheme();
  const toastAnimationWrapperStyles = cx(
    theme.toast.animationWrapper.base,
    theme.toast[side].animationWrapper.base,
    theme.toast[side][position].animationWrapper.base,
    isVisible
      ? cx(
          theme.toast.animationWrapper.visible,
          theme.toast[side].animationWrapper.visible,
        )
      : cx(
          theme.toast.animationWrapper.notVisible,
          theme.toast[side].animationWrapper.notVisible,
        ),
    className,
  );

  return (
    <Box ref={ref} className={toastAnimationWrapperStyles} {...rest}>
      {children}
    </Box>
  );
});

ToastAnimationWrapper.displayName = "ToastAnimationWrapper";

export type ToastHoverWrapperProps = BoxProps & {
  toast: ToastType;
  sortedIndex: number;
  isHovered: boolean;
  hoverOffset: number;
  translateYGap: number;
  scalePercent: number;
  placement: ToastPlacement;
};

export const ToastHoverWrapper = forwardRefWithAs<
  ToastHoverWrapperProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    placement,
    isHovered,
    hoverOffset,
    translateYGap,
    scalePercent,
    sortedIndex,
    toast,
    className,
    children,
    ...rest
  } = props;
  const theme = useTheme();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const isVisible = isMobile ? sortedIndex === 0 : sortedIndex <= 2;
  const [side] = placement.split("-");
  const hoverOffsetSide = side === "bottom" ? -hoverOffset : hoverOffset;
  const translateYGapSide = side === "bottom" ? -translateYGap : translateYGap;

  return (
    <Box
      ref={ref}
      className={cx(theme.toast.hoverWrapper, className)}
      style={{
        transform: isHovered
          ? `translate3d(0, ${hoverOffsetSide}px, 0)`
          : `translate3d(0, ${translateYGapSide}px, 0) scale(${scalePercent})`,
        opacity: isVisible ? 1 : 0,
        height: isHovered ? `${toast.height}px` : `${toast.frontHeight}px`,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
});

ToastHoverWrapper.displayName = "ToastHoverWrapper";

export type ToastFillProps = BoxProps & {
  placement: ToastPlacement;
};

export const ToastFill = forwardRefWithAs<
  ToastFillProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { placement, className, children, ...rest } = props;
  const theme = useTheme();
  const [side] = placement.split("-");

  return (
    <Box
      ref={ref}
      className={cx(theme.toast.fill, theme.toast[side].fill, className)}
      {...rest}
    />
  );
});

ToastFill.displayName = "ToastFill";

export type SortedToastList = Record<ToastPlacement, ToastType[]>;

export function getPlacementSortedToasts(toasts: ToastType[]) {
  const sortedToasts: Dict = {};

  for (const key in toasts) {
    const toast = toasts[key];
    const { placement } = toast;
    sortedToasts[placement] || (sortedToasts[placement] = []);
    sortedToasts[placement].push(toast);
  }

  return sortedToasts as SortedToastList;
}

export const objectKeys = <T extends Dict>(obj: T) =>
  (Object.keys(obj) as unknown) as (keyof T)[];
