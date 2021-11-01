import { runIfFn } from "@chakra-ui/utils";

import {
  AwayStatusIcon,
  SleepStatusIcon,
  TypingLargeStatusIcon,
  TypingSmallStatusIcon,
} from "../icons";
import { ActiveStatusIcon } from "../icons/ActiveStatus";
import { useTheme } from "../theme";
import { passProps, tcm } from "../utils";

import { AvatarProps } from "./Avatar";
import { AvatarStateReturn } from "./AvatarState";

export const AvatarDefaultStatusIndicators: AvatarProps["statusIndicators"] =
  state => {
    const { status, size, parentsBackground } = state;

    const theme = useTheme("avatar");
    const className = tcm(
      theme.statusIndicators[status].base,
      theme.statusIndicators[status].size[size],
      ...parentsBackground,
    );

    return passProps(runIfFn(<StatusIndicators state={state} />), {
      className,
    });
  };

export type StatusIndicatorsProps = { state: AvatarStateReturn };

export const StatusIndicators: React.FC<StatusIndicatorsProps> = props => {
  const { state, ...rest } = props;
  const { status, size } = state;

  if (status === "active") return <ActiveStatusIcon {...rest} />;
  if (status === "sleep") return <SleepStatusIcon {...rest} />;
  if (status === "away") return <AwayStatusIcon {...rest} />;

  if (status === "typing")
    return ["xs", "sm", "md"].includes(size) ? (
      <TypingSmallStatusIcon {...rest} />
    ) : (
      <TypingLargeStatusIcon {...rest} />
    );

  return null;
};
