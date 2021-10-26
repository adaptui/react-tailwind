import * as React from "react";

import { Icon, IconProps } from "../../index";

export type IconPathProps = IconProps & {};

export const IconPath: React.FC<IconPathProps> = props => {
  return (
    <Icon viewBox="0 0 200 200" className="text-green-500" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
};

export default IconPath;
