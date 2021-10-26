import * as React from "react";

import { Badge, BadgeProps } from "../../index";

export type BadgeBasicProps = BadgeProps & {};

export const BadgeBasic: React.FC<BadgeBasicProps> = props => {
  return <Badge {...props}>Beta</Badge>;
};

export default BadgeBasic;
