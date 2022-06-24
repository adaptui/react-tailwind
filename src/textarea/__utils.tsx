import { Spinner } from "../spinner";

import { TextareaUIProps } from "./TextareaProps";

export const DefaultTextareaSpinner = (props: TextareaUIProps) => {
  const { size } = props;

  return (
    <Spinner
      track="visible"
      themeColor="current"
      size={size === "xl" ? "md" : "xs"}
    />
  );
};
