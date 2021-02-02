import {
  useProgressState,
  ProgressInitialState,
  ProgressStateReturn,
} from "@renderlesskit/react";
import * as React from "react";

import { runIfFn } from "../utils";
import { ProgressBar } from "./ProgressBar";
import { ProgressTrack } from "./ProgressTrack";

type ProgressRenderProps = {
  children?:
    | (({
        state,
        size,
      }: {
        state: ProgressStateReturn;
        size: ProgressProps["size"];
      }) => JSX.Element)
    | React.ReactNode;
};

export type ProgressProps = ProgressInitialState & {
  /**
   * How large should the progress be?
   *
   * @default "sm"
   */
  size?: keyof Renderlesskit.GetThemeValue<"progress", "track">["size"];
};

export const Progress: React.FC<
  ProgressProps & ProgressRenderProps
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
        <>
          <ProgressTrack size={size}>
            <ProgressBar {...state} />
          </ProgressTrack>
        </>
      )}
    </>
  );
};

export default Progress;
