import { CloseIcon } from "../icons";
import { forwardRefWithAs } from "../utils/types";
import { IconButton, IconButtonProps } from "./IconButton";

export type CloseButtonProps = IconButtonProps;

export const CloseButton = forwardRefWithAs<
  CloseButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <IconButton aria-label="Close" ref={ref} {...rest}>
      {children || <CloseIcon />}
    </IconButton>
  );
});
