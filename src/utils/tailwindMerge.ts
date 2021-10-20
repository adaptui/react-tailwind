import { createTailwindMerge } from "tailwind-merge";

export { cx } from "@renderlesskit/react";

export const tcm = createTailwindMerge(getDefaultConfig => {
  const defaultConfig = getDefaultConfig();

  return {
    ...defaultConfig,
    classGroups: {
      ...defaultConfig.classGroups,
      "font-size": [
        ...defaultConfig.classGroups["font-size"],
        // Defined custom text presets
        {
          text: ["cxs", "paragraph-cxs", "paragraph-sm", "2base"],
        },
      ],
    },
  };
});
