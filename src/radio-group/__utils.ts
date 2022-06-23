import { RadioState } from "ariakit";

import { createContext } from "../utils";

import { RadioGroupUIProps } from "./RadioGroupProps";

const [RadioGroupContextProvider, useRadioGroupContext] =
  createContext<RadioGroupUIProps>({
    name: "RadioGroupContextProvider",
    strict: false,
  });

export { RadioGroupContextProvider, useRadioGroupContext };

export const getIndexOfActiveItem = (
  items: RadioState["items"],
  activeId: RadioState["activeId"],
) => {
  return items.findIndex(item => item.id === activeId);
};
