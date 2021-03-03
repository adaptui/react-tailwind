import * as React from "react";
import { cx } from "@renderlesskit/react";

import { Box, BoxProps } from "../box";
import { useHover } from "../hooks";
import { Dict, forwardRefWithAs } from "../utils/types";
import { Toast as ToastType, useToasts } from "./RenderlessToast";
import { useMergeRefs } from "../hooks/useMergeRefs";
import { InfoCircleIcon } from "../icons";
import { isFunction, isObject } from "../utils";
import { Button } from "../button";

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
  const translateYGap = -10 * clampedIndex;
  const scalePercent = 1 - 0.05 * clampedIndex;
  const showAlertContent = sortedIndex === 0 || isHovered;

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
        {isFunction(toast.content) ? (
          toast.content({ ...toast, showAlertContent, removeToast })
        ) : (
          <ToastAlert
            toast={toast}
            showAlertContent={showAlertContent}
            removeToast={removeToast}
          />
        )}
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

export type ToastAlertProps = BoxProps & {
  toast: ToastType;
  showAlertContent: boolean;
  removeToast: (toastId?: string | undefined) => void;
};

export const ToastAlert = forwardRefWithAs<
  ToastAlertProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { toast, showAlertContent, removeToast, className, ...rest } = props;
  const toastAlertStyles = cx(
    "lib:flex lib:shadow-lg lib:bg-gray-800 lib:py-2 lib:px-3 lib:text-white lib:rounded-md lib:w-full",
    className,
  );

  return (
    <Box ref={ref} role="alert" className={toastAlertStyles} {...rest}>
      {isObject(toast.content) ? (
        <ToastContent
          toast={toast}
          showAlertContent={showAlertContent}
          removeToast={removeToast}
        />
      ) : (
        toast.content
      )}
    </Box>
  );
});

ToastAlert.displayName = "ToastAlert";

export type ToastContentProps = BoxProps & {
  toast: ToastType;
  showAlertContent: boolean;
  removeToast: (toastId?: string | undefined) => void;
};

export const ToastContent = forwardRefWithAs<
  ToastContentProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { toast, showAlertContent, removeToast, className, ...rest } = props;
  const {
    title,
    description,
    ghostAction,
    primaryAction,
    secondaryAction,
  } = toast.content as Dict;

  if (!title) return null;

  return (
    <div
      ref={ref}
      className={cx(
        "lib:flex w-full lib:transition-opacity",
        showAlertContent ? "lib:opacity-100" : "lib:opacity-0",
        className,
      )}
      {...rest}
    >
      <div className="lib:inline-flex lib:box-content lib:flex-shrink-0 lib:mr-2 lib:w-4 lib:h-4 lib:py-0.5">
        <InfoCircleIcon />
      </div>
      <div className="lib:flex lib:flex-col lib:text-sm lib:flex-wrap">
        <div className="lib:font-medium">{title}</div>
        {description ? (
          <div className="lib:text-gray-300 lib:mt-0.5">{description}</div>
        ) : null}
      </div>
      <div className="space-x-2 lib:ml-auto lib:flex">
        {ghostAction ? (
          <GhostActionButton
            text={ghostAction}
            onClick={() => removeToast(toast.id)}
          />
        ) : null}
        {primaryAction ? (
          <PrimaryActionButton
            text={primaryAction}
            onClick={() => removeToast(toast.id)}
          />
        ) : null}
        {secondaryAction ? (
          <SecondaryActionButton
            text={secondaryAction}
            onClick={() => removeToast(toast.id)}
          />
        ) : null}
      </div>
    </div>
  );
});

ToastContent.displayName = "ToastContent";

type GhostActionButtonProps = BoxProps & {
  text: string;
  onClick?: () => void;
};

const GhostActionButton = (props: GhostActionButtonProps) => {
  const { text, onClick } = props;

  return (
    <Button
      variant="ghost"
      size="sm"
      className="text-white hover:text-gray-800 hover:bg-white"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

type PrimaryActionButtonProps = BoxProps & {
  text: string;
  onClick?: () => void;
};

const PrimaryActionButton = (props: PrimaryActionButtonProps) => {
  const { text, onClick } = props;

  return (
    <Button
      variant="primary"
      size="sm"
      className="text-gray-800 bg-white"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

type SecondaryActionButtonProps = BoxProps & {
  text: string;
  onClick?: () => void;
};

const SecondaryActionButton = (props: SecondaryActionButtonProps) => {
  const { text, onClick } = props;

  return (
    <Button
      variant="secondary"
      size="sm"
      className="text-white bg-gray-700"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
