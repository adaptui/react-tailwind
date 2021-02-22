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
        <Notifications />
        <TriggerNotifications />
      </div>
    </ToastProvider>
  );
};

const Notifications = () => {
  const { toasts, visibleToasts } = useToasts();
  console.log("%c toasts", "color: #00736b", toasts);
  console.log("%c visibleToasts", "color: #f27999", visibleToasts);

  return (
    <div style={{ position: "fixed", top: 8, left: 8 }}>
      {toasts.map((toast: any) => {
        console.log("%c toast", "color: #86bf60", toast);
        return (
          <div
            key={toast.id}
            style={{
              position: "absolute",
              width: "200px",
              background: "papayawhip",
              transition: "all 0.5s ease-out",
              opacity: toast.visible ? 1 : 0,
            }}
          >
            {toast.content}
          </div>
        );
      })}
    </div>
  );
};

const TriggerNotifications = () => {
  const { addToast, dismissToast, removeToast } = useToast();

  return (
    <ButtonGroup>
      <Button
        onClick={() => {
          const id = addToast("Hello World!");
          console.log("%c id", "color: #cc7033", id);
        }}
      >
        Add Toast
      </Button>
      <Button onClick={() => dismissToast()}>Add Toast</Button>
      <Button onClick={() => removeToast()}>Add Toast</Button>
    </ButtonGroup>
  );
};
