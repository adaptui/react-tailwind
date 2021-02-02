import * as React from "react";
import { createIcon } from "../icon";

export const CloseIcon = createIcon({
  displayName: "CloseIcon",
  viewBox: "0 0 12 12",
  path: (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
      d="M3 3l6 5.943M3 9l5.94-6"
    />
  ),
});
