import * as React from "react";

import { ocx } from "../utils";
import { Button, ButtonProps } from "./Button";
import { forwardRefWithAs, PropsWithAs } from "../utils/types";
import theme from "../theme/defaultTheme";
import { CrossIcon } from "../icons";

export type IconButtonProps = ButtonProps & {};

function IconButtonComponent(
  props: PropsWithAs<IconButtonProps, "button">,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { children, className, ...rest } = props;
  const iconButtonStyles = ocx(theme.button.iconButton, className);
  const _children = React.isValidElement(children)
    ? React.cloneElement(children, {
        "aria-hidden": true,
        focusable: false,
      })
    : children;

  return (
    <Button className={iconButtonStyles} ref={ref} {...rest}>
      {_children}
    </Button>
  );
}

/**
 * Button Icon to hold icons within the Button
 */
export const IconButton = forwardRefWithAs<IconButtonProps, "button">(
  IconButtonComponent,
);

export type CloseButtonProps = IconButtonProps & {};

function CloseButtonComponent(
  props: PropsWithAs<CloseButtonProps, "button">,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { children, ...rest } = props;

  return (
    <IconButton aria-label="close" ref={ref} {...rest}>
      {children || <CrossIcon />}
    </IconButton>
  );
}

/**
 * Button Icon to hold icons within the Button
 */
export const CloseButton = forwardRefWithAs<CloseButtonProps, "button">(
  CloseButtonComponent,
);
