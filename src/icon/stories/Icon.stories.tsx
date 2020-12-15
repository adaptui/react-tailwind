import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import "./icon.css";
import {
  ClockIcon,
  CrossIcon,
  WheelIcon,
  PhotographIcon,
  ArrowNarrowRightIcon,
} from "../../icons";
import { Icon } from "../index";

export default {
  title: "Icon",
  component: Icon,
} as Meta;

export const Default = () => <Icon as="svg" />;
export const ArrowNarrowRight = () => <ArrowNarrowRightIcon />;
export const Clock = () => <ClockIcon />;
export const Cross = () => <CrossIcon />;
export const Photograph = () => <PhotographIcon />;
export const Wheel = () => <WheelIcon />;
