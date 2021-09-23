import * as React from "react";
import { ActionType, AddToast, ToastOptions } from "@renderlesskit/react";

import { Button, ButtonProps } from "../button";
import { useMediaQuery } from "../hooks";
import { InfoCircleIcon } from "../icons";
import { useTheme } from "../theme";
import { tcm } from "../utils";

import { Content, Toast, useCreateToast, useToastStore } from "./index";

export const useInternalShowToast = (): AddToast<Toast, Content> => {
  const { dispatch } = useToastStore();
  const { createToast } = useCreateToast();
  const [isMobile] = useMediaQuery("(max-width: 640px)");

  return React.useCallback(
    (content, options) => {
      const toast = createToast(content, options);

      dispatch({
        type: ActionType.ADD_TOAST,
        toast,
        maxToasts: isMobile ? 1 : 20,
      });

      setTimeout(() => {
        dispatch({
          type: ActionType.UPDATE_TOAST,
          toast: { ...toast, visible: true },
        });
      }, 0);

      return toast.id;
    },
    [dispatch, createToast, isMobile],
  );
};

export const useToast = () => {
  const showToast = useInternalShowToast();

  return React.useCallback(
    (alertProps: ToastAlertUserProps, options?: ToastOptions<Toast>) => {
      const toastId = showToast(
        toastOptions => <ToastAlert {...toastOptions} {...alertProps} />,
        options,
      );

      return toastId;
    },
    [showToast],
  );
};

export type ToastAlertUserProps = {
  type?: ToastTypes;
  title: string;
  description?: string;
  actions?: ToastAction[];
};

export type ToastAlertProps = ToastAlertUserProps & {
  toast: Toast;
  showAlertContent: boolean;
};

export const ToastAlert: React.FC<ToastAlertProps> = ({
  type = "info",
  title,
  description,
  actions,
  toast,
  showAlertContent,
}) => {
  const theme = useTheme();

  return (
    <div role="alert" className={tcm(theme.toast.base, theme.toast[type].base)}>
      <div
        className={tcm(
          theme.toast.content.base,
          showAlertContent
            ? theme.toast.content.show
            : theme.toast.content.hide,
        )}
      >
        <div className={theme.toast.icon}>
          <InfoCircleIcon />
        </div>
        <div className={theme.toast.body.base}>
          <div className={theme.toast.body.title}>{title}</div>
          {description ? (
            <div
              className={tcm(
                theme.toast.body.description,
                theme.toast[type].body.description,
              )}
            >
              {description}
            </div>
          ) : null}
        </div>
        <div className={theme.toast.actions.base}>
          {actions?.map((action, index) => (
            <ToastActionButton
              key={index}
              type={type}
              toast={toast}
              action={action}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ToastAlert.displayName = "ToastAlert";

export type ToastTypes = "info" | "success" | "warning" | "error";

export type ButtonVariants = keyof Renderlesskit.GetThemeValue<
  "toast",
  "actions",
  "button"
>;

export type ToastAction = {
  variant: ButtonVariants;
  label: string;
  handleClick?: (toast?: Toast) => void;
} & Omit<ButtonProps, "variant">;

export type ToastActionButtonProps = {
  action: ToastAction;
  type: ToastTypes;
  toast: Toast;
};

const ToastActionButton: React.FC<ToastActionButtonProps> = ({
  type = "info",
  toast,
  action,
}) => {
  const theme = useTheme();
  const { variant, label, handleClick, ...rest } = action;

  return (
    <Button
      size="sm"
      className={tcm(
        theme.toast.actions.button[variant],
        theme.toast[type].actions.button[variant],
      )}
      onClick={() => handleClick?.(toast)}
      {...rest}
    >
      {label}
    </Button>
  );
};
