import * as React from "react";

import { useShowMoreProps } from "../show-more/ShowMore";
import {
  ShowMoreInitialState,
  ShowMoreStateReturn,
} from "../show-more/ShowMoreState";
import { RenderProp, RenderPropType } from "../utils/types";

import {
  RadioGroupInitialState,
  useRadioStateContext,
} from "./RadioGroupState";
import { RadioShowMoreButton } from "./RadioShowMoreButton";
import { RadioShowMoreContent } from "./RadioShowMoreContent";

export type RadioShowMoreOwnProps = RenderProp<ShowMoreStateReturn> &
  Pick<RadioGroupInitialState, "size"> & {
    /**
     * User defined Button element.
     *
     * @default "Show more"
     */
    button?: RenderPropType<ShowMoreStateReturn>;
  };

export type RadioShowMoreProps = ShowMoreInitialState & RadioShowMoreOwnProps;

export const RadioShowMore: React.FC<RadioShowMoreProps> = props => {
  const { buttonProps, contentProps } = useShowMoreProps(props);
  const contextState = useRadioStateContext();
  const size = contextState?.size || "md";

  return (
    <>
      <RadioShowMoreContent {...contentProps} />
      <RadioShowMoreButton size={size} {...buttonProps} />
    </>
  );
};

RadioShowMore.displayName = "RadioShowMore";
