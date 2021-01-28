import * as React from "react";
import { createIcon } from "../icon";

export const RadioCircleCheckedIcon = createIcon({
  displayName: "RadioCircle",
  viewBox: "0 0 16 16",
  path: (
    <>
      <circle cx="8" cy="8" r="8" fill="currentColor" />
      <circle cx="8" cy="8" r="3" fill="white" />
    </>
  ),
});

export const RadioCircleUncheckedIcon = createIcon({
  displayName: "RadioCircle",
  viewBox: "0 0 16 16",
  path: (
    <>
      <circle
        cx="8"
        cy="8"
        r="7"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </>
  ),
});

export const RadioCircleDisabledIcon = createIcon({
  displayName: "RadioCircle",
  viewBox: "0 0 16 16",
  path: (
    <>
      <circle cx="8" cy="8" r="8" fill="#E4E4E7" />
      <circle cx="8" cy="8" r="3" fill="currentColor" />
    </>
  ),
});
