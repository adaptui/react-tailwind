import * as React from "react";

import { PlusIcon } from "../icons";
import {
  ShowMore,
  ShowMoreButton,
  ShowMoreContent,
  ShowMoreProps,
} from "../show-more";
import { useTheme } from "../theme";
import { cx, Dict, passProps } from "../utils";

import { useCheckboxGroupContext } from "./CheckboxGroupState";

export type CheckboxShowMoreOwnProps = { componentProps?: Dict<any> };

export type CheckboxShowMoreProps = ShowMoreProps & CheckboxShowMoreOwnProps;

export const CheckboxShowMore: React.FC<CheckboxShowMoreProps> = props => {
  const { children, componentProps, ...restProps } = props;
  const contextState = useCheckboxGroupContext();
  const size = contextState?.size || "md";
  const stack = contextState?.stack || "vertical";

  const sizeMap = {
    sm: "sm",
    md: "md",
    lg: "xl",
  } as const;

  const theme = useTheme("radio");
  const buttonClassName = cx(theme.group.showMore.button.base[stack]);
  const contentClassName = cx(theme.group.showMore.content[stack]);

  return (
    <ShowMore {...restProps}>
      {state => {
        const finalChildren = React.Children.map(children, child => {
          return passProps(child, {
            disabled: state.visible ? false : true,
          });
        });

        return (
          <>
            {finalChildren}
            <ShowMoreContent
              className={contentClassName}
              {...componentProps?.contentProps}
            />
            <ShowMoreButton
              variant="ghost"
              size={sizeMap[size]}
              prefix={<PlusIcon />}
              className={buttonClassName}
              {...componentProps?.buttonProps}
            />
          </>
        );
      }}
    </ShowMore>
  );
};

CheckboxShowMore.displayName = "CheckboxShowMore";
