import * as React from "react";
import { createIcon } from "../icon";

export const SliderThumbHandle = createIcon({
  displayName: "SliderThumbHandle",
  viewBox: "0 0 13 12",
  path: (
    <>
      <path
        d="M9 8H3"
        stroke="currentColor"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 4H3"
        stroke="currentColor"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </>
  ),
});
