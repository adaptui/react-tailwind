import { useMemo } from "react";
import {
  ProgressInitialState,
  ProgressStateReturn,
  useProgressState,
} from "@renderlesskit/react";

import { BoxProps } from "../box";
import { createContext, forwardRefWithAs, RenderProp, runIfFn } from "../utils";

import { ProgressBar } from "./ProgressBar";
import { ProgressTrack } from "./ProgressTrack";

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
     * @default "md"
     */
    size?: keyof Renderlesskit.GetThemeValue<"progress", "track", "size">;
  };

export const Progress = forwardRefWithAs<
  ProgressProps & ProgressRenderProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { value, min, max, size = "md", children, ...rest } = props;
  const state = useProgressState({ value, min, max });
  const context = useMemo(() => ({ state, size }), [state, size]);

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

Progress.displayName = "Progress";

export default Progress;
