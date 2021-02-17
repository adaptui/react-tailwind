import {
  useProgressState,
  ProgressInitialState,
  ProgressStateReturn,
} from "@renderlesskit/react";
import * as React from "react";

import { BoxProps } from "../box";
import { ProgressBar } from "./ProgressBar";
import { ProgressTrack } from "./ProgressTrack";
import { createContext, runIfFn } from "../utils";
import { forwardRefWithAs, RenderProp } from "../utils/types";

export type ProgressContext = {
  state: ProgressStateReturn;
  size: ProgressProps["size"];
};

const [ProgressProvider, useProgressContext] = createContext<ProgressContext>({
  name: "ProgressContext",
  strict: false,
});

export { useProgressContext };

type ProgressRenderProps = RenderProp<ProgressStateReturn>;

export type ProgressProps = BoxProps &
  ProgressInitialState & {
    /**
     * How large should the progress be?
     *
     * @default "sm"
     */
    size?: keyof Renderlesskit.GetThemeValue<"progress", "track", "size">;
  };

export const Progress = forwardRefWithAs<
  ProgressProps & ProgressRenderProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    value: defaultValue,
    min,
    max,
    size = "md",
    children,
    ...rest
  } = props;
  const state = useProgressState({ min, max });
  console.log({ state });
  const { setValue } = state;
  const context = React.useMemo(() => ({ state, size }), [state, size]);

  React.useEffect(() => {
    if (defaultValue !== undefined && setValue) setValue(defaultValue);
  }, [defaultValue, setValue]);

  return (
    <ProgressProvider value={context}>
      {children ? (
        runIfFn(children, state)
      ) : (
        <ProgressTrack ref={ref} {...rest}>
          <ProgressBar />
        </ProgressTrack>
      )}
    </ProgressProvider>
  );
});

export default Progress;
