import React from "react";
import { Meta } from "@storybook/react";

import {
  storyTemplate,
  createUnionControl,
} from "../../../.storybook/storybookUtils";
import { Alert, AlertProps } from "../index";

export default {
  title: "Primitives/Alert",
  component: Alert,
  args: {
    title: "",
    description: "",
    actionButtonLabel: "",
  },
  argTypes: {
    status: createUnionControl([
      "neutral",
      "info",
      "success",
      "warning",
      "error",
    ]),
  },
} as Meta;

const base = storyTemplate<AlertProps>(
  args => {
    const status = args?.status || "info";

    return <Alert status={status} {...args} />;
  },
  {
    status: "info",
    title: "Your browser is outdated.",
    description: "",
    actionButtonLabel: "",
    closable: false,
  },
);

export const Default = base({});
export const Closable = base({ closable: true });
export const ActionButtonLabel = base({
  actionButtonLabel: "Reach Out",
  closable: true,
});
export const WithDescription = base({
  description: "Your experience may be degraded.",
  actionButtonLabel: "Reach Out",
  closable: true,
});
