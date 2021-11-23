import * as React from "react";

import { ShowMore, ShowMoreProps } from "../ShowMore";

export const ShowMoreVertical: React.FC<ShowMoreProps> = props => {
  return (
    <div className="overflow-y-scroll h-80">
      <div className="flex flex-col items-start space-y-2">
        <div>Apple</div>
        <div>Orange</div>
        <div>Watermelon</div>
        <div>Grapes</div>
        <div>Banana</div>
        <div>Blueberry</div>
        <ShowMore
          className="flex flex-col space-y-2 overflow-hidden data-enter:animate-expandHeight data-leave:animate-collapseHeight"
          {...props}
        >
          <div>Sapota</div>
          <div>Papaya</div>
          <div>Avocado</div>
          <div>Strawberry</div>
          <div>Cherry</div>
          <div>Fig</div>
          <div>Guava</div>
          <div>Mango</div>
        </ShowMore>
      </div>
    </div>
  );
};

export default ShowMoreVertical;

export const ShowMoreHorizontalComponent: React.FC<ShowMoreProps> = props => {
  return (
    <div className="overflow-x-scroll w-96">
      <div className="flex flex-row items-center h-10 space-x-2 w-fit">
        <div>Apple</div>
        <div>Orange</div>
        <div>Watermelon</div>
        <ShowMore className="flex flex-row space-x-2" {...props}>
          <div>Sapota</div>
          <div>Papaya</div>
          <div>Avocado</div>
          <div>Strawberry</div>
          <div>Cherry</div>
          <div>Fig</div>
          <div>Guava</div>
          <div>Mango</div>
        </ShowMore>
      </div>
    </div>
  );
};
