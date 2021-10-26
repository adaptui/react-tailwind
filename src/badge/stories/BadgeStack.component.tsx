import * as React from "react";

import { Badge, BadgeProps } from "../../index";

export type BadgeStackProps = BadgeProps & {};

export const BadgeStack: React.FC<BadgeStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-1">
        <div className="space-x-2">
          <Badge {...props} size="sm" variant="solid" themeColor="default">
            Beta
          </Badge>
          <Badge {...props} size="sm" variant="subtle" themeColor="default">
            Beta
          </Badge>
          <Badge {...props} size="sm" variant="outline" themeColor="default">
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge {...props} size="sm" variant="solid" themeColor="primary">
            Beta
          </Badge>
          <Badge {...props} size="sm" variant="subtle" themeColor="primary">
            Beta
          </Badge>
          <Badge {...props} size="sm" variant="outline" themeColor="primary">
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge {...props} size="sm" variant="solid" themeColor="secondary">
            Beta
          </Badge>
          <Badge {...props} size="sm" variant="subtle" themeColor="secondary">
            Beta
          </Badge>
          <Badge {...props} size="sm" variant="outline" themeColor="secondary">
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge {...props} size="sm" variant="solid" themeColor="success">
            Beta
          </Badge>
          <Badge {...props} size="sm" variant="subtle" themeColor="success">
            Beta
          </Badge>
          <Badge {...props} size="sm" variant="outline" themeColor="success">
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge {...props} size="sm" variant="solid" themeColor="danger">
            Beta
          </Badge>
          <Badge {...props} size="sm" variant="subtle" themeColor="danger">
            Beta
          </Badge>
          <Badge {...props} size="sm" variant="outline" themeColor="danger">
            Beta
          </Badge>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <div className="space-x-2">
          <Badge {...props} size="md" variant="solid" themeColor="default">
            Beta
          </Badge>
          <Badge {...props} size="md" variant="subtle" themeColor="default">
            Beta
          </Badge>
          <Badge {...props} size="md" variant="outline" themeColor="default">
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge {...props} size="md" variant="solid" themeColor="primary">
            Beta
          </Badge>
          <Badge {...props} size="md" variant="subtle" themeColor="primary">
            Beta
          </Badge>
          <Badge {...props} size="md" variant="outline" themeColor="primary">
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge {...props} size="md" variant="solid" themeColor="secondary">
            Beta
          </Badge>
          <Badge {...props} size="md" variant="subtle" themeColor="secondary">
            Beta
          </Badge>
          <Badge {...props} size="md" variant="outline" themeColor="secondary">
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge {...props} size="md" variant="solid" themeColor="success">
            Beta
          </Badge>
          <Badge {...props} size="md" variant="subtle" themeColor="success">
            Beta
          </Badge>
          <Badge {...props} size="md" variant="outline" themeColor="success">
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge {...props} size="md" variant="solid" themeColor="danger">
            Beta
          </Badge>
          <Badge {...props} size="md" variant="subtle" themeColor="danger">
            Beta
          </Badge>
          <Badge {...props} size="md" variant="outline" themeColor="danger">
            Beta
          </Badge>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <div className="space-x-2">
          <Badge {...props} size="lg" variant="solid" themeColor="default">
            Beta
          </Badge>
          <Badge {...props} size="lg" variant="subtle" themeColor="default">
            Beta
          </Badge>
          <Badge {...props} size="lg" variant="outline" themeColor="default">
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge {...props} size="lg" variant="solid" themeColor="primary">
            Beta
          </Badge>
          <Badge {...props} size="lg" variant="subtle" themeColor="primary">
            Beta
          </Badge>
          <Badge {...props} size="lg" variant="outline" themeColor="primary">
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge {...props} size="lg" variant="solid" themeColor="secondary">
            Beta
          </Badge>
          <Badge {...props} size="lg" variant="subtle" themeColor="secondary">
            Beta
          </Badge>
          <Badge {...props} size="lg" variant="outline" themeColor="secondary">
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge {...props} size="lg" variant="solid" themeColor="success">
            Beta
          </Badge>
          <Badge {...props} size="lg" variant="subtle" themeColor="success">
            Beta
          </Badge>
          <Badge {...props} size="lg" variant="outline" themeColor="success">
            Beta
          </Badge>
        </div>
        <div className="space-x-2">
          <Badge {...props} size="lg" variant="solid" themeColor="danger">
            Beta
          </Badge>
          <Badge {...props} size="lg" variant="subtle" themeColor="danger">
            Beta
          </Badge>
          <Badge {...props} size="lg" variant="outline" themeColor="danger">
            Beta
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default BadgeStack;
