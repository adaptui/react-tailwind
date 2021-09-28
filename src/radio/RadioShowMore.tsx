import * as React from "react";

import { RenderProp, RenderPropType } from "../utils/types";

import { RadioGroupInitialState } from "./RadioGroupState";
import { RadioShowMoreButton } from "./RadioShowMoreButton";
import { RadioShowMoreContent } from "./RadioShowMoreContent";
import {
  RadioShowMoreInitialState,
  RadioShowMoreStateReturn,
  useRadioShowMoreProps,
} from "./RadioShowMoreState";

export type RadioShowMoreOwnProps = RenderProp<RadioShowMoreStateReturn> &
  Pick<RadioGroupInitialState, "size"> & {
    /**
     * User defined Button element.
     *
     * @default "Show more"
     */
    button?: RenderPropType<RadioShowMoreStateReturn>;
  };

export type RadioShowMoreProps = RadioShowMoreInitialState &
  RadioShowMoreOwnProps;

export const RadioShowMore: React.FC<RadioShowMoreProps> = props => {
  const { buttonProps, contentProps, size } = useRadioShowMoreProps(props);
  console.log("%cbuttonProps", "color: #eeff00", buttonProps);

  return (
    <>
      <RadioShowMoreContent {...contentProps} />
      <RadioShowMoreButton size={size} {...buttonProps} />
    </>
  );
};

RadioShowMore.displayName = "RadioShowMore";
