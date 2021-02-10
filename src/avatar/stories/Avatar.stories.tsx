import React from "react";
import { Meta } from "@storybook/react";

import { PhotographIcon } from "../../icons";
import { Avatar, AvatarProps } from "../index";
import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { AvatarGroup } from "../AvatarGroup";

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: createControls("avatar", { unions: ["size"] }),
} as Meta;

const base = storyTemplate<AvatarProps>(
  args => <Avatar {...args}>{args.children}</Avatar>,
  { size: "xl" },
);

export const SrcAndName = base({
  src: "https://bit.ly/ryan-florence",
  name: "Ryan Florence",
});
export const NoSrcAndName = base({ name: "John Conner" });
export const NoNameAndNoSrc = base({});
export const NoNameNoSrcButFallback = base({
  fallback: <PhotographIcon />,
});
export const InvalidSrc = base({
  src: "https://bit.ly/dan-abramav",
  name: "Dan Abramov",
  fallback: <PhotographIcon />,
  onError: () => alert("Provide a valid src url"),
});

export const OnlineBadge = base({
  src: "https://bit.ly/ryan-florence",
  name: "Ryan Florence",
  status: "online",
});
export const SleepBadge = base({
  src: "https://bit.ly/ryan-florence",
  name: "Ryan Florence",
  status: "sleep",
});
export const TypingBadge = base({
  src: "https://bit.ly/ryan-florence",
  name: "Ryan Florence",
  status: "typing",
});

export const BadgeExample = storyTemplate<AvatarProps>(
  args => {
    const [isTyping, setTyping] = React.useState(false);

    return (
      <>
        <Avatar
          status={isTyping ? "typing" : "online"}
          className="flex"
          {...args}
        />
        <label className="block mt-4">
          isTyping?
          <input
            type="checkbox"
            name="typing"
            className="ml-2"
            onChange={() => setTyping(!isTyping)}
          />
        </label>
      </>
    );
  },
  { size: "xl", src: "https://bit.ly/dan-abramov" },
)({});

export const Group = storyTemplate<AvatarProps>(
  args => (
    <AvatarGroup {...args}>
      <Avatar
        src="https://bit.ly/dan-abramov"
        name="Dan Abramov"
        status="online"
      />
      <Avatar
        src="https://bit.ly/dan-abramov"
        name="Dan Abramov"
        status="sleep"
      />
      <Avatar
        src="https://bit.ly/dan-abramov"
        name="Dan Abramov"
        status="typing"
      />
    </AvatarGroup>
  ),
  { size: "xl" },
)({});

export const GroupWithLimit = () => (
  <>
    {["xs", "sm", "md", "lg"].map((size, i) => {
      return (
        <>
          <br />
          <AvatarGroup limit={i + 1} size={size as any}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
        </>
      );
    })}
  </>
);
