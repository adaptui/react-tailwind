import * as React from "react";

import { Spinner, SpinnerProps } from "../../index";

export type SpinnerStackProps = SpinnerProps & {};

export const SpinnerStack: React.FC<SpinnerProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-1">
        <div className="space-x-2">
          <Spinner size="xs" themeColor="base" {...props} />
          <Spinner size="xs" themeColor="primary" {...props} />
          <Spinner size="xs" themeColor="secondary" {...props} />
          <Spinner size="xs" themeColor="success" {...props} />
          <Spinner size="xs" themeColor="danger" {...props} />
          <Spinner
            size="xs"
            themeColor="current"
            className="text-2xl text-yellow-800"
            {...props}
          />
        </div>
        <div className="space-x-2">
          <Spinner size="sm" themeColor="base" {...props} />
          <Spinner size="sm" themeColor="primary" {...props} />
          <Spinner size="sm" themeColor="secondary" {...props} />
          <Spinner size="sm" themeColor="success" {...props} />
          <Spinner size="sm" themeColor="danger" {...props} />
          <Spinner
            size="sm"
            themeColor="current"
            className="text-2xl text-yellow-800"
          />
        </div>
        <div className="space-x-2">
          <Spinner size="md" themeColor="base" {...props} />
          <Spinner size="md" themeColor="primary" {...props} />
          <Spinner size="md" themeColor="secondary" {...props} />
          <Spinner size="md" themeColor="success" {...props} />
          <Spinner size="md" themeColor="danger" {...props} />
          <Spinner
            size="md"
            themeColor="current"
            className="text-2xl text-yellow-800"
          />
        </div>
        <div className="space-x-2">
          <Spinner size="lg" themeColor="base" {...props} />
          <Spinner size="lg" themeColor="primary" {...props} />
          <Spinner size="lg" themeColor="secondary" {...props} />
          <Spinner size="lg" themeColor="success" {...props} />
          <Spinner size="lg" themeColor="danger" {...props} />
          <Spinner
            size="lg"
            themeColor="current"
            className="text-2xl text-yellow-800"
          />
        </div>
        <div className="space-x-2">
          <Spinner
            size="em"
            themeColor="base"
            className="text-2xl"
            {...props}
          />
          <Spinner
            size="em"
            themeColor="primary"
            className="text-2xl"
            {...props}
          />
          <Spinner
            size="em"
            themeColor="secondary"
            className="text-2xl"
            {...props}
          />
          <Spinner
            size="em"
            themeColor="success"
            className="text-2xl"
            {...props}
          />
          <Spinner
            size="em"
            themeColor="danger"
            className="text-2xl"
            {...props}
          />
          <Spinner
            size="em"
            themeColor="current"
            className="text-2xl text-yellow-800"
            {...props}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-1">
        <div className="space-x-2">
          <Spinner size="xs" themeColor="base" track="visible" {...props} />
          <Spinner size="xs" themeColor="primary" track="visible" {...props} />
          <Spinner
            size="xs"
            themeColor="secondary"
            track="visible"
            {...props}
          />
          <Spinner size="xs" themeColor="success" track="visible" {...props} />
          <Spinner size="xs" themeColor="danger" track="visible" {...props} />
          <Spinner
            size="xs"
            themeColor="current"
            className="border-b-gray-400 border-l-gray-400 text-2xl text-yellow-800"
            track="visible"
            {...props}
          />
        </div>
        <div className="space-x-2">
          <Spinner size="sm" themeColor="base" track="visible" {...props} />
          <Spinner size="sm" themeColor="primary" track="visible" {...props} />
          <Spinner
            size="sm"
            themeColor="secondary"
            track="visible"
            {...props}
          />
          <Spinner size="sm" themeColor="success" track="visible" {...props} />
          <Spinner size="sm" themeColor="danger" track="visible" {...props} />
          <Spinner
            size="sm"
            themeColor="current"
            className="border-b-gray-400 border-l-gray-400 text-2xl text-yellow-800"
          />
        </div>
        <div className="space-x-2">
          <Spinner size="md" themeColor="base" track="visible" {...props} />
          <Spinner size="md" themeColor="primary" track="visible" {...props} />
          <Spinner
            size="md"
            themeColor="secondary"
            track="visible"
            {...props}
          />
          <Spinner size="md" themeColor="success" track="visible" {...props} />
          <Spinner size="md" themeColor="danger" track="visible" {...props} />
          <Spinner
            size="md"
            themeColor="current"
            className="border-b-gray-400 border-l-gray-400 text-2xl text-yellow-800"
          />
        </div>
        <div className="space-x-2">
          <Spinner size="lg" themeColor="base" track="visible" {...props} />
          <Spinner size="lg" themeColor="primary" track="visible" {...props} />
          <Spinner
            size="lg"
            themeColor="secondary"
            track="visible"
            {...props}
          />
          <Spinner size="lg" themeColor="success" track="visible" {...props} />
          <Spinner size="lg" themeColor="danger" track="visible" {...props} />
          <Spinner
            size="lg"
            themeColor="current"
            className="border-b-gray-400 border-l-gray-400 text-2xl text-yellow-800"
          />
        </div>
        <div className="space-x-2">
          <Spinner
            size="em"
            themeColor="base"
            className="text-2xl"
            track="visible"
            {...props}
          />
          <Spinner
            size="em"
            themeColor="primary"
            className="text-2xl"
            track="visible"
            {...props}
          />
          <Spinner
            size="em"
            themeColor="secondary"
            className="text-2xl"
            track="visible"
            {...props}
          />
          <Spinner
            size="em"
            themeColor="success"
            className="text-2xl"
            track="visible"
            {...props}
          />
          <Spinner
            size="em"
            themeColor="danger"
            className="text-2xl"
            track="visible"
            {...props}
          />
          <Spinner
            size="em"
            themeColor="current"
            className="border-b-gray-400 border-l-gray-400 text-2xl text-yellow-800"
            track="visible"
            {...props}
          />
        </div>
      </div>
    </div>
  );
};

export default SpinnerStack;
