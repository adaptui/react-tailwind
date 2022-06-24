import { Spinner } from "../spinner";

import { InputUIProps } from "./InputProps";

export const DefaultInputSpinner: InputUIProps["spinner"] = props => {
  const { size } = props;

  return <Spinner size={size !== "xl" ? "xs" : "md"} />;
};
