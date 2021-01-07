import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import "./Alert.css";
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  AlertProps,
} from "../index";
import { Box } from "../../box";
import { CloseIcon } from "../../icons";
import { AlertActionButton } from "../Alert";
import { Button, ButtonIcon } from "../../button";

export default {
  title: "Alert",
  component: Alert,
} as Meta;

const Base: Story<AlertProps> = args => {
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
      <Box className="items-center inherit">
        <AlertIcon />
        <AlertTitle>
          We’re here to help you through these tough times.
        </AlertTitle>
        <AlertDescription>Your experience may be degrated</AlertDescription>
      </Box>
      <Box className="items-center inherit">
        <AlertActionButton>Reach Out</AlertActionButton>
        <Button
          aria-label="close"
          className={`h-5 px-0 bg-transparent min-w-5 ml-2 hover:${buttonBg[status]}`}
        >
          <ButtonIcon className="text-gray-800 inherit">
            <CloseIcon />
          </ButtonIcon>
        </Button>
      </Box>
    </Alert>
  );
};

export const Default = Base.bind({});
Default.args = { status: "info" };
