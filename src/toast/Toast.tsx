import React from "react";
import {
  cx,
  Toast as IToast,
  ToastContextState,
  ToastProviderProps,
  useToast as useRenderlesskitToast,
  ToastProvider as RenderlesskitToastProvider,
} from "@renderlesskit/react";

import {
  AlertIcon,
  AlertTitle,
  AlertBody,
  AlertDescription,
  AlertActionButton,
  AlertActions,
} from "../alert";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { ToastWrapper } from "./ToastWrapper";
import { forwardRefWithAs } from "../utils/types";
import { Alert, AlertProps } from "../alert";
import { ButtonGroup } from "../button";

const createToastType = ({ status }: { status: AlertProps["status"] }) => {
  return (({ hideToast, content, id }) => {
    return (
      <Alert
        description={content.description}
        status={status}
        title={content.title}
        closable
        onClose={() => hideToast(id)}
      >
        {({ isMobile }) => {
          const Action = content.actions && (
            <ButtonGroup size={isMobile ? "sm" : "md"}>
              {content.actions.map(action =>
                typeof action.label === "string" ? (
                  <AlertActionButton onClick={action.handler}>
                    {action.label}
                  </AlertActionButton>
                ) : (
                  action.label
                ),
              )}
            </ButtonGroup>
          );

          return (
            <>
              <AlertIcon />
              <AlertBody>
                <AlertTitle>{content.title}</AlertTitle>
                {content.description && (
                  <AlertDescription>{content.description}</AlertDescription>
                )}
                <Box as="span" style={{ display: "inherit" }}>
                  {isMobile ? Action : null}
                </Box>
              </AlertBody>
              <AlertActions style={{ alignItems: "center" }}>
                {!isMobile ? Action : null}
              </AlertActions>
            </>
          );
        }}
      </Alert>
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
        success: createToastType({
          status: "success",
        }),
        error: createToastType({ status: "error" }),
        info: createToastType({ status: "info" }),
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
