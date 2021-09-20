import { tcm } from "../utils";
import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useRadioProps } from "./Radio";
import { forwardRefWithAs } from "../utils/types";

export type RadioDescriptionProps = BoxProps & {};

export const RadioDescription = forwardRefWithAs<
  RadioDescriptionProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { className, ...rest } = props;
  const { size = "md" } = useRadioProps();

  const theme = useTheme();
  const radioDescriptionStyles = tcm(
    theme.radio.field.description.base,
    theme.radio.field.description.size[size],
    className,
  );

  return (
    <Box as="span" ref={ref} className={radioDescriptionStyles} {...rest} />
  );
});

RadioDescription.displayName = "RadioDescription";
