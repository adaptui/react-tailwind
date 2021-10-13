import * as React from "react";

import {
  CaretDownIcon,
  CaretRightIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  CloseIcon,
  IndeterminateIcon,
} from "../../index";

export type IconProps = {};

export const Icon: React.FC<IconProps> = props => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="space-x-4 text-5xl">
        <CaretDownIcon />
        <CaretRightIcon />
        <CheckIcon />
        <CheckCircleIcon />
        <ClockIcon />
        <CloseIcon />
        <IndeterminateIcon />
      </div>
    </div>
  );
};

export default Icon;
