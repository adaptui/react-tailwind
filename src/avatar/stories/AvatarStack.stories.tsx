import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { CircledCheckIcon } from "../../icons";

import js from "./templates/AvatarStackJsx";
import ts from "./templates/AvatarStackTsx";
import { AvatarStack } from "./AvatarStack.component";

type Meta = ComponentMeta<typeof AvatarStack>;
type Story = ComponentStoryObj<typeof AvatarStack>;

export default {
  title: "Primitives/Avatar/Stack",
  component: AvatarStack,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls("avatar", {
    ignore: ["unstable_system", "wrapElement", "as"],
  }),
} as Meta;

export const Default: Story = {};

export const Squared: Story = {
  args: { circular: false },
};

export const Name: Story = {
  args: { name: "Satz Prince" },
};

export const Image: Story = {
  args: { src: "https://i.pravatar.cc/300??img=61" },
};

export const FallbackName: Story = {
  args: {
    src: "https://i.pravatar.c/300??img=61",
    name: "Satz Prince",
  },
};

export const FallbackIcon: Story = {
  args: {
    src: "https://i.pravatar.c/300??img=61",
    icon: <CircledCheckIcon />,
    onError: () => console.log("Provide a valid src url"),
  },
};

export const ActiveStatus: Story = {
  args: {
    src: "https://i.pravatar.cc/300??img=61",
    status: "active",
  },
};

export const ActiveSquaredStatus: Story = {
  args: {
    src: "https://i.pravatar.cc/300??img=61",
    status: "active",
    circular: false,
  },
};

export const SleepStatus: Story = {
  args: {
    src: "https://i.pravatar.cc/300??img=61",
    status: "sleep",
  },
};

export const SleepSquaredStatus: Story = {
  args: {
    src: "https://i.pravatar.cc/300??img=61",
    status: "sleep",
    circular: false,
  },
};

export const AwayStatus: Story = {
  args: {
    src: "https://i.pravatar.cc/300??img=61",
    status: "away",
  },
};

export const AwaySquaredStatus: Story = {
  args: {
    src: "https://i.pravatar.cc/300??img=61",
    status: "away",
    circular: false,
  },
};

export const TypingStatus: Story = {
  args: {
    src: "https://i.pravatar.cc/300??img=61",
    status: "typing",
  },
};

export const TypingSquaredStatus: Story = {
  args: {
    src: "https://i.pravatar.cc/300??img=61",
    status: "typing",
    circular: false,
  },
};

export const ParentBackgroundMatch: Story = {
  args: {
    status: "sleep",
    parentsBackground: ["bg-green-200", "ring-green-200"],
  },

  decorators: [
    Story => {
      return (
        <div className="flex items-center justify-center bg-green-200 w-80 h-80">
          <Story />
        </div>
      );
    },
  ],
};
