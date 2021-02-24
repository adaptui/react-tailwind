import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { useToast } from "../Toaster";
import { useToasts } from "../useToasts";
import { ToastProvider } from "../ToastProvider";
import { Button, ButtonGroup } from "../../button";

export default {
  title: "ToastState",
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
  const { toasts, visibleToasts, handlers } = useToasts();
  const { startPause, endPause, calculateOffset, updateHeight } = handlers;
  const { dismissToast } = useToast();

  console.log("%c toasts", "color: #00736b", toasts);
  console.log("%c visibleToasts", "color: #f27999", visibleToasts);

  return (
    <div
      style={{ position: "fixed", top: 8, left: 8 }}
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      {toasts.map((toast: any) => {
        console.log("%c toast", "color: #86bf60", toast);
        const offset = calculateOffset(toast.id, {
          reverseOrder: false,
          margin: 8,
        });

        const ref = (el: any) => {
          if (el && !toast.height) {
            const height = el.getBoundingClientRect().height;
            updateHeight(toast.id, height);
          }
        };

        return (
          <div
            ref={ref}
            key={toast.id}
            style={{
              position: "absolute",
              width: "200px",
              background: "papayawhip",
              transition: "all 0.5s ease-out",
              opacity: toast.visible ? 1 : 0,
              transform: `translateY(${offset}px)`,
            }}
            onClick={() => dismissToast(toast.id)}
          >
            {toast.content}
          </div>
        );
      })}
    </div>
  );
};

const TriggerNotifications = () => {
  const { addToast, showToast, dismissToast, removeToast } = useToast();

  return (
    <ButtonGroup>
      <Button onClick={() => addToast("Hello World!")}>Add Toast</Button>
      <Button onClick={() => removeToast()}>Remove Toast</Button>
      <Button
        onClick={() => showToast("Animated Hello World", { duration: 5000 })}
      >
        Animated Add Toast
      </Button>
      <Button onClick={() => dismissToast()}>Animated Remove Toast</Button>
    </ButtonGroup>
  );
};
