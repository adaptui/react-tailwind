import { createContext } from "../utils";

import { RadioGroupUIProps } from "./RadioGroupProps";

const [RadioGroupContextProvider, useRadioGroupContext] =
  createContext<RadioGroupUIProps>({
    name: "RadioGroupContextProvider",
    strict: false,
  });

export { RadioGroupContextProvider, useRadioGroupContext };
