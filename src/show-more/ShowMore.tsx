import { RenderProp } from "../utils";

import { ShowMoreButton } from "./ShowMoreButton";
import { ShowMoreContent, ShowMoreContentHTMLProps } from "./ShowMoreContent";
import { useShowMoreProps } from "./ShowMoreProps";
import { ShowMoreInitialState, ShowMoreStateReturn } from "./ShowMoreState";

export type ShowMoreOwnProps = ShowMoreContentHTMLProps & {};

export type ShowMoreProps = ShowMoreInitialState &
  ShowMoreOwnProps &
  RenderProp<ShowMoreStateReturn>;

export const ShowMore: React.FC<ShowMoreProps> = props => {
  const { buttonProps, contentProps } = useShowMoreProps(props);

  return (
    <>
      <ShowMoreContent {...contentProps} />
      <ShowMoreButton {...buttonProps} />
    </>
  );
};

ShowMore.displayName = "ShowMore";
