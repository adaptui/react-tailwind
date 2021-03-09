import * as React from "react";
import { cx } from "@renderlesskit/react";

import {
  Toast,
  ToastPlacement,
  useToasts,
  useToastsReturnType,
} from "./RenderlessToast";
import { useTheme } from "../theme";
import { isFunction, objectKeys } from "../utils";
import { useHover, useMediaQuery } from "../hooks";

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
  const [side, position] = placement.split("-");
  const { hoverProps, isHovered } = useHover({});

  const theme = useTheme();
  const toastsContainerStyles = cx(
    theme.toast.container.base,
    theme.toast[side].container.base,
    theme.toast[side][position].container.base,
    isHovered
      ? cx(theme.toast.container.hovered, theme.toast[side].container.hovered)
      : cx(
          theme.toast.container.notHovered,
          theme.toast[side].container.notHovered,
        ),
  );

  return (
    <div className={toastsContainerStyles} {...hoverProps}>
      {toasts.map((toast, index) => {
        return (
          <ToastBar
            key={toast.id}
            toast={toast}
            index={index}
            toastsLength={toasts.length}
            isHovered={isHovered}
            hoverOffset={calculateOffset(toast.id, toast.placement)}
            updateHeight={updateHeight}
          />
        );
      })}
    </div>
  );
};

export type ToastBarProps = {
  toast: Toast;
  index: number;
  toastsLength: number;
  isHovered: boolean;
  hoverOffset: number;
} & Pick<useToastsReturnType, "updateHeight">;

export const ToastBar = (props: ToastBarProps) => {
  const {
    toast,
    index,
    toastsLength,
    isHovered,
    hoverOffset,
    updateHeight,
  } = props;

  const ref = React.useCallback(
    (el: HTMLElement | null) => {
      if (el) {
        const boundingRect = el.getBoundingClientRect();
        toast.visible &&
          updateHeight(toast.id, boundingRect.height, toast.placement);
      }
    },
    [updateHeight, toast.id, toast.visible, toast.placement],
  );

  const isToastVisible = toast.visible;
  const [side, position] = toast.placement.split("-");
  const sortedIndex = toastsLength - (index + 1);
  const clampedIndex = sortedIndex > 4 ? 4 : sortedIndex;
  const translateYGap = 10 * clampedIndex;
  const scalePercent = 1 - 0.05 * clampedIndex;
  const showAlertContent = sortedIndex === 0 || isHovered;

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const showToast = isMobile ? sortedIndex === 0 : sortedIndex <= 2;
  const hoverOffsetSide = side === "bottom" ? -hoverOffset : hoverOffset;
  const translateYGapSide = side === "bottom" ? -translateYGap : translateYGap;

  const theme = useTheme();
  const toastAnimationStyles = cx(
    theme.toast.animationWrapper.base,
    theme.toast[side].animationWrapper.base,
    theme.toast[side][position].animationWrapper.base,
    isToastVisible
      ? cx(
          theme.toast.animationWrapper.visible,
          theme.toast[side].animationWrapper.visible,
        )
      : cx(
          theme.toast.animationWrapper.notVisible,
          theme.toast[side].animationWrapper.notVisible,
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
          height: isHovered ? `${toast.height}px` : `${toast.frontHeight}px`,
        }}
      >
        <div className={cx(theme.toast.fill, theme.toast[side].fill)} />
        {isFunction(toast.content) ? (
          toast.content({ toast, showAlertContent })
        ) : (
          <div role="alert" className={theme.toast.default}>
            {toast.content}
          </div>
        )}
      </div>
    </div>
  );
};
