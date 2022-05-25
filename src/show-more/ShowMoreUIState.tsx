import { DisclosureState } from "ariakit";

import { RenderProp } from "../utils";

import { ShowMoreUIProps } from "./ShowMoreProps";

export const useShowMoreUIState = ({
  state,
  ...props
}: ShowMoreUIStateProps): ShowMoreUIState => {
  const { button = !state.visible ? "Show more" : "Show less" } = props;

  return { button };
};

export type ShowMoreUIState = {
  /**
   * User defined Button element.
   *
   * @default "Show more"
   */
  button?: RenderProp<ShowMoreUIProps> | string;
};

export type ShowMoreUIStateProps = Pick<ShowMoreUIState, "button"> & {
  state: DisclosureState;
};
