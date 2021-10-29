import { createIcon } from "../create-icon";

export const TypingLargeStatusIcon = createIcon({
  displayName: "TypingLargeStatusIcon",
  viewBox: "0 0 12 12",
  path: (
    <>
      <rect width="12" height="7" y="5" fill="currentColor" rx="3.5" />
      <rect width="2" height="2" x="2" y="7.5" fill="#fff" rx="1" />
      <rect width="2" height="2" x="5" y="7.5" fill="#fff" rx="1" />
      <rect
        width="2"
        height="2"
        x="8"
        y="7.5"
        fill="#fff"
        opacity=".5"
        rx="1"
      />
    </>
  ),
});
