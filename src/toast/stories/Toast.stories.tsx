import "./style.css";
import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { storyTemplate } from "../../../.storybook/storybookUtils";
import { ToastController } from "@renderlesskit/react";
import { useToast } from "../Toast";
import { ToastProvider } from "../Toast";
import { Button } from "../../button";

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
              buttonLabel: "Reach out",
              title: `This is an error ${Math.random().toFixed(2)}`,
              description: "Woops! Something went wrong",
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
