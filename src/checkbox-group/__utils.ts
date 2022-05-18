import { createContext } from "../utils";

import { CheckboxGroupUIProps } from "./CheckboxGroupProps";

const [CheckboxGroupContextProvider, useCheckboxGroupContext] =
  createContext<CheckboxGroupUIProps>({
    name: "CheckboxGroupContextProvider",
    strict: false,
  });

export { CheckboxGroupContextProvider, useCheckboxGroupContext };
