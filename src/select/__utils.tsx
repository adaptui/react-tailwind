import { Spinner } from "../spinner";

import { SelectUIProps } from "./SelectProps";

export const DefaultSelectSpinner = (props: SelectUIProps) => {
  const { size } = props;

  return <Spinner size={size !== "xl" ? "xs" : "md"} />;
};
