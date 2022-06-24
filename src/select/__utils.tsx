import { Spinner } from "../spinner";

import { SelectUIProps } from "./SelectProps";

export const DefaultSelectSpinner: SelectUIProps["spinner"] = props => {
  const { size } = props;

  return <Spinner size={size !== "xl" ? "xs" : "md"} />;
};
