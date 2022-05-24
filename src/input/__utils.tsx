import { Spinner } from "../spinner";

import { InputUIProps } from "./InputProps";

export const DefaultInputSpinner = (props: InputUIProps) => {
  const { size } = props;

  return <Spinner size={size !== "xl" ? "xs" : "md"} />;
};
