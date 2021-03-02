import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { ToastContainer } from "../Toast";
import { Button, ButtonGroup } from "../../button";
import { ToastProvider, useToasters } from "../RenderlessToast/index";

export default {
  title: "Toast",
} as Meta;

export const Default = (props: any) => {
  return (
    <ToastProvider>
      <div className="grid min-h-screen place-items-center">
        <TriggerNotifications />
      </div>
      <ToastContainer />
    </ToastProvider>
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
