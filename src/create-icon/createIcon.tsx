// Credits to https://github.com/chakra-ui/chakra-ui/tree/main/packages/icon
import * as React from "react";

import { forwardRefWithAs, PropsWithAs } from "../utils";

import { Icon, IconProps } from "./Icon";

export interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   *
   * @default "0 0 24 24"
   */
  viewBox?: string;
  /**
   * The `svg` path or group element
   *
   * @type React.ReactNode | React.ReactNode[]
   */
  path?: React.ReactNode | React.ReactNode[];
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
    displayName,
    defaultProps = {},
  } = options;

  const IconComponent = forwardRefWithAs<IconProps, HTMLOrSVGElement, "svg">(
    (props, ref) => {
      return (
        // @ts-ignore
        <Icon ref={ref} viewBox={viewBox} {...defaultProps} {...props}>
          {path ?? <path fill="currentColor" d={pathDefinition} />}
        </Icon>
      );
    },
  );

  IconComponent.displayName = displayName;

  return IconComponent;
}
