import { EqualsIcon } from "../icons";
import { useTheme } from "../theme";
import { createContext } from "../utils";

import { SliderUIProps } from "./SliderProps";

export const SliderDefaultKnobIcon = (props: SliderUIProps) => {
  const { size } = props;
  const theme = useTheme("slider");
  const className = theme.size[size]?.knobIcon;

  return <EqualsIcon className={className} />;
};

const [SliderContextProvider, useSliderContext] = createContext<SliderUIProps>({
  name: "SliderContextProvider",
  strict: false,
});

export { SliderContextProvider, useSliderContext };
