import "./style.css";
import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { useToast, ToastController } from "@renderlesskit/react";
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
            content: "Figma saves your work automagically",
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
            content: "4 emails archived",
            placement: "top-right",
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
  {},
);

export const Default = base({});
