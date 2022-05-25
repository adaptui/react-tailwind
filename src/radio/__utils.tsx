import { CircleIcon } from "../icons";

import { RadioUIProps } from "./RadioProps";

export const RadioDefaultIcon = (props: RadioUIProps) => {
  const { isChecked } = props;

  return <>{isChecked ? <CircleIcon /> : null}</>;
};
