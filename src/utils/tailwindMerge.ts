import { extendTailwindMerge } from "tailwind-merge";

export const cx = (...classNames: any[]) =>
  classNames.filter(Boolean).join(" ");

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
