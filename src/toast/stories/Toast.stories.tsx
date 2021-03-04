import React from "react";
import { cx } from "@renderlesskit/react";
import { Meta } from "@storybook/react/types-6-0";

import { Button } from "../../button";
import { ToastContainer } from "../Toast";
import { InfoCircleIcon } from "../../icons";
import { useToastType } from "../ToastAlert";
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
  const successToast = useToastType("success");
  const infoToast = useToastType("info");
  const warningToast = useToastType("warning");
  const errorToast = useToastType("error");

  return (
    <div className="flex flex-col space-y-2 justify-items-center">
      <div className="space-x-2">
        <Button
          className="my-2"
          onClick={() =>
            successToast({
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
          className="my-2"
          onClick={() =>
            infoToast({
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
          className="my-2"
          onClick={() =>
            warningToast({
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
          className="my-2"
          onClick={() =>
            errorToast({
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              primaryAction: "Delete",
              secondaryAction: "Cancel",
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
            successToast({
              title: "Proper Vercel Toast with better state.",
            })
          }
        >
          Only Title Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            successToast({
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
            successToast({
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              ghostAction: "Undo",
            })
          }
        >
          With Ghost Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            successToast({
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              primaryAction: "Delete",
            })
          }
        >
          With Primary Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            successToast({
              title: "Proper Vercel Toast with better state.",
              description: "With both Title & Description",
              primaryAction: "Delete",
              secondaryAction: "Cancel",
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
        <Button
          className="my-2"
          onClick={() =>
            showToast(({ showAlertContent }) => {
              return (
                <div className="lib:flex lib:shadow-lg lib:bg-gray-800 lib:py-2 lib:px-3 lib:text-white lib:rounded-md lib:w-full">
                  <div
                    className={cx(
                      "lib:flex w-full lib:justify-between lib:transition-opacity",
                      showAlertContent ? "lib:opacity-100" : "lib:opacity-0",
                    )}
                  >
                    <div className="lib:flex lib:flex-col lib:text-sm lib:flex-wrap">
                      <div className="lib:font-medium">
                        Proper Vercel Toast with better state.
                      </div>
                    </div>
                    <div className="lib:inline-flex lib:box-content lib:flex-shrink-0 lib:mr-2 lib:w-4 lib:h-4 lib:py-0.5">
                      <InfoCircleIcon />
                    </div>
                  </div>
                </div>
              );
            })
          }
        >
          JSX Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            successToast({ title: "Proper Vercel Toast with better state." })
          }
        >
          Info Toast
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
