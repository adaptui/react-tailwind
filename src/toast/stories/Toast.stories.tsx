import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { Toasts } from "../Toasts";
import { Button } from "../../button";
import { useToastType } from "../ToastAlert";
import { useCustomToast } from "./CustomToast";
import { ToastProvider, useToasters } from "../RenderlessToast/index";

export default {
  title: "Toast",
} as Meta;

export const Default = () => {
  return (
    <ToastProvider>
      <Toasts />
      <TriggerToasts />
    </ToastProvider>
  );
};

const TriggerToasts = () => {
  const { showToast, removeToast } = useToasters();

  const show = useToastType();
  const showCustomToast = useCustomToast();

  return (
    <div className="flex flex-col space-y-2 justify-items-center">
      <div className="space-x-2">
        <Button
          className="my-2"
          onClick={() =>
            show({
              type: "success",
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              actions: ["Delete"],
            })
          }
        >
          Success Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            show({
              type: "info",
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              actions: ["Delete"],
            })
          }
        >
          Info Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            show({
              type: "warning",
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              actions: ["Delete"],
            })
          }
        >
          Warning Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            show({
              type: "error",
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              actions: ["Delete"],
            })
          }
        >
          Error Toast
        </Button>
      </div>

      <div className="space-x-2">
        <Button
          className="my-2"
          onClick={() =>
            show({
              title: "Proper Vercel Toast with better state.",
            })
          }
        >
          Only Title Toast
        </Button>
        <Button
          className="my-2"
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
          className="my-2"
          onClick={() =>
            show({
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
            })
          }
        >
          With Ghost Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            show({
              type: "info",
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              actions: ["Delete"],
            })
          }
        >
          With Primary Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            show({
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              actions: ["Delete"],
            })
          }
        >
          Both Primary and Secondary Action Toast
        </Button>
      </div>

      <div className="space-x-2">
        <Button
          className="my-2"
          onClick={() => showToast("Proper Vercel Toast.")}
        >
          String Toast
        </Button>
        <Button onClick={() => showCustomToast({ title: "Hello world" })}>
          User Defined Custom Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            show({
              type: "info",
              title: "Proper Vercel Toast with better state.",
            })
          }
        >
          Info Toast
        </Button>

        <span>
          <Button
            className="my-2"
            onClick={() =>
              show({
                type: "info",
                title: "Proper Vercel Toast with better state.",
                description: "With both Title & Description",
                actions: [
                  {
                    variant: "primary",
                    label: "Delete",
                    handleClick: toast => removeToast(toast?.id),
                  },
                  {
                    variant: "outline",
                    label: "Undo",
                    handleClick: toast => {
                      alert(`Toast id is ${toast?.id}`);
                    },
                  },
                ],
              })
            }
          >
            With Actions
          </Button>
        </span>
      </div>

      <div className="space-x-2">
        <Button
          className="my-2"
          onClick={() =>
            showToast("Proper Vercel Toast with better state.", {
              placement: "bottom-left",
            })
          }
        >
          Bottom Left Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            showToast("Proper Vercel Toast with better state.", {
              placement: "bottom-center",
            })
          }
        >
          Bottom Center Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            showToast("Proper Vercel Toast with better state.", {
              placement: "bottom-right",
            })
          }
        >
          Bottom Right Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            showToast("Proper Vercel Toast with better state.", {
              placement: "top-left",
            })
          }
        >
          Top Left Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            showToast("Proper Vercel Toast with better state.", {
              placement: "top-center",
            })
          }
        >
          Top Center Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            showToast("Proper Vercel Toast with better state.", {
              placement: "top-right",
            })
          }
        >
          Top Right Toast
        </Button>
      </div>

      <div>
        <Button className="my-2" onClick={() => removeToast()}>
          Remove All Toast
        </Button>
      </div>
    </div>
  );
};
