import { Box } from "../box";
import { useTheme } from "../theme";
import { cx, tcm } from "../utils";

import { SwitchUIProps } from "./SwitchProps";

export const SwitchDefaultIcon = (props: SwitchUIProps) => {
  const { size, themeColor, isChecked, disabled } = props;

  const theme = useTheme("switch");
  const switchIconContentStyles = tcm(
    theme.icon?.children,
    size ? theme.size[size]?.icon?.children?.default : "",
    size
      ? isChecked === true
        ? theme.size[size]?.icon?.children?.checked
        : theme.size[size]?.icon?.children?.unChecked
      : "",
    themeColor
      ? isChecked === true
        ? !disabled
          ? cx(
              theme.themeColor[themeColor]?.default?.icon?.children?.checked,
              theme.themeColor[themeColor]?.hover?.icon?.children?.checked,
              theme.themeColor[themeColor]?.active?.icon?.children?.checked,
              theme.themeColor[themeColor]?.focus?.icon?.children?.checked,
            )
          : theme.themeColor[themeColor]?.disabled?.icon?.children?.checked
        : !disabled
        ? cx(
            theme.themeColor[themeColor]?.default?.icon?.children?.unChecked,
            theme.themeColor[themeColor]?.hover?.icon?.children?.unChecked,
            theme.themeColor[themeColor]?.active?.icon?.children?.unChecked,
            theme.themeColor[themeColor]?.focus?.icon?.children?.unChecked,
          )
        : theme.themeColor[themeColor]?.disabled?.icon?.children?.unChecked
      : "",
  );

  return <Box as="span" className={switchIconContentStyles} />;
};
