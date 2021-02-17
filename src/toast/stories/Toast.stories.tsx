import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { storyTemplate } from "../../../.storybook/storybookUtils";
import { ToastController } from "@renderlesskit/react";
import { useToast } from "../Toast";
import { ToastProvider } from "../Toast";
import { Button, CloseButton } from "../../button";
import { AlertCloseButton } from "../..";

export default {
  title: "Toast",
  component: ToastController,
} as Meta;

const ToastTriggers = () => {
  const { showToast, toasts, removeToast } = useToast();

  return (
    <>
      <button
        onClick={() => {
          Object.values(toasts).forEach(e => {
            removeToast(e.id);
          });
        }}
      >
        Remove all
      </button>
      <Button
        variant="primary"
        onClick={() => {
          showToast({
            type: "success",
            content: {
              title: `Figma saves your work ${Math.random().toFixed(2)}`,
              description: "This is description",
            },
          });
        }}
      >
        Show toast
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          showToast({
            type: "error",
            content: {
              title: `This is an error ${Math.random().toFixed(2)}`,
              description: "Woops! Something went wrong",
              actions: [
                { label: "Reach Out", handler: () => alert(1) },
                { label: <AlertCloseButton onClick={() => alert(2)} /> },
              ],
            },
          });
        }}
      >
        Show toast
      </Button>
    </>
  );
};

const base = storyTemplate<any>(
  args => (
    <ToastProvider {...args}>
      <ToastTriggers />
    </ToastProvider>
  ),
  { placement: "bottom-center" },
);

export const Default = base({});
