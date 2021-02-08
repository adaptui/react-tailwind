import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  Alert,
  AlertIcon,
  AlertProps,
  AlertTitle,
  AlertDescription,
  AlertActions,
} from "../index";
import { CloseIcon } from "../../icons";
import { AlertActionButton } from "../Alert";
import { IconButton } from "../../button";
import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    status: createUnionControl([
      "info",
      "success",
      "warning",
      "error",
      "offline",
    ]),
    title: { defaultValue: "" },
    description: { defaultValue: "" },
    actionButtonLabel: { defaultValue: "" },
  },
} as Meta;

const base = storyTemplate<AlertProps>(args => {
  const status = args?.status || "info";

  return <Alert status={status} {...args} />;
});

export const Default = base({
  status: "info",
  actionButtonLabel: "Reach Out",
  title: "Your browser is outdated.",
  description: "Your experience may be degraded.",
});

export const Example1 = storyTemplate<AlertProps>(args => {
  const status = args?.status || "info";
  const buttonBg = {
    info: "bg-blue-200",
    success: "bg-green-200",
    warning: "bg-orange-200",
    error: "bg-red-200",
    offline: "bg-purple-200",
  };

  return (
    <Alert {...args} status={status} className="flex justify-between">
      <AlertTitle>
        <AlertIcon />
        Build failed due to timeout
      </AlertTitle>
      <AlertDescription>
        Build container is stuck in building state for 2700000ms
      </AlertDescription>
      <AlertActions>
        <AlertActionButton as="div">Reach Out</AlertActionButton>
        <IconButton
          aria-label="close"
          className={`text-gray-800 h-5 px-0 bg-transparent min-w-5 ml-2 hover:${buttonBg[status]}`}
        >
          <CloseIcon />
        </IconButton>
      </AlertActions>
    </Alert>
  );
})({});
