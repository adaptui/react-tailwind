import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Split } from "../utils/types";
import { isFunction, objectKeys } from "../utils";
import { useHover, useMediaQuery } from "../hooks";
import { Toast, ToastPlacement } from "./ToastTypes";
import { useToasts, useToastsReturnType } from "./ToastBar";

export const Toasts = () => {
  const { toasts, updateHeight, calculateOffset } = useToasts();

  return (
    <>
      {objectKeys(toasts).map(placement => {
        return (
          <ToastsContainer
            key={placement}
            toasts={toasts[placement]}
            placement={placement}
            updateHeight={updateHeight}
            calculateOffset={calculateOffset}
          />
        );
      })}
    </>
  );
};

export type ToastsContainerProps = {
  toasts: Toast[];
  placement: ToastPlacement;
} & Pick<useToastsReturnType, "updateHeight" | "calculateOffset">;

export const ToastsContainer = (props: ToastsContainerProps) => {
  const { toasts, placement, updateHeight, calculateOffset } = props;
  const [side, position] = placement.split("-") as Split<typeof placement, "-">;

  const [isMobile] = useMediaQuery("(max-width: 640px)");
  const { hoverProps, isHovered } = useHover();

  const theme = useTheme();
  const hoveredStyle = isHovered ? "hovered" : "notHovered";
  const mobileStyle = isMobile ? "center" : position;
  const toastsContainerStyles = cx(
    theme.toast.container.base,
    theme.toast[side].container.base,
    theme.toast[side][mobileStyle].container.base,
    cx(
      theme.toast.container[hoveredStyle],
      theme.toast[side].container[hoveredStyle],
    ),
  );

  return (
    <div className={toastsContainerStyles} {...(isMobile ? {} : hoverProps)}>
      {toasts.map((toast, index) => {
        return (
          <StackableToast
            key={toast.id}
            toast={toast}
            index={index}
            toastsLength={toasts.length}
            isHovered={isHovered}
            isMobile={isMobile}
            hoverOffset={calculateOffset(toast.id, toast.placement)}
            updateHeight={updateHeight}
          />
        );
      })}
    </div>
  );
};

export type StackableToastProps = {
  toast: Toast;
  index: number;
  toastsLength: number;
  isHovered: boolean;
  isMobile: boolean;
  hoverOffset: number;
} & Pick<useToastsReturnType, "updateHeight">;

export const StackableToast = (props: StackableToastProps) => {
  const {
    toast,
    index,
    toastsLength,
    isHovered,
    isMobile,
    hoverOffset,
    updateHeight,
  } = props;
  const {
    id,
    height,
    frontHeight,
    content,
    placement,
    visibleToasts,
    offsetGap,
    visible,
  } = toast;

  const ref = React.useCallback(
    (el: HTMLElement | null) => {
      if (el) {
        const boundingRect = el.getBoundingClientRect();
        visible && updateHeight(id, boundingRect.height, placement);
      }
    },
    [updateHeight, id, visible, placement],
  );

  const isToastVisible = visible;
  const [side, position] = placement.split("-") as Split<typeof placement, "-">;
  const sortedIndex = toastsLength - (index + 1);
  const clampedIndex =
    sortedIndex > visibleToasts ? visibleToasts : sortedIndex;
  const translateYGap = offsetGap * clampedIndex;
  const scalePercent = 1 - 0.05 * clampedIndex;
  const showAlertContent = sortedIndex === 0 || isHovered;

  const showToast = sortedIndex <= visibleToasts - 1;
  const hoverOffsetSide = side === "bottom" ? -hoverOffset : hoverOffset;
  const translateYGapSide = side === "bottom" ? -translateYGap : translateYGap;

  const theme = useTheme();
  const visibleStyle = isToastVisible ? "visible" : "notVisible";
  const mobileStyle = isMobile ? "center" : position;
  const toastAnimationStyles = cx(
    theme.toast.animationWrapper.base,
    theme.toast[side].animationWrapper.base,
    theme.toast[side][mobileStyle].animationWrapper.base,
    cx(
      theme.toast.animationWrapper[visibleStyle],
      theme.toast[side].animationWrapper[visibleStyle],
    ),
  );

  return (
    <div ref={ref} className={toastAnimationStyles}>
      <div
        className={theme.toast.hoverWrapper}
        style={{
          transform: isHovered
            ? `translate3d(0, ${hoverOffsetSide}px, 0)`
            : `translate3d(0, ${translateYGapSide}px, 0) scale(${scalePercent})`,
          opacity: showToast ? 1 : 0,
          height: isHovered ? `${height}px` : `${frontHeight}px`,
        }}
      >
        <div className={cx(theme.toast.fill, theme.toast[side].fill)} />
        {isFunction(content) ? (
          content({ toast, showAlertContent })
        ) : (
          <div role="alert" className={theme.toast.default}>
            {content}
          </div>
        )}
      </div>
    </div>
  );
};
