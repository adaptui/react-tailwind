import * as React from "react";
import { cx } from "@renderlesskit/react";

import { PlusIcon } from "../icons";
import {
  ShowMore,
  ShowMoreButton,
  ShowMoreContent,
} from "../show-more/ShowMore";
import { ShowMoreInitialState } from "../show-more/ShowMoreState";
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

  const buttonClassName = cx(
    contextState.stack === "vertical" ? "justify-start w-full" : "min-w-max",
    hasExpandStarted ? "" : "!mt-0",
  );
  const contentClassName = cx(
    contextState.stack === "vertical"
      ? "flex flex-col space-y-2 w-full"
      : "flex flex-row space-x-2",
  );

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
