import {
  useProgressState,
  ProgressInitialState,
  ProgressStateReturn,
} from "@renderlesskit/react";
import * as React from "react";

import { BoxProps } from "../box";
import { createContext, runIfFn } from "../utils";
import { forwardRefWithAs } from "../utils/types";
import { CircularProgressBar } from "./CircularProgressBar";
import { CircularProgressWrapper } from "./CircularProgressWrapper";

export type CircularProgressContext = Pick<CircularProgressProps, "size"> & {
  state: ProgressStateReturn;
};

const [
  CircularProgressProvider,
  useCircularProgressContext,
] = createContext<CircularProgressContext>({
  name: "CircularProgressContext",
  strict: false,
});

export { useCircularProgressContext };

type CircularProgressRenderProps = {
  children?: ((state: ProgressStateReturn) => JSX.Element) | React.ReactNode;
};

export type CircularProgressProps = BoxProps &
  ProgressInitialState & {
    /**
     * How large should the circular progress be?
     *
     * @default "sm"
     */
    size?: keyof Renderlesskit.GetThemeValue<"circularProgress", "bar", "size">;
  };

export const CircularProgress = forwardRefWithAs<
  CircularProgressProps & CircularProgressRenderProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    value: defaultValue,
    min,
    max,
    size = "sm",
    children,
    ...rest
  } = props;
  const state = useProgressState({ min, max });
  const { setValue } = state;

  const context = React.useMemo(() => ({ state, size }), [state, size]);

  React.useEffect(() => {
    if (defaultValue !== undefined) setValue(defaultValue);
  }, [defaultValue, setValue]);

  return (
    <CircularProgressProvider value={context}>
      {children ? (
        runIfFn(children, state)
      ) : (
        <CircularProgressWrapper ref={ref} {...rest}>
          <CircularProgressBar />
        </CircularProgressWrapper>
      )}
    </CircularProgressProvider>
  );
});

export default CircularProgress;
