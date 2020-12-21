import * as React from "react";
import { createIcon } from "../icon";

export const GenericAvatar = createIcon({
  displayName: "GenericAvatar",
  viewBox: "0 0 12 12",
  path: (
    <>
      <path
        d="M6 5c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2zM6 7c-.6566 0-1.3068.1035-1.9134.3045s-1.1578.4956-1.6221.867C1.5268 8.9218 1 9.9392 1 11h10c0-1.0609-.5268-2.0783-1.4645-2.8284C8.5978 7.4214 7.3261 7 6 7z"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </>
  ),
});
