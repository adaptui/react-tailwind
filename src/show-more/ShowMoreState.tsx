import {
  DisclosureActions,
  DisclosureInitialState,
  DisclosureState,
  DisclosureStateReturn,
  useDisclosureState,
} from "@renderlesskit/react";

import { RenderPropType } from "../utils";

export type ShowMoreState = DisclosureState & {
  /**
   * User defined Button element.
   *
   * @default "Show more"
   */
  button?: RenderPropType<DisclosureStateReturn>;
};

export type ShowMoreActions = DisclosureActions & {};

export type ShowMoreStateReturn = ShowMoreState & ShowMoreActions;

export type ShowMoreInitialState = DisclosureInitialState &
  Pick<ShowMoreState, "button">;

export function useShowMoreState(
  props: ShowMoreInitialState = {},
): ShowMoreStateReturn {
  const state = useDisclosureState(props);
  const { button = !state.expanded ? "Show more" : "Show less" } = props;

  return {
    button,
    ...state,
  };
}
