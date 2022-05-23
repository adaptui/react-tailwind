import { createContext } from "../utils";

import { AvatarGroupUIProps } from "./AvatarGroupProps";

const [AvatarGroupContextProvider, useAvatarGroupContext] =
  createContext<AvatarGroupUIProps>({
    name: "AvatarGroupContextProvider",
    strict: false,
  });

export { AvatarGroupContextProvider, useAvatarGroupContext };
