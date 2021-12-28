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
  ErrorIcon,
  SelectIcon,
  SleepStatusIcon,
  SlotIcon,
  TimelessIcon,
  TypingLargeStatusIcon,
  TypingSmallStatusIcon,
  UserIcon,
} from "../../index";

export type IconProps = {};

export const Icon: React.FC<IconProps> = props => {
  return (
    <div className="inline-grid grid-cols-6 gap-4 text-5xl place-items-center">
      <SlotIcon />
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
      <ErrorIcon />
      <SelectIcon />
      <TimelessIcon />
    </div>
  );
};

export default Icon;
