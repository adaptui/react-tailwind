import * as React from "react";

import { Icon, IconProps } from "./Icon";
import { forwardRefWithAs, PropsWithAs } from "../utils/types";

export interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string;
  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: React.ReactElement | React.ReactElement[];
  /**
   * If the has a single path, simply copy the path's `d` attribute
   */
  d?: string;
  /**
   * The display name useful in the dev tools
   */
  displayName?: string;
  /**
   * Default props automatically passed to the component; overwriteable
   */
  defaultProps?: PropsWithAs<IconProps, "svg">;
}

export function createIcon(options: CreateIconOptions) {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    path,
    defaultProps = {},
  } = options;

  function IconComponent(
    props: PropsWithAs<IconProps, "svg">,
    ref: React.Ref<HTMLOrSVGElement>,
  ) {
    return (
      <Icon ref={ref} viewBox={viewBox} {...defaultProps} {...props}>
        {path ?? <path fill="currentColor" d={pathDefinition} />}
      </Icon>
    );
  }

  return forwardRefWithAs<IconProps, "svg">(IconComponent);
}
