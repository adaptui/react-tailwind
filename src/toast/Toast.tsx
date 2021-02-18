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
  AlertBody,
  AlertTitle,
  AlertActions,
  AlertDescription,
  AlertActionButton,
} from "../alert";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { ButtonGroup } from "../button";
import { isString, runIfFn } from "../utils";
import { Alert, AlertProps } from "../alert";
import { ToastWrapper } from "./ToastWrapper";
import { forwardRefWithAs } from "../utils/types";

const createToastType = ({ status }: Pick<AlertProps, "status">) => {
  return (({ hideToast, content, id }) => {
    const hideFn = () => hideToast(id);

    return (
      <Alert status={status}>
        {({ isMobile }) => {
          const Action = content.actions && (
            <ButtonGroup
              size="md"
              style={{ boxShadow: "none", alignItems: "center" }}
            >
              {content.actions.map((action: Record<string, any>) =>
                isString(action.label) ? (
                  <AlertActionButton onClick={e => action.handler(e, hideFn)}>
                    {action.label}
                  </AlertActionButton>
                ) : (
                  runIfFn(action.label, hideFn)
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

type ToastAction = {
  label: React.ReactNode | ((hide: Function) => JSX.Element);
  handler?: (event: React.MouseEvent<any, MouseEvent>, hide: Function) => any;
};

type ToastContent = {
  title: string;
  description?: string;
  actions?: ToastAction[];
};

type UseToast = () => Omit<ToastContextState, "showToast"> & {
  showToast: (
    config: Partial<Omit<IToast, "isVisible" | "placement" | "content">> & {
      content: ToastContent;
    },
  ) => void;
};

export const useToast: UseToast = () => {
  const props = useRenderlesskitToast();

  return {
    ...props,
    showToast: p => props.showToast({ ...p, placement: undefined }),
  };
};
