import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { CircledCheckIcon } from "../../icons";

import js from "./templates/AvatarBasicJsx";
import ts from "./templates/AvatarBasicTsx";
import { AvatarBasic } from "./AvatarBasic.component";

type Meta = ComponentMeta<typeof AvatarBasic>;
type Story = ComponentStoryObj<typeof AvatarBasic>;

export default {
  title: "Primitives/Avatar/Basic",
  component: AvatarBasic,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls("avatar", {
    ignore: ["unstable_system", "wrapElement", "as"],
  }),
} as Meta;

export const Default: Story = {
  args: { size: "xl" },
};

export const Squared: Story = {
  args: { size: "xl", circular: false },
};

export const Name: Story = {
  args: { size: "xl", name: "Satz Prince" },
};

export const Image: Story = {
  args: { size: "xl", src: "https://i.pravatar.cc/300??img=61" },
};

export const FallbackName: Story = {
  args: {
    size: "xl",
    src: "https://i.pravatar.c/300??img=61",
    name: "Satz Prince",
  },
};

export const FallbackIcon: Story = {
  args: {
    size: "xl",
    src: "https://i.pravatar.c/300??img=61",
    icon: <CircledCheckIcon />,
    onError: () => console.log("Provide a valid src url"),
  },
};

export const ActiveStatus: Story = {
  args: {
    size: "xl",
    src: "https://i.pravatar.cc/300??img=61",
    status: "active",
  },
};

export const ActiveSquaredStatus: Story = {
  args: {
    size: "xl",
    src: "https://i.pravatar.cc/300??img=61",
    status: "active",
    circular: false,
  },
};

export const SleepStatus: Story = {
  args: {
    size: "xl",
    src: "https://i.pravatar.cc/300??img=61",
    status: "sleep",
  },
};

export const SleepSquaredStatus: Story = {
  args: {
    size: "xl",
    src: "https://i.pravatar.cc/300??img=61",
    status: "sleep",
    circular: false,
  },
};

export const AwayStatus: Story = {
  args: {
    size: "xl",
    src: "https://i.pravatar.cc/300??img=61",
    status: "away",
  },
};

export const AwaySquaredStatus: Story = {
  args: {
    size: "xl",
    src: "https://i.pravatar.cc/300??img=61",
    status: "away",
    circular: false,
  },
};

export const TypingStatus: Story = {
  args: {
    size: "xl",
    src: "https://i.pravatar.cc/300??img=61",
    status: "typing",
  },
};

export const TypingSquaredStatus: Story = {
  args: {
    size: "xl",
    src: "https://i.pravatar.cc/300??img=61",
    status: "typing",
    circular: false,
  },
};

export const OrgStatus: Story = {
  args: {
    size: "xl",
    src: "https://i.pravatar.cc/300??img=61",
    status: "org",
  },
};

export const OrgSquaredStatus: Story = {
  args: {
    size: "xl",
    src: "https://i.pravatar.cc/300??img=61",
    status: "org",
    circular: false,
  },
};

export const ParentBackgroundMatch: Story = {
  args: {
    size: "xl",
    status: "active",
    parentsBackground: ["bg-blue-200", "ring-blue-200"],
  },

  decorators: [
    Story => {
      return (
        <div className="flex h-80 w-80 items-center justify-center bg-blue-200">
          <Story />
        </div>
      );
    },
  ],
};

export const ExtraSmall: Story = { args: { size: "xs" } };
export const Small: Story = { args: { size: "sm" } };
export const Medium: Story = { args: { size: "md" } };
export const Large: Story = { args: { size: "lg" } };
export const ExtraLarge: Story = { args: { size: "xl" } };
export const ExtraExtraLarge: Story = { args: { size: "2xl" } };
export const ExtraExtraExtraLarge: Story = { args: { size: "3xl" } };
