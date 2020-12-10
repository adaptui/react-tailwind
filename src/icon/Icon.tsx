import * as React from "react";
import { Role, RoleProps } from "reakit";

import theme from "../theme";
import { __DEV__ } from "../utils";

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

export interface IconProps
  extends Omit<React.SVGAttributes<SVGElement>, keyof RoleProps>,
    RoleProps {
  /**
   * For use with icon library like `react-icons` where the `viewBox` will be
   * managed from the external library
   */
  as?: React.ReactElement;
}

export const Icon = React.forwardRef<React.Ref<any>, IconProps>(
  (props, ref) => {
    const {
      as: element,
      viewBox,
      focusable = false,
      children,
      ...rest
    } = props;

    const iconStyles = theme.icon.base;

    const shared: any = {
      ref,
      focusable,
      className: iconStyles,
    };

    const _viewBox = viewBox ?? fallbackIcon.viewBox;

    /**
     * If you're using an icon library like `react-icons`.
     * Note: anyone passing the `as` prop, should manage the `viewBox` from the external component
     */
    if (element && typeof element !== "string") {
      return <Role as={element} {...shared} {...rest} />;
    }

    const _path = (children ?? fallbackIcon.path) as React.ReactNode;

    return (
      <Role as="svg" viewBox={_viewBox} {...shared} {...rest}>
        {_path}
      </Role>
    );
  },
);

if (__DEV__) {
  Icon.displayName = "Icon";
}

export default Icon;
