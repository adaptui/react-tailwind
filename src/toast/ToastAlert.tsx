import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { InfoCircleIcon } from "../icons";
import { Button, ButtonProps } from "../button";
import { useShowToast } from "./RenderlessToast";
import { Toast, ToastOptions } from "./RenderlessToast/ToastTypes";

export const useLibraryToast = () => {
  const showToast = useShowToast();

  return React.useCallback(
    (alertProps: ToastAlertUserProps, options?: ToastOptions) => {
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
    <div role="alert" className={cx(theme.toast.base, theme.toast[type].base)}>
      <div
        className={cx(
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
              className={cx(
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

export type ButtonVariants = "ghost" | "primary" | "secondary";

export type ToastAction = {
  variant: ButtonVariants;
  label: string;
  handleClick?: (toast?: Toast) => void;
} & ButtonProps;

export type ToastActionButtonProps = {
  action: ToastAction;
  type: ToastTypes;
  toast?: Toast;
};

const ToastActionButton: React.FC<ToastActionButtonProps> = ({
  type = "info",
  toast,
  action,
}) => {
  const theme = useTheme();
  const { variant, label, handleClick } = action;

  return (
    <Button
      size="sm"
      className={cx(
        theme.toast.actions.button[variant],
        theme.toast[type].actions.button[variant],
      )}
      onClick={() => handleClick?.(toast)}
      {...action}
    >
      {label}
    </Button>
  );
};
