import { Box } from "../box";
import { useTheme } from "../theme";
import { tcm } from "../utils";

import { SwitchUIProps } from "./SwitchProps";

export const SwitchDefaultIcon = (props: SwitchUIProps) => {
  const { size, isChecked, disabled } = props;

  const theme = useTheme("switch");
  const switchIconContentStyles = tcm(
    theme.icon.children.common,
    theme.icon.children.size.default[size],
    isChecked
      ? theme.icon.children.size.checked[size]
      : theme.icon.children.size.unChecked[size],
    disabled
      ? tcm(
          theme.icon.children.disabled,
          theme.icon.children.size.disabled[size],
        )
      : "",
  );

  return <Box as="span" className={switchIconContentStyles} />;
};
