import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { Alert } from "../../alert";
import { useHover } from "../../hooks";
import { Button, ButtonGroup } from "../../button";
import {
  Toast,
  ToastProvider,
  useToasters,
  useToasts,
} from "../RenderlessToast/index";

export default {
  title: "Toast",
} as Meta;

export const Default = (props: any) => {
  return (
    <ToastProvider>
      <div className="grid min-h-screen place-items-center">
        <TriggerNotifications />
      </div>
      <Notifications />
    </ToastProvider>
  );
};

const Notifications = () => {
  const { toasts, updateHeight, calculateOffset, removeToast } = useToasts();
  const { hoverProps, isHovered } = useHover({});

  return (
    <div
      className={`fixed z-50 max-w-sm transition-all duration-300 right-5 ${
        isHovered ? "bottom-5" : "bottom-2.5"
      } `}
      {...hoverProps}
    >
      {toasts.map((toast: Toast, index) => {
        const toastsLength = toasts.length;
        const sortedIndex = toastsLength - (index + 1);

        return (
          <ToastWrapper
            key={toast.id}
            sortedIndex={sortedIndex}
            toast={toast}
            updateHeight={updateHeight}
            frontHeight={0}
            removeToast={removeToast}
            isHovered={isHovered}
            hoverOffset={calculateOffset(toast.id)}
          />
        );
      })}
    </div>
  );
};

const TriggerNotifications = () => {
  const { showToast } = useToasters();

  return (
    <ButtonGroup>
      <Button
        onClick={() =>
          showToast(
            "Proper Vercel Toast with better state management. Proper Vercel Toast with better state management",
          )
        }
      >
        Animated Add Large Toast
      </Button>
      <Button
        onClick={() =>
          showToast("Proper Vercel Toast with better state management.")
        }
      >
        Animated Add Medium Toast
      </Button>
      <Button onClick={() => showToast("Proper Vercel Toast")}>
        Animated Add Small Toast
      </Button>
    </ButtonGroup>
  );
};

const ToastWrapper = (props: any) => {
  const {
    toast,
    sortedIndex,
    updateHeight,
    removeToast,
    isHovered,
    hoverOffset,
  } = props;

  const ref = React.useCallback(
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
    <div
      ref={ref}
      className={`absolute bottom-0 right-0 w-96 transition-all duration-300 transform-gpu ${
        toast.visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div
        className={`flex  transition-all duration-300`}
        style={{
          transform: isHovered
            ? `translate3d(0, -${hoverOffset}px, 0)`
            : `translate3d(0, ${translateYGap}px, 0) scale(${scalePercent})`,
          opacity: sortedIndex > 2 ? 0 : 1,
          height: isHovered ? `${toast.height}px` : `${toast.frontHeight}px`,
        }}
      >
        <div className="absolute left-0 right-0 w-full h-full bg-transparent top-full" />
        <Alert
          status="success"
          title="Vercel Toast"
          description={toast.content}
          closable
          onClose={() => removeToast(toast.id)}
        />
      </div>
    </div>
  );
};
