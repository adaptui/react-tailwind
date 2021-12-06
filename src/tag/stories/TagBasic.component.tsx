import * as React from "react";

import { Tag, TagProps } from "../../index";

export type TagBasicProps = TagProps & {};

export const TagBasic: React.FC<TagBasicProps> = props => {
  return <Tag {...props}>Images</Tag>;
};

export default TagBasic;
