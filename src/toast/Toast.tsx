import React from "react";
import {
  cx,
  Toast as IToast,
  ToastContextState,
  ToastProviderProps,
  useToast as useRenderlesskitToast,
  ToastProvider as RenderlesskitToastProvider,
} from "@renderlesskit/react";

import { Tag } from "../tag";
import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { InfoCircleIcon } from "../icons";
import { ToastWrapper } from "./ToastWrapper";
import { forwardRefWithAs } from "../utils/types";

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

type ToastProps = BoxProps & {};
export const Toast = forwardRefWithAs<ToastProps, HTMLDivElement, "div">(
  (props, ref) => {
    const { children, className, ...rest } = props;
    const theme = useTheme();

    const toastStyles = cx(theme.toast.base, className);
    return (
      <Box className={toastStyles} ref={ref} {...rest}>
        {children}
      </Box>
    );
  },
);

type UseToast = () => Omit<ToastContextState, "showToast"> & {
  showToast: (p: Partial<Omit<IToast, "isVisible" | "placement">>) => void;
};

export const useToast: UseToast = () => {
  const props = useRenderlesskitToast();

  return {
    ...props,
    showToast: p => props.showToast({ ...p, placement: undefined }),
  };
};
