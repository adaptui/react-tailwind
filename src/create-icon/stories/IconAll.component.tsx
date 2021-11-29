import * as React from "react";

import {
  ActiveStatusIcon,
  ArrowIcon,
  AwayStatusIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CheckIcon,
  CircledCheckIcon,
  ClockIcon,
  CloseIcon,
  DashIcon,
  EqualsIcon,
  SleepStatusIcon,
  TypingLargeStatusIcon,
  TypingSmallStatusIcon,
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
        <TypingSmallStatusIcon className="inline-block w-12" />
        <TypingLargeStatusIcon className="inline-block w-12" />
        <ArrowIcon className="inline-block w-12 h-12" />
        <EqualsIcon />
      </div>
    </div>
  );
};

export default Icon;
