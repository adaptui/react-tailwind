import { Role, RoleProps } from "reakit";

import { __DEV__ } from "../utils";

export interface BoxProps extends RoleProps {}

/**
 * Box is the most abstract component on top of which other chakra
 * components are built. It renders a `div` element by default.
 */
export const Box: React.FC<BoxProps> = props => <Role {...props} />;

if (__DEV__) {
  Box.displayName = "Box";
}
