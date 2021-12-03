import { cx } from "@renderlesskit/react";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { TagOptions, useTheme } from "../..";
import { ClockIcon, CloseIcon } from "../../icons";

import js from "./templates/TagStackJsx";
import ts from "./templates/TagStackTsx";
import { TagStack } from "./TagStack.component";

type Meta = ComponentMeta<typeof TagStack>;
type Story = ComponentStoryObj<typeof TagStack>;

export default {
  title: "Primitives/Tag/Stack",
  component: TagStack,
  argTypes: createControls(undefined, {
    ignore: [
      "unstable_system",
      "unstable_clickOnEnter",
      "unstable_clickOnSpace",
      "wrapElement",
      "focusable",
      "as",
    ],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {};

export const PrefixStack: Story = {
  ...Default,
  args: { prefix: <ClockIcon /> },
};

const CloseButton = (options: TagOptions) => {
  const theme = useTheme("tag");
  const { size = "md" } = options;
  const closableStyles = cx(theme.size.closable[size], "leading-[0]");

  return (
    <button className={closableStyles}>
      <CloseIcon />
    </button>
  );
};

export const ClosableStack: Story = {
  ...Default,
  args: {
    closable: <CloseButton />,
  },
};
