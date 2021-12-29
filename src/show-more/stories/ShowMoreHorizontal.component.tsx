import * as React from "react";

import { ShowMore, ShowMoreProps } from "../../index";

export const ShowMoreHorizontal: React.FC<ShowMoreProps> = props => {
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

export default ShowMoreHorizontal;
