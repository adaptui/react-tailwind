import React from "react";
import { FaCog } from "react-icons/fa";
import { Meta } from "@storybook/react";

import { Icon } from "../index";
import { ClockIcon, CloseIcon, CaretRightIcon } from "../../icons";
import { createControls } from "../../../.storybook/storybookUtils";

export default {
  title: "Primitives/Icon",
  component: Icon,
  argTypes: createControls("icon", {
    ignore: ["unstable_system", "wrapElement", "as"],
  }),
  parameters: {
    options: {
      showPanel: false,
    },
    layout: "centered",
  },
} as Meta;

export const Default = () => <Icon />;

export const WithPath = () => (
  <Icon viewBox="0 0 200 200" className="text-green-500">
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

export const ReactIconsCog = () => <Icon as={FaCog} />;

export const ReactIconsStyled = () => (
  <Icon as={FaCog} className="text-blue-500" />
);

export const Icons = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="space-x-4 text-5xl">
        <CaretRightIcon />
        <ClockIcon />
        <CloseIcon />
      </div>
    </div>
  );
};
