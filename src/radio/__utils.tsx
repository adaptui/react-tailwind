import { CircleIcon } from "../icons";

import { RadioUIProps } from "./RadioProps";

export const RadioDefaultIcon: RadioUIProps["icon"] = props => {
  const { isChecked } = props;

  return <>{isChecked ? <CircleIcon /> : null}</>;
};
