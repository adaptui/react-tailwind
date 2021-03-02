import * as React from "react";
import { cx } from "@renderlesskit/react";

import { Box, BoxProps } from "../box";
import { useHover } from "../hooks";
import { forwardRefWithAs } from "../utils/types";
import { Toast as ToastType, useToasts } from "./RenderlessToast";
import { Alert } from "../alert";
import { useMergeRefs } from "../hooks/useMergeRefs";

export type ToastContainerProps = BoxProps & {};

export const ToastContainer = forwardRefWithAs<
  ToastContainerProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, children, ...rest } = props;
  const { toasts, updateHeight, calculateOffset, removeToast } = useToasts();
  const { hoverProps, isHovered } = useHover({});

  const toastContainerStyles = cx(
    "fixed z-50 max-w-sm transition-all duration-300 right-5",
    isHovered ? "bottom-5" : "bottom-2.5",
    className,
  );

  return (
    <Box ref={ref} className={toastContainerStyles} {...hoverProps} {...rest}>
      {toasts.map((toast: ToastType, index) => {
        const toastsLength = toasts.length;
        const sortedIndex = toastsLength - (index + 1);

        return (
          <ToastWrapper
            key={toast.id}
            sortedIndex={sortedIndex}
            toast={toast}
            updateHeight={updateHeight}
            removeToast={removeToast}
            isHovered={isHovered}
            hoverOffset={calculateOffset(toast.id)}
          />
        );
      })}
    </Box>
  );
});

ToastContainer.displayName = "ToastContainer";

export type ToastWrapperProps = BoxProps & {
  toast: ToastType;
  sortedIndex: number;
  isHovered: boolean;
  hoverOffset: number;
  updateHeight: (toastId: string, height: number) => void;
  removeToast: (toastId?: string | undefined) => void;
};

export const ToastWrapper = forwardRefWithAs<
  ToastWrapperProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    toast,
    sortedIndex,
    updateHeight,
    removeToast,
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
  const translateYGap = -20 * clampedIndex;
  const scalePercent = 1 - 0.05 * clampedIndex;

  return (
    <ToastAnimationWrapper
      ref={useMergeRefs(htmlRef, ref)}
      isVisible={toast.visible}
    >
      <ToastHoverWrapper
        toast={toast}
        sortedIndex={sortedIndex}
        isHovered={isHovered}
        hoverOffset={hoverOffset}
        translateYGap={translateYGap}
        scalePercent={scalePercent}
      >
        <ToastFill />
        <Alert
          status="success"
          title="Vercel Toast"
          description={toast.content as string}
          closable
          onClose={() => removeToast(toast.id)}
        />
      </ToastHoverWrapper>
    </ToastAnimationWrapper>
  );
});

ToastWrapper.displayName = "ToastWrapper";

export type ToastAnimationWrapperProps = BoxProps & {
  isVisible: boolean;
};

export const ToastAnimationWrapper = forwardRefWithAs<
  ToastAnimationWrapperProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { isVisible, className, children, ...rest } = props;
  const toastAnimationWrapperStyles = cx(
    "absolute bottom-0 right-0 w-96 transition-all duration-300 transform-gpu",
    isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
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
};

export const ToastHoverWrapper = forwardRefWithAs<
  ToastHoverWrapperProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
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
  return (
    <Box
      ref={ref}
      className={cx("flex transition-all duration-300", className)}
      style={{
        transform: isHovered
          ? `translate3d(0, -${hoverOffset}px, 0)`
          : `translate3d(0, ${translateYGap}px, 0) scale(${scalePercent})`,
        opacity: sortedIndex > 2 ? 0 : 1,
        height: isHovered ? `${toast.height}px` : `${toast.frontHeight}px`,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
});

ToastHoverWrapper.displayName = "ToastHoverWrapper";

export type ToastFillProps = BoxProps & {};

export const ToastFill = forwardRefWithAs<
  ToastFillProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <Box
      ref={ref}
      className={cx(
        "absolute left-0 right-0 w-full h-full bg-transparent top-full",
        className,
      )}
      {...rest}
    />
  );
});

ToastFill.displayName = "ToastFill";
