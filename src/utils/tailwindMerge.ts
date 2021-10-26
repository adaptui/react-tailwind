import { extendTailwindMerge } from "tailwind-merge";

export { cx } from "@renderlesskit/react";

export const tcm = extendTailwindMerge({
  classGroups: {
    "font-size": [
      {
        text: ["cxs", "paragraph-cxs", "paragraph-sm", "2base"],
      },
    ],
  },
});
