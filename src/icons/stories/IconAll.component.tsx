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
  EqualsIcon,
  ErrorIcon,
  IconProps,
  SelectIcon,
  SleepStatusIcon,
  SlotIcon,
  TimelessIcon,
  TypingLargeStatusIcon,
  TypingSmallStatusIcon,
  UserIcon,
} from "../../index";

export type IconAllProps = IconProps & {};

export const IconAll: React.FC<IconAllProps> = props => {
  return (
    <div className="inline-grid grid-cols-6 place-items-center gap-4 text-5xl">
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
      <EqualsIcon />
      <ErrorIcon />
      <SelectIcon />
      <TimelessIcon />
    </div>
  );
};

export default IconAll;
