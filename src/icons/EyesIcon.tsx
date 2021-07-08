import * as React from "react";
import { createIcon } from "../icon";

export const EyeOpen = createIcon({
  displayName: "EyeOpen",
  defaultProps: {
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "#000",
  },
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="currentColor"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" />
    </>
  ),
});

export const EyeClose = createIcon({
  displayName: "EyeOpen",
  defaultProps: {
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "#000",
  },
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        stroke="currentColor"
        d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
      />
      <line stroke="currentColor" x1="1" x2="23" y1="1" y2="23" />
    </>
  ),
});
