import { Spinner } from "../spinner";
import { useTheme } from "../theme";
import { tcm } from "../utils";

import { TextareaUIProps } from "./TextareaProps";

export const DefaultTextareaSpinner = (props: TextareaUIProps) => {
  const { autoSize, size } = props;
  const theme = useTheme("textarea");

  return (
    <Spinner
      className={tcm(theme.icon.base, autoSize ? theme.icon.autoSize : "")}
      size={size !== "xl" ? "xs" : "md"}
    />
  );
};
