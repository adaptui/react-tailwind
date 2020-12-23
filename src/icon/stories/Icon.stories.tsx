import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { FaBeer, FaCog } from "react-icons/fa";

import "./icon.css";
import {
  BoltIcon,
  ClockIcon,
  CrossIcon,
  WheelIcon,
  PhotographIcon,
  InfoCircleIcon,
  CheckCircleIcon,
  ArrowNarrowRightIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from "../../icons";
import { Icon } from "../index";

export default {
  title: "Icon",
  component: Icon,
} as Meta;

export const Default = () => <Icon />;
export const IconComponent = () => (
  <Icon viewBox="0 0 200 200" className="text-red-500">
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);
export const ArrowNarrowRight = () => (
  <ArrowNarrowRightIcon className="w-6 h-6" />
);
export const Clock = () => <ClockIcon className="w-8 h-8" />;
export const Cross = () => <CrossIcon />;
export const Photograph = () => <PhotographIcon />;
export const Wheel = () => <WheelIcon as={FaCog} />;
export const ReactIcons = () => (
  <Icon as={FaBeer} className="w-8 h-8 text-red-500" />
);
export const Bolt = () => <BoltIcon />;
export const CheckCircle = () => <CheckCircleIcon />;
export const ExclamationCircle = () => <ExclamationCircleIcon />;
export const ExclamationTriangle = () => <ExclamationTriangleIcon />;
export const InfoCircle = () => <InfoCircleIcon />;
