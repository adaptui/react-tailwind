import React from "react";
import { Story, Meta } from "@storybook/react";
import { useTooltipState, TooltipReference, Tooltip } from "reakit";

import "./avatar.css";
import { Avatar, AvatarProps } from "..";
import { ClockIcon } from "../../icons";
import { AvatarBadge } from "../Avatar";
import { AvatarGroup } from "../AvatarGroup";
import Status, { OfflineDot, OnlineDot } from "../../common/Status";

export default {
  title: "Avatar",
  component: Avatar,
} as Meta;

const TypingAnimation = () => (
  <div className="spinner rounded-xl bg-green-500 border-2 border-white">
    <div className="bounce1 bg-green-200"></div>
    <div className="bounce2 bg-green-200"></div>
    <div className="bounce3 bg-green-200"></div>
  </div>
);

const Base: Story<AvatarProps> = args => (
  <Avatar
    src="https://bit.ly/dan-abramov"
    name="Dan Abrahmov"
    {...args}
  ></Avatar>
);

export const Default = Base.bind({});
Default.args = { size: "xl" };

export const OnError: Story<AvatarProps> = () => (
  <Avatar
    src="https://bit.ly/dan-dabramov"
    onError={e => {
      alert("Error loading image");
      console.log(e);
    }}
  />
);

export const WithIcon: Story<AvatarProps> = () => (
  <Avatar className="bg-red-400 text-white">
    <ClockIcon />
  </Avatar>
);

export const WithIconAndBadge: Story<AvatarProps> = () => (
  <Avatar size="xl">
    <ClockIcon />
    <AvatarBadge position="bottom-right">
      <OfflineDot />
    </AvatarBadge>
  </Avatar>
);

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

export const NoNameAndSrc: Story<AvatarProps> = () => <Avatar />;
export const NameButNoSrc: Story<AvatarProps> = () => (
  <Avatar name="Anurag Hazra" />
);
export const NoNameAndSrcButFallback: Story<AvatarProps> = () => (
  <Avatar fallback={<ClockIcon />} />
);
export const NameAndFallback: Story<AvatarProps> = () => (
  <Avatar name="Anurag Hazra" fallback={<ClockIcon />} />
);
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
          className="font-sans bg-green-500 text-white rounded-full text-xs px-1"
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
