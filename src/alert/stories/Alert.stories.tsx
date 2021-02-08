import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import {
  Alert,
  AlertIcon,
  AlertProps,
  AlertTitle,
  AlertDescription,
  AlertActions,
} from "../index";
import { CloseIcon } from "../../icons";
import { IconButton } from "../../button";
import { AlertActionButton } from "../Alert";
import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { cx } from "@renderlesskit/react";

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

export const Customization = storyTemplate<AlertProps>(args => {
  const status = args?.status || "info";
  return (
    <Alert {...args} status={status} className="flex justify-between">
      {({ status, styles }) => (
        <>
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
              className={cx(
                styles.iconButton.base,
                styles.status[status].iconButton,
              )}
            >
              <CloseIcon />
            </IconButton>
          </AlertActions>
        </>
      )}
    </Alert>
  );
})({});
