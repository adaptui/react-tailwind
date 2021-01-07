import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs, PropsWithAs } from "../utils/types";

const fallbackIcon = {
  path: (
    <g stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        fill="none"
        d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      />
      <circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </g>
  ),
  viewBox: "0 0 24 24",
};

export type IconProps = React.SVGAttributes<SVGElement> & BoxProps & {};

function IconComponent(
  props: PropsWithAs<IconProps, "svg">,
  ref: React.Ref<HTMLOrSVGElement>,
) {
  const {
    as: element = "svg",
    viewBox,
    focusable = false,
    children,
    className,
    ...rest
  } = props;

  const theme = useTheme();
  const iconStyles = theme.icon.base;

  const shared: any = {
    ref,
    focusable,
    className: cx(iconStyles, className),
  };

  const _viewBox = viewBox ?? fallbackIcon.viewBox;

  /**
   * If you're using an icon library like `react-icons`.
   * Note: anyone passing the `as` prop, should manage the `viewBox` from the external component
   */
  if (element && typeof element !== "string") {
    return <Box as={element} {...shared} {...rest} />;
  }

  const _path = (children ?? fallbackIcon.path) as React.ReactNode;

  return (
    <Box as={element} viewBox={_viewBox} {...shared} {...rest}>
      {_path}
    </Box>
  );
}

export const Icon = forwardRefWithAs<IconProps, "svg">(IconComponent);

export default Icon;
