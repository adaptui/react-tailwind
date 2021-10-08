import * as React from "react";

import {
  Badge as RenderlesskitBadge,
  BadgeProps as RenderlesskitBadgeProps,
} from "../../index";

export type BadgeProps = RenderlesskitBadgeProps & {};

export const Badge: React.FC<BadgeProps> = props => {
  return <RenderlesskitBadge {...props}>Beta</RenderlesskitBadge>;
};

export default Badge;
