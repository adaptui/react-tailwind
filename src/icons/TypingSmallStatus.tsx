import { createIcon } from "../create-icon";

export const TypingSmallStatusIcon = createIcon({
  displayName: "TypingSmallStatusIcon",
  viewBox: "0 0 8 8",
  path: (
    <>
      <rect width="8" height="5" y="3" fill="currentColor" rx="2.5" />
      <rect width="2" height="2" x="1.5" y="4.5" fill="#fff" rx="1" />
      <rect
        width="2"
        height="2"
        x="4.5"
        y="4.5"
        fill="#fff"
        opacity=".5"
        rx="1"
      />
    </>
  ),
});
