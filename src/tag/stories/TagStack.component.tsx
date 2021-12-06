import * as React from "react";

import { Tag, TagProps } from "../../index";

export type TagStackProps = TagProps & {};

export const TagStack: React.FC<TagStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-1">
        <div className="space-x-2">
          <Tag {...props} size="sm" variant="solid">
            Images
          </Tag>
          <Tag {...props} size="sm" variant="subtle">
            Images
          </Tag>
          <Tag {...props} size="sm" variant="outline">
            Images
          </Tag>
        </div>
        <div className="space-x-2">
          <Tag {...props} size="md" variant="solid">
            Images
          </Tag>
          <Tag {...props} size="md" variant="subtle">
            Images
          </Tag>
          <Tag {...props} size="md" variant="outline">
            Images
          </Tag>
        </div>
        <div className="space-x-2">
          <Tag {...props} size="lg" variant="solid">
            Images
          </Tag>
          <Tag {...props} size="lg" variant="subtle">
            Images
          </Tag>
          <Tag {...props} size="lg" variant="outline">
            Images
          </Tag>
        </div>
        <div className="space-x-2">
          <Tag {...props} size="xl" variant="solid">
            Images
          </Tag>
          <Tag {...props} size="xl" variant="subtle">
            Images
          </Tag>
          <Tag {...props} size="xl" variant="outline">
            Images
          </Tag>
        </div>
      </div>
    </div>
  );
};

export default TagStack;
