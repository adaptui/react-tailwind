import * as React from "react";

import {
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CheckIcon,
  CircledCheckIcon,
  ClockIcon,
  CloseIcon,
  DashIcon,
  UserIcon,
} from "../../index";

export type IconProps = {};

export const Icon: React.FC<IconProps> = props => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="space-x-4 text-5xl">
        <CaretDownIcon />
        <CaretLeftIcon />
        <CaretRightIcon />
        <CheckIcon />
        <CircledCheckIcon />
        <ClockIcon />
        <CloseIcon />
        <DashIcon />
        <UserIcon />
      </div>
    </div>
  );
};

export default Icon;
