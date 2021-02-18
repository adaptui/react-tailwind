import "./style.css";
import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { ToastController } from "@renderlesskit/react";

import { useToast } from "../Toast";
import { ToastProvider } from "../Toast";
import { AlertCloseButton } from "../..";
import { Button, ButtonGroup } from "../../button";
import { storyTemplate } from "../../../.storybook/storybookUtils";

export default {
  title: "Toast",
  component: ToastController,
} as Meta;

const ToastTriggers = () => {
  const { showToast, removeAllToasts } = useToast();

  const click = (type: string, title?: string, desc?: string) => {
    showToast({
      type: type,
      content: {
        title: title || `This is an ${type} ${Math.random().toFixed(2)}`,
        description: desc || "Woops! Something went wrong",
        actions: [
          {
            label: "Undo",
            handler: (event, hide) => {
              click("info", "Undo successful", "Don't click undo again");
            },
          },
          {
            label: hide => <AlertCloseButton onClick={() => hide(2)} />,
          },
        ],
      },
    });
  };

  return (
    <ButtonGroup attached>
      <Button
        variant="primary"
        onClick={() => {
          click("success");
        }}
      >
        Show success
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          click("error");
        }}
      >
        Show error
      </Button>
      <Button
        variant="ghost"
        onClick={() => {
          removeAllToasts();
        }}
      >
        Remove all
      </Button>
    </ButtonGroup>
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
