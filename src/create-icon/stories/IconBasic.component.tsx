import * as React from "react";

import { Icon, IconProps } from "../../index";

export type IconBasicProps = IconProps & {};

export const IconBasic: React.FC<IconBasicProps> = props => {
  return <Icon {...props} />;
};

export default IconBasic;
