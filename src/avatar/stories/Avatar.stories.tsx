import React from "react";
import { Story, Meta } from "@storybook/react";
import { useTooltipState, TooltipReference, Tooltip } from "reakit";

import "./avatar.css";
import { ClockIcon } from "../../icons";
import { AvatarBadge } from "../Avatar";
import { Avatar, AvatarProps } from "..";
import { AvatarGroup } from "../AvatarGroup";
import Status, { OfflineDot, OnlineDot } from "../../common/Status";
import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: createControls("avatar", { unions: ["size"] }),
} as Meta;

const TypingAnimation = () => (
  <div className="bg-green-500 border-2 border-white spinner rounded-xl">
    <div className="bg-green-200 bounce1"></div>
    <div className="bg-green-200 bounce2"></div>
    <div className="bg-green-200 bounce3"></div>
  </div>
);

const base = storyTemplate<AvatarProps & { children?: React.ReactNode }>(
  args => <Avatar {...args}>{args.children}</Avatar>,
  {
    size: "md",
  },
);

export const Default = base({});

export const OnError = base({
  src: "https://bit.ly/dan-dabramov",
  onError: e => {
    alert("Error loading image");
    console.log(e);
  },
});

export const WithIcon = base({
  className: "text-white bg-red-400",
  children: <ClockIcon />,
});

export const WithIconAndBadge = base({
  size: "xl",
  children: (
    <>
      <ClockIcon />
      <AvatarBadge position="bottom-right">
        <OfflineDot />
      </AvatarBadge>
    </>
  ),
});

export const NoNameAndSrc = base({});
export const NameButNoSrc = base({ name: "Anurag Hazra" });
export const NoNameAndSrcButFallback = base({ fallback: <ClockIcon /> });
export const NameAndFallback = base({
  name: "Anurag Hazra",
  fallback: <ClockIcon />,
});

export const WithBadge: Story<AvatarProps> = () => {
  const [isTyping, setTyping] = React.useState(false);

  return (
    <>
      <Avatar size="xl" src="https://bit.ly/dan-abramov">
        <AvatarBadge position="bottom-right">
          {isTyping ? <TypingAnimation /> : <OnlineDot />}
        </AvatarBadge>
      </Avatar>

      <br />

      <label>
        isTyping?
        <input
          type="checkbox"
          name="typing"
          onChange={() => setTyping(!isTyping)}
        />
      </label>
    </>
  );
};

export const Statuses: Story<AvatarProps> = () => (
  <AvatarGroup size="xl">
    <Avatar size="xl" src="https://bit.ly/dan-abramov" name="Anurag Hazra">
      <AvatarBadge>
        <Status status="online" />
      </AvatarBadge>
    </Avatar>
    <Avatar size="xl" src="https://bit.ly/dan-abramov" name="Anurag Hazra">
      <AvatarBadge>
        <Status status="offline" />
      </AvatarBadge>
    </Avatar>
    <Avatar size="xl" src="https://bit.ly/dan-abramov" name="Anurag Hazra">
      <AvatarBadge>
        <Status status="sleep" />
      </AvatarBadge>
    </Avatar>
  </AvatarGroup>
);

export const OnlineTooltip: Story<AvatarProps> = () => {
  const tooltip = useTooltipState({ placement: "right-start", gutter: 5 });

  return (
    <Avatar size="xl" name="Anurag Hazra" src="https://bit.ly/dan-abramov">
      <AvatarBadge>
        <Tooltip
          as="div"
          className="px-1 font-sans text-xs text-white bg-green-500 rounded-full"
          {...tooltip}
        >
          Online
        </Tooltip>
        <TooltipReference {...tooltip}>
          <OnlineDot></OnlineDot>
        </TooltipReference>
      </AvatarBadge>
    </Avatar>
  );
};

export const Group: Story<AvatarProps> = () => (
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
