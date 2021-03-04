import * as React from "react";
import { cx } from "@renderlesskit/react";

import { BoxProps } from "../box";
import { Button } from "../button";
import { useTheme } from "../theme";
import { Dict } from "../utils/types";
import { InfoCircleIcon } from "../icons";
import { Toast } from "./RenderlessToast/ToastTypes";
import { useShowToast, useToasters } from "./RenderlessToast";

export type ToastContentProps = BoxProps & {
  toast: Toast;
  showAlertContent: boolean;
};

export type ToastTypes = "info" | "success" | "warning" | "error";

export const useToastAlert = (type: ToastTypes) => {
  const { removeToast } = useToasters();
  const theme = useTheme();

  return (props: Dict) => {
    const {
      title,
      description,
      ghostAction,
      primaryAction,
      secondaryAction,
    } = props;

    return (props: { toast: Toast; showAlertContent: boolean }) => {
      const { showAlertContent, toast } = props;

      if (!title) return null;

      return (
        <div
          role="alert"
          className={cx(theme.toast.base, theme.toast[type].base)}
        >
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
              {ghostAction ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className={cx(
                    theme.toast.actions.button.ghost,
                    theme.toast[type].actions.button.ghost,
                  )}
                  onClick={() => removeToast(toast.id)}
                >
                  {ghostAction}
                </Button>
              ) : null}
              {primaryAction ? (
                <Button
                  variant="primary"
                  size="sm"
                  className={cx(
                    theme.toast.actions.button.primary,
                    theme.toast[type].actions.button.primary,
                  )}
                  onClick={() => removeToast(toast.id)}
                >
                  {primaryAction}
                </Button>
              ) : null}
              {secondaryAction ? (
                <Button
                  variant="secondary"
                  size="sm"
                  className={cx(
                    theme.toast.actions.button.secondary,
                    theme.toast[type].actions.button.secondary,
                  )}
                  onClick={() => removeToast(toast.id)}
                >
                  {primaryAction}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      );
    };
  };
};

useToastAlert.displayName = "ToastContent";

export const useToastType = (type: ToastTypes) => {
  const showToast = useShowToast();
  const toastAlert = useToastAlert(type);

  return React.useCallback(
    (alertDetails: Dict, options?: any) => {
      const content = toastAlert(alertDetails);
      const toastId = showToast(content, options);

      return toastId;
    },
    [toastAlert, showToast],
  );
};
