import * as React from "react";

import { Badge, BadgeProps } from "../../index";

export type BadgeStackProps = Pick<BadgeProps, "prefix">;

export const BadgeStack: React.FC<BadgeStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-1">
        <div className="space-x-2">
          <Badge size="sm" variant="solid" themeColor="base" {...props}>
            Beta
          </Badge>
          <Badge size="sm" variant="subtle" themeColor="base" {...props}>
            Beta
          </Badge>
          <Badge size="sm" variant="outline" themeColor="base" {...props}>
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge size="sm" variant="solid" themeColor="primary" {...props}>
            Beta
          </Badge>
          <Badge size="sm" variant="subtle" themeColor="primary" {...props}>
            Beta
          </Badge>
          <Badge size="sm" variant="outline" themeColor="primary" {...props}>
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge size="sm" variant="solid" themeColor="secondary" {...props}>
            Beta
          </Badge>
          <Badge size="sm" variant="subtle" themeColor="secondary" {...props}>
            Beta
          </Badge>
          <Badge size="sm" variant="outline" themeColor="secondary" {...props}>
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge size="sm" variant="solid" themeColor="success" {...props}>
            Beta
          </Badge>
          <Badge size="sm" variant="subtle" themeColor="success" {...props}>
            Beta
          </Badge>
          <Badge size="sm" variant="outline" themeColor="success" {...props}>
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge size="sm" variant="solid" themeColor="danger" {...props}>
            Beta
          </Badge>
          <Badge size="sm" variant="subtle" themeColor="danger" {...props}>
            Beta
          </Badge>
          <Badge size="sm" variant="outline" themeColor="danger" {...props}>
            Beta
          </Badge>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <div className="space-x-2">
          <Badge size="md" variant="solid" themeColor="base" {...props}>
            Beta
          </Badge>
          <Badge size="md" variant="subtle" themeColor="base" {...props}>
            Beta
          </Badge>
          <Badge size="md" variant="outline" themeColor="base" {...props}>
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge size="md" variant="solid" themeColor="primary" {...props}>
            Beta
          </Badge>
          <Badge size="md" variant="subtle" themeColor="primary" {...props}>
            Beta
          </Badge>
          <Badge size="md" variant="outline" themeColor="primary" {...props}>
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge size="md" variant="solid" themeColor="secondary" {...props}>
            Beta
          </Badge>
          <Badge size="md" variant="subtle" themeColor="secondary" {...props}>
            Beta
          </Badge>
          <Badge size="md" variant="outline" themeColor="secondary" {...props}>
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge size="md" variant="solid" themeColor="success" {...props}>
            Beta
          </Badge>
          <Badge size="md" variant="subtle" themeColor="success" {...props}>
            Beta
          </Badge>
          <Badge size="md" variant="outline" themeColor="success" {...props}>
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge size="md" variant="solid" themeColor="danger" {...props}>
            Beta
          </Badge>
          <Badge size="md" variant="subtle" themeColor="danger" {...props}>
            Beta
          </Badge>
          <Badge size="md" variant="outline" themeColor="danger" {...props}>
            Beta
          </Badge>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <div className="space-x-2">
          <Badge size="lg" variant="solid" themeColor="base" {...props}>
            Beta
          </Badge>
          <Badge size="lg" variant="subtle" themeColor="base" {...props}>
            Beta
          </Badge>
          <Badge size="lg" variant="outline" themeColor="base" {...props}>
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge size="lg" variant="solid" themeColor="primary" {...props}>
            Beta
          </Badge>
          <Badge size="lg" variant="subtle" themeColor="primary" {...props}>
            Beta
          </Badge>
          <Badge size="lg" variant="outline" themeColor="primary" {...props}>
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge size="lg" variant="solid" themeColor="secondary" {...props}>
            Beta
          </Badge>
          <Badge size="lg" variant="subtle" themeColor="secondary" {...props}>
            Beta
          </Badge>
          <Badge size="lg" variant="outline" themeColor="secondary" {...props}>
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge size="lg" variant="solid" themeColor="success" {...props}>
            Beta
          </Badge>
          <Badge size="lg" variant="subtle" themeColor="success" {...props}>
            Beta
          </Badge>
          <Badge size="lg" variant="outline" themeColor="success" {...props}>
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge size="lg" variant="solid" themeColor="danger" {...props}>
            Beta
          </Badge>
          <Badge size="lg" variant="subtle" themeColor="danger" {...props}>
            Beta
          </Badge>
          <Badge size="lg" variant="outline" themeColor="danger" {...props}>
            Beta
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default BadgeStack;
