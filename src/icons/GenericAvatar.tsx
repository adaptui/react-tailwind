import * as React from "react";
import { createIcon } from "../icon";

export const GenericAvatar = createIcon({
  displayName: "GenericAvatar",
  viewBox: "0 0 16 16",
  path: (
    <>
      <g clip-path="url(#clip0)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 6.8a3.44 3.44 0 003.43-3.4A3.39 3.39 0 008 0a3.44 3.44 0 00-3.43 3.4c0 .9.36 1.77 1 2.4.65.64 1.52 1 2.43 1zM0 17a7.88 7.88 0 014.94-7.33 8.06 8.06 0 0110.45 4.3c.4.96.61 1.99.61 3.03H0z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </>
  ),
});
