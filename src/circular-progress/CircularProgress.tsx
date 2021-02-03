import {
  useProgressState,
  ProgressInitialState,
  ProgressStateReturn,
} from "@renderlesskit/react";
import * as React from "react";

import { runIfFn } from "../utils";
import { CircularProgressBar } from "./CircularProgressBar";
import { CircularProgressWrapper } from "./CircularProgressWrapper";

type CircularProgressRenderProps = {
  children?:
    | (({
        state,
        size,
      }: {
        state: ProgressStateReturn;
        size: CircularProgressProps["size"];
      }) => JSX.Element)
    | React.ReactNode;
};

export type CircularProgressProps = ProgressInitialState & {
  /**
   * How large should the circular progress be?
   *
   * @default "sm"
   */
  size?: keyof Renderlesskit.GetThemeValue<"circularProgress", "bar">["size"];
};

export const CircularProgress: React.FC<
  CircularProgressProps & CircularProgressRenderProps
> = props => {
  const { value: defaultValue, size = "sm", children, ...rest } = props;
  const state = useProgressState(rest);
  const { setValue } = state;

  React.useEffect(() => {
    if (defaultValue !== undefined) setValue(defaultValue);
  }, [defaultValue, setValue]);

  return (
    <>
      {children ? (
        runIfFn(children, { state, size })
      ) : (
        <CircularProgressWrapper {...state}>
          <CircularProgressBar size={size} {...state} />
        </CircularProgressWrapper>
      )}
    </>
  );
};

export default CircularProgress;
