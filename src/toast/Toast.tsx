import React from "react";
import {
  cx,
  Toast as IToast,
  ToastContextState,
  ToastProviderProps,
  useToast as useRenderlesskitToast,
  ToastProvider as RenderlesskitToastProvider,
} from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { ToastWrapper } from "./ToastWrapper";
import { forwardRefWithAs } from "../utils/types";
import { Alert, AlertProps } from "../alert";

const createToastType = ({ status }: { status: AlertProps["status"] }) => {
  return (({ hideToast, content, id }) => {
    return (
      <Alert
        status={status}
        title={typeof content === "string" ? content : ""}
        closable
        onClose={() => hideToast(id)}
      />
    );
  }) as ToastProviderProps["toastTypes"][""];
};

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <RenderlesskitToastProvider
      {...props}
      toastWrapper={ToastWrapper}
      toastTypes={{
        success: createToastType({ status: "success" }),
        error: createToastType({ status: "error" }),
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
