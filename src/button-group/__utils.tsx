import { createContext } from "../utils";

import { ButtonGroupOptions } from "./ButtonGroup";

const [ButtonGroupContextProvider, useButtonGroupContext] =
  createContext<ButtonGroupOptions>({
    name: "ButtonGroupContext",
    strict: false,
  });

export { ButtonGroupContextProvider, useButtonGroupContext };
