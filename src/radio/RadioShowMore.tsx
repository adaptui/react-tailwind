import * as React from "react";
import { cx } from "@renderlesskit/react";

import { PlusIcon } from "../icons";
import {
  ShowMore,
  ShowMoreButton,
  ShowMoreContent,
} from "../show-more/ShowMore";
import { ShowMoreInitialState } from "../show-more/ShowMoreState";
import { useTheme } from "../theme";
import { Dict } from "../utils/types";

import { useRadioStateContext } from "./RadioGroupState";

export type RadioShowMoreOwnProps = { componentProps?: Dict<any> };

export type RadioShowMoreProps = ShowMoreInitialState & RadioShowMoreOwnProps;

export const RadioShowMore: React.FC<RadioShowMoreProps> = props => {
  const { children, componentProps } = props;
  const contextState = useRadioStateContext();
  const size = contextState?.size || "md";
  const sizeMap = {
    sm: "sm",
    md: "md",
    lg: "xl",
  } as const;
  const [hasExpandStarted, setHasExpandStarted] = React.useState(false);

  const theme = useTheme("radio");
  const buttonClassName = cx(
    theme.group.showMore.button.base[contextState.stack],
    hasExpandStarted
      ? ""
      : theme.group.showMore.button.expanded[contextState.stack],
  );
  const contentClassName = cx(theme.group.showMore.content[contextState.stack]);

  return (
    <ShowMore
      direction={contextState.stack}
      onExpandStart={() => setHasExpandStarted(true)}
      onCollapseStart={() => setHasExpandStarted(false)}
    >
      {children}
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
    </ShowMore>
  );
};

RadioShowMore.displayName = "RadioShowMore";
