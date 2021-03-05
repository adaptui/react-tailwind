import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { ToastContainer } from "../Toast";
import { useToastType } from "../ToastAlert";
import { useCustomToast } from "./CustomToast";
import { Button, ButtonGroup } from "../../button";
import { ToastProvider, useToasters } from "../RenderlessToast/index";

export default {
  title: "Toast",
} as Meta;

export const Default = () => {
  return (
    <ToastProvider>
      <ToastContainer />
      <TriggerNotifications />
    </ToastProvider>
  );
};

const TriggerNotifications = () => {
  const { showToast, removeToast } = useToasters();

  const show = useToastType();
  const showCustomToast = useCustomToast();

  return (
    <div className="flex flex-col space-y-2 justify-items-center">
      <ButtonGroup attached>
        <Button
          onClick={() =>
            show({
              type: "success",
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              primaryAction: "Delete",
              secondaryAction: "Cancel",
            })
          }
        >
          Success Toast
        </Button>
        <Button
          onClick={() =>
            show({
              type: "info",
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              primaryAction: "Delete",
              secondaryAction: "Cancel",
            })
          }
        >
          Info Toast
        </Button>
        <Button
          onClick={() =>
            show({
              type: "warning",
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              primaryAction: "Delete",
              secondaryAction: "Cancel",
            })
          }
        >
          Warning Toast
        </Button>
        <Button
          onClick={() =>
            show({
              type: "error",
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              primaryAction: "Delete",
              secondaryAction: "Cancel",
            })
          }
        >
          Error Toast
        </Button>
      </ButtonGroup>
      <ButtonGroup attached>
        <Button
          onClick={() =>
            show({
              title: "Proper Vercel Toast with better state.",
            })
          }
        >
          Only Title Toast
        </Button>
        <Button
          onClick={() =>
            show({
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
            })
          }
        >
          With Description Toast
        </Button>
        <Button
          onClick={() =>
            show({
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              ghostAction: "Undo",
            })
          }
        >
          With Ghost Toast
        </Button>
        <Button
          onClick={() =>
            show({
              type: "info",
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              primaryAction: "Delete",
            })
          }
        >
          With Primary Toast
        </Button>
        <Button
          onClick={() =>
            show({
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              primaryAction: "Delete",
              secondaryAction: "Cancel",
            })
          }
        >
          Both Primary and Secondary Action Toast
        </Button>
      </ButtonGroup>

      <ButtonGroup attached>
        <Button onClick={() => showToast("Proper Vercel Toast.")}>
          String Toast
        </Button>
        <Button onClick={() => showCustomToast({ title: "Hello world" })}>
          User Defined Custom Toast
        </Button>
        <Button
          onClick={() =>
            show({
              type: "info",
              title: "Proper Vercel Toast with better state.",
            })
          }
        >
          Info Toast
        </Button>
      </ButtonGroup>
      <span>
        <Button onClick={() => removeToast()}>Remove All Toast</Button>
      </span>
    </div>
  );
};
