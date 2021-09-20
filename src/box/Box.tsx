import { Role, RoleProps } from "reakit";

import { tcm } from "../utils";
import { forwardRefWithAs } from "../utils/types";

export type BoxProps = RoleProps & {};

export const Box = forwardRefWithAs<BoxProps, HTMLDivElement, "div">(
  (props, ref) => {
    const { className, ...rest } = props;
    const classNameProp = tcm(className);

    return <Role ref={ref} className={classNameProp} {...rest} />;
  },
);

Box.displayName = "Box";

export default Box;
