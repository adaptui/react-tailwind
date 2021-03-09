import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { Toasts } from "../Toasts";
import { Button } from "../../button";
import { useCustomToast } from "./CustomToast";
import { useLibraryToast } from "../ToastAlert";
import { ToastProvider, useToasters } from "../RenderlessToast/index";

export default { title: "Toast" } as Meta;

export const Default = () => {
  return (
    <ToastProvider>
      <Toasts />
      <TriggerToasts />
    </ToastProvider>
  );
};

const TriggerToasts = () => {
  const toast = useLibraryToast();
  const showCustomToast = useCustomToast();
  const { showToast, removeToast } = useToasters();

  return (
    <div className="flex flex-col space-y-2 justify-items-center">
      <div className="space-x-2">
        <Button
          className="my-2"
          onClick={() => showToast("Proper Vercel Toast.")}
        >
          String Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            toast({
              title: "Proper Vercel Toast with better state.",
            })
          }
        >
          Info Toast
        </Button>
        <Button onClick={() => showCustomToast({ title: "Hello world" })}>
          User Defined Custom Toast
        </Button>
      </div>

      <div className="space-x-2">
        <Button
          className="my-2"
          onClick={() =>
            toast({
              type: "success",
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              actions: [
                {
                  variant: "primary",
                  label: "Delete",
                  handleClick: toast => removeToast(toast?.id),
                },
              ],
            })
          }
        >
          Success Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            toast({
              type: "info",
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              actions: [
                {
                  variant: "secondary",
                  label: "Cancel",
                  handleClick: toast => removeToast(toast?.id),
                },
              ],
            })
          }
        >
          Info Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            toast({
              type: "warning",
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              actions: [
                {
                  variant: "primary",
                  label: "Delete",
                  handleClick: toast => removeToast(toast?.id),
                },
              ],
            })
          }
        >
          Warning Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            toast({
              type: "error",
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              actions: [
                {
                  variant: "ghost",
                  label: "Undo",
                  handleClick: toast => removeToast(toast?.id),
                },
              ],
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
            toast({
              title: "Proper Vercel Toast with better state.",
            })
          }
        >
          Only Title Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            toast({
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
            toast({
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              actions: [
                {
                  variant: "ghost",
                  label: "Undo",
                  handleClick: toast => removeToast(toast?.id),
                },
              ],
            })
          }
        >
          With Ghost Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            toast({
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              actions: [
                {
                  variant: "primary",
                  label: "Delete",
                  handleClick: toast => removeToast(toast?.id),
                },
              ],
            })
          }
        >
          With Primary Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            toast({
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              actions: [
                {
                  variant: "primary",
                  label: "Delete",
                  handleClick: toast => removeToast(toast?.id),
                },
                {
                  variant: "secondary",
                  label: "Cancel",
                  handleClick: toast => removeToast(toast?.id),
                },
              ],
            })
          }
        >
          Both Primary and Secondary Action Toast
        </Button>
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
