import React from "react";
import {
  Toast,
  ToastContextState,
  ToastProviderProps,
  useToast as useRenderlesskitToast,
  ToastProvider as RenderlesskitToastProvider,
} from "@renderlesskit/react";
import { Tag } from "../tag";
import { InfoCircleIcon } from "../icons";
import { ToastWrapper } from "./ToastWrapper";

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <RenderlesskitToastProvider
      {...props}
      toastWrapper={ToastWrapper}
      toastTypes={{
        success: ({ hideToast, content, id }) => {
          return (
            <Tag
              className="mb-2"
              prefix={<InfoCircleIcon />}
              variant="primary"
              closable
              onClose={() => hideToast(id)}
            >
              {content}
            </Tag>
          );
        },
        error: ({ hideToast, content, id }) => {
          return (
            <Tag
              className="mb-2"
              prefix={<InfoCircleIcon />}
              variant="secondary"
              closable
              onClose={() => hideToast(id)}
            >
              {content}
            </Tag>
          );
        },
      }}
    >
      {children}
    </RenderlesskitToastProvider>
  );
};

type UseToast = () => Omit<ToastContextState, "showToast"> & {
  showToast: (p: Partial<Omit<Toast, "isVisible" | "placement">>) => void;
};

export const useToast: UseToast = () => {
  const props = useRenderlesskitToast();

  return {
    ...props,
    showToast: p => props.showToast({ ...p, placement: undefined }),
  };
};
