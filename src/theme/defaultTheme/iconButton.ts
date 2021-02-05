import { button } from "./button";

export const iconButton = {
  base: button.base,
  variant: button.variant,
  size: {
    sm:
      "lib:h-6 lib:w-auto lib:min-w-6 lib:text-xs lib:rounded-md lib:shadow-sm",
    md:
      "lib:h-8 lib:w-auto lib:min-w-8 lib:text-base lib:rounded-md lib:shadow-sm",
    lg:
      "lib:h-10 lib:w-auto lib:min-w-10 lib:text-base lib:rounded-lg lib:shadow-sm",
    xl:
      "lib:h-12 lib:w-auto lib:min-w-12 lib:text-base lib:rounded-lg lib:shadow-sm",
  },
  group: button.group,
  disabled: button.disabled,
};
