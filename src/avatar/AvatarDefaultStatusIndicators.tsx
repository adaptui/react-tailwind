import { AwayStatusIcon, SleepStatusIcon } from "../icons";
import { ActiveStatusIcon } from "../icons/ActiveStatus";
import { useTheme } from "../theme";
import { passProps, runIfFn, tcm } from "../utils";

import { AvatarProps } from "./Avatar";

export const AvatarDefaultStatusIndicators: AvatarProps["statusIndicators"] =
  state => {
    const { status, size, statusIndicatorsBgColor, statusIndicatorRingColor } =
      state;

    const theme = useTheme("avatar");

    if (status === "none") return null;

    const className = tcm(
      theme.statusIndicators[status].base,
      theme.statusIndicators[status].size[size],
      statusIndicatorsBgColor,
      statusIndicatorRingColor,
    );

    const statusIndicator = () => {
      if (status === "active") return <ActiveStatusIcon />;
      if (status === "sleep") return <SleepStatusIcon />;
      if (status === "away") return <AwayStatusIcon />;

      if (status === "typing")
        return ["xs", "sm", "md"].includes(size) ? (
          <TypingSmallStatusIcon />
        ) : (
          <TypingLargeStatusIcon />
        );

      return null;
    };

    return passProps(runIfFn(statusIndicator), { className });
  };

const TypingSmallStatusIcon: React.FC = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 5"
      fill="none"
      {...props}
    >
      <rect width="8" height="5" fill="currentColor" rx="2.5"></rect>
      <rect width="2" height="2" x="1.5" y="1.5" fill="#fff" rx="1"></rect>
      <rect
        width="2"
        height="2"
        x="4.5"
        y="1.5"
        fill="#fff"
        opacity="0.5"
        rx="1"
      ></rect>
    </svg>
  );
};

const TypingLargeStatusIcon: React.FC = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 12 7"
      {...props}
    >
      <rect width="12" height="7" fill="currentColor" rx="3.5"></rect>
      <rect width="2" height="2" x="2" y="2.5" fill="#fff" rx="1"></rect>
      <rect width="2" height="2" x="5" y="2.5" fill="#fff" rx="1"></rect>
      <rect
        width="2"
        height="2"
        x="8"
        y="2.5"
        fill="#fff"
        opacity="0.5"
        rx="1"
      ></rect>
    </svg>
  );
};
