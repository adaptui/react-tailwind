import * as React from "react";
import { FaCog } from "react-icons/fa";

import { Icon, IconProps } from "../../index";

export type IconReactIconProps = IconProps & {};

export const IconReactIcon: React.FC<IconReactIconProps> = props => {
  return <Icon as={FaCog} className="text-blue-500" {...props} />;
};

export default IconReactIcon;
