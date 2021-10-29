import * as React from "react";

import {
  ActiveStatusIcon,
  AwayStatusIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CheckIcon,
  CircledCheckIcon,
  ClockIcon,
  CloseIcon,
  DashIcon,
  SleepStatusIcon,
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
        <ActiveStatusIcon />
        <SleepStatusIcon />
        <AwayStatusIcon />
      </div>
    </div>
  );
};

export default Icon;
