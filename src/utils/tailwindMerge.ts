import { extendTailwindMerge } from "tailwind-merge";

export const tcm = extendTailwindMerge({
  classGroups: {
    "font-size": [
      {
        text: ["cxs", "paragraph-cxs", "paragraph-sm", "2base"],
      },
    ],
    shadow: [
      {
        shadow: ["input-underline"],
      },
    ],
  },
});
