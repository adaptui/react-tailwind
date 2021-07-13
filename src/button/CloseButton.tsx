import * as React from "react";

import { CloseIcon } from "../icons";
import { Button, ButtonProps } from "./Button";
import { forwardRefWithAs } from "../utils/types";

export type CloseButtonProps = ButtonProps & {};

export const CloseButton = forwardRefWithAs<
  CloseButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <Button
      ref={ref}
      aria-label="Close"
      iconOnly={(children as React.ReactElement) || <CloseIcon />}
      {...rest}
    />
  );
});

CloseButton.displayName = "CloseButton";
