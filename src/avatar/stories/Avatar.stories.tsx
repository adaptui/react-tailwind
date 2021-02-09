import React from "react";
import { Meta } from "@storybook/react";
// import { useTooltipState, TooltipReference, Tooltip } from "reakit";

import "./avatar.css";
import { PhotographIcon } from "../../icons";
// import { AvatarBadge } from "../Avatar";
import { Avatar, AvatarProps } from "..";
// import { AvatarGroup } from "../AvatarGroup";
// import Status, { OfflineDot, OnlineDot } from "../../common/Status";
import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";

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

// export const WithIconAndBadge = base({
//   size: "xl",
//   children: (
//     <>
//       <PhotographIcon />
//       <AvatarBadge position="bottom-right">
//         <OfflineDot />
//       </AvatarBadge>
//     </>
//   ),
// });

// export const WithBadge: Story<AvatarProps> = () => {
//   const [isTyping, setTyping] = React.useState(false);

//   return (
//     <>
//       <Avatar size="xl" src="https://bit.ly/dan-abramov">
//         <AvatarBadge position="bottom-right">
//           {isTyping ? <TypingAnimation /> : <OnlineDot />}
//         </AvatarBadge>
//       </Avatar>

//       <br />

//       <label>
//         isTyping?
//         <input
//           type="checkbox"
//           name="typing"
//           onChange={() => setTyping(!isTyping)}
//         />
//       </label>
//     </>
//   );
// };

// export const Statuses: Story<AvatarProps> = () => (
//   <AvatarGroup size="xl">
//     <Avatar size="xl" src="https://bit.ly/dan-abramov" name="Anurag Hazra">
//       <AvatarBadge>
//         <Status status="online" />
//       </AvatarBadge>
//     </Avatar>
//     <Avatar size="xl" src="https://bit.ly/dan-abramov" name="Anurag Hazra">
//       <AvatarBadge>
//         <Status status="offline" />
//       </AvatarBadge>
//     </Avatar>
//     <Avatar size="xl" src="https://bit.ly/dan-abramov" name="Anurag Hazra">
//       <AvatarBadge>
//         <Status status="sleep" />
//       </AvatarBadge>
//     </Avatar>
//   </AvatarGroup>
// );

// export const OnlineTooltip: Story<AvatarProps> = () => {
//   const tooltip = useTooltipState({ placement: "right-start", gutter: 5 });

//   return (
//     <Avatar size="xl" name="Anurag Hazra" src="https://bit.ly/dan-abramov">
//       <AvatarBadge>
//         <Tooltip
//           as="div"
//           className="px-1 font-sans text-xs text-white bg-green-500 rounded-full"
//           {...tooltip}
//         >
//           Online
//         </Tooltip>
//         <TooltipReference {...tooltip}>
//           <OnlineDot></OnlineDot>
//         </TooltipReference>
//       </AvatarBadge>
//     </Avatar>
//   );
// };

// export const Group: Story<AvatarProps> = () => (
//   <>
//     {["xs", "sm", "md", "lg"].map((size, i) => {
//       return (
//         <>
//           <br />
//           <AvatarGroup limit={i + 1} size={size as any}>
//             <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
//             <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
//             <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
//             <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
//           </AvatarGroup>
//         </>
//       );
//     })}
//   </>
// );
