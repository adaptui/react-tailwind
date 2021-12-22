import { Portal } from "reakit";
import { Meta } from "@storybook/react";

import { Button } from "../../button";
import { ToastProvider, Toasts, useToast, useToastHandlers } from "../index";

import { useCustomToast } from "./CustomToast";

export default { title: "Popups/Toast" } as Meta;

export const Default = () => {
  return (
    <ToastProvider>
      <Portal>
        <Toasts />
      </Portal>
      <TriggerDefaultToasts />
    </ToastProvider>
  );
};

export const ToastOptions = () => {
  return (
    <ToastProvider>
      <Portal>
        <Toasts />
      </Portal>
      <TriggerOptionsToasts />
    </ToastProvider>
  );
};

export const ToastTypes = () => {
  return (
    <ToastProvider>
      <Portal>
        <Toasts />
      </Portal>
      <TriggerTypesToasts />
    </ToastProvider>
  );
};

export const ToastAlertOptions = () => {
  return (
    <ToastProvider>
      <Portal>
        <Toasts />
      </Portal>
      <TriggerAlertOptionsToasts />
    </ToastProvider>
  );
};

export const ToastPlacements = () => {
  return (
    <ToastProvider>
      <Portal>
        <Toasts />
      </Portal>
      <TriggerPlacementToasts />
    </ToastProvider>
  );
};

const TriggerDefaultToasts = () => {
  const toast = useToast();
  const showCustomToast = useCustomToast();
  const { showToast, removeToast } = useToastHandlers();

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
        <Button
          className="my-2"
          onClick={() =>
            toast(
              {
                title: "Proper Vercel Toast with better state.",
                actions: [
                  {
                    variant: "solid",
                    label: "Delete",
                    handleClick: toast => removeToast(toast?.id),
                  },
                ],
              },
              { autoDismiss: false },
            )
          }
        >
          Persistent Toast
        </Button>
        <Button onClick={() => showCustomToast({ title: "Hello world" })}>
          User Defined Custom Toast
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

const TriggerOptionsToasts = () => {
  const toast = useToast();
  const { removeToast } = useToastHandlers();

  return (
    <div className="flex flex-col space-y-2 justify-items-center">
      <div className="space-x-2">
        <Button
          className="my-2"
          onClick={() =>
            toast(
              {
                title: "Proper Vercel Toast with better state.",
                actions: [
                  {
                    variant: "solid",
                    label: "Delete",
                    handleClick: toast => removeToast(toast?.id),
                  },
                ],
              },
              { autoDismiss: false, visibleToasts: 5 },
            )
          }
        >
          5 Visible Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            toast(
              {
                title: "Proper Vercel Toast with better state.",
                actions: [
                  {
                    variant: "solid",
                    label: "Delete",
                    handleClick: toast => removeToast(toast?.id),
                  },
                ],
              },
              { autoDismiss: false, visibleToasts: 5, offsetGap: 30 },
            )
          }
        >
          Bigger OffsetGap Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            toast(
              {
                title: "Proper Vercel Toast with better state.",
                actions: [
                  {
                    variant: "solid",
                    label: "Delete",
                    handleClick: toast => removeToast(toast?.id),
                  },
                ],
              },
              {
                autoDismiss: false,
                visibleToasts: 5,
                offsetGap: 30,
                hoverOffsetGap: 30,
              },
            )
          }
        >
          Bigger HoverOffsetGap Toast
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

const TriggerTypesToasts = () => {
  const toast = useToast();
  const { removeToast } = useToastHandlers();

  const types = ["success", "info", "warning", "error"] as const;

  return (
    <div className="flex flex-col space-y-2 justify-items-center">
      <div className="space-x-2">
        {types.map(type => {
          return (
            <Button
              className="my-2"
              onClick={() =>
                toast(
                  {
                    type: type,
                    title: "Proper Vercel Toast with better state.",
                    description: "With both Title & Description",
                    actions: [
                      {
                        variant: "solid",
                        label: "Delete",
                        handleClick: toast => removeToast(toast?.id),
                      },
                    ],
                  },
                  { autoDismiss: false },
                )
              }
            >
              {type} toast
            </Button>
          );
        })}
      </div>

      <div>
        <Button className="my-2" onClick={() => removeToast()}>
          Remove All Toast
        </Button>
      </div>
    </div>
  );
};

const TriggerAlertOptionsToasts = () => {
  const toast = useToast();
  const { removeToast } = useToastHandlers();

  return (
    <div className="flex flex-col space-y-2 justify-items-center">
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
            toast(
              {
                title: "Proper Vercel Toast with better state.",
                description: "With both Title & Description",
                actions: [
                  {
                    variant: "ghost",
                    label: "Undo",
                    handleClick: toast => removeToast(toast?.id),
                  },
                ],
              },
              { autoDismiss: false },
            )
          }
        >
          With Ghost Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            toast(
              {
                title: "Proper Vercel Toast with better state.",
                description: "With both Title & Description",
                actions: [
                  {
                    variant: "solid",
                    label: "Delete",
                    handleClick: toast => removeToast(toast?.id),
                  },
                ],
              },
              { autoDismiss: false },
            )
          }
        >
          With Primary Toast
        </Button>
        <Button
          className="my-2"
          onClick={() =>
            toast(
              {
                title: "Proper Vercel Toast with better state.",
                description: "With both Title & Description",
                actions: [
                  {
                    variant: "solid",
                    label: "Delete",
                    handleClick: toast => removeToast(toast?.id),
                  },
                  {
                    variant: "subtle",
                    label: "Cancel",
                    handleClick: toast => removeToast(toast?.id),
                  },
                ],
              },
              { autoDismiss: false },
            )
          }
        >
          Both Primary and Secondary Action Toast
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

const TriggerPlacementToasts = () => {
  const { showToast, removeToast } = useToastHandlers();

  const placements = [
    "bottom-left",
    "bottom-center",
    "bottom-right",
    "top-left",
    "top-center",
    "top-right",
  ] as const;

  return (
    <div className="flex flex-col space-y-2 justify-items-center">
      <div className="space-x-2">
        {placements.map(placement => {
          return (
            <Button
              className="my-2"
              onClick={() =>
                showToast("Proper Vercel Toast with better state.", {
                  placement: placement,
                })
              }
            >
              {placement} toast
            </Button>
          );
        })}
      </div>

      <div>
        <Button className="my-2" onClick={() => removeToast()}>
          Remove All Toast
        </Button>
      </div>
    </div>
  );
};
