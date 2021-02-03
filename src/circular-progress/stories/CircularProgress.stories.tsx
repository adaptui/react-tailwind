import React from "react";
import { isNull } from "@renderlesskit/react";
import { Meta } from "@storybook/react/types-6-0";

import { Button } from "../../button";
import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { CircularProgress, CircularProgressProps } from "../index";
import { CircularProgressWrapper } from "../CircularProgressWrapper";
import { CircularProgressBar } from "../CircularProgressBar";

export default {
  title: "CircularProgress",
  component: CircularProgress,
  argTypes: { size: createUnionControl(["xs", "sm", "lg", "xl"]) },
} as Meta;

const useCircularProgressState = (initialValue: number | null = 0) => {
  const [value, setValue] = React.useState<number | null>(initialValue);

  React.useEffect(() => {
    const clearId = setInterval(() => {
      setValue(prevValue => {
        if (isNull(prevValue)) return prevValue;
        return prevValue + 5;
      });
    }, 500);

    if (value === 100) {
      clearInterval(clearId);
    }

    return () => {
      clearInterval(clearId);
    };
  }, [setValue, value]);

  return [value, setValue] as const;
};

const base = storyTemplate<CircularProgressProps>(
  args => {
    const [value, setValue] = useCircularProgressState();

    return (
      <>
        <CircularProgress value={value} {...args} />
        <Button type="reset" className="block mt-2" onClick={() => setValue(0)}>
          Restart CircularProgress
        </Button>
        <Button onClick={() => setValue(null)} className="block mt-2">
          Make Indeterminate - Sets value to `null`
        </Button>
      </>
    );
  },
  { size: "sm" },
);

export const ExtraSmall = base({ size: "xs" });
export const Small = base({});
export const Large = base({ size: "lg" });
export const ExtraLarge = base({ size: "xl" });

export const Custom = storyTemplate<CircularProgressProps>(
  args => {
    const [value, setValue] = useCircularProgressState();

    return (
      <>
        <CircularProgress value={value} {...args}>
          {({ state, size }) => (
            <CircularProgressWrapper {...state}>
              <CircularProgressBar
                size={size}
                trackStyle="text-red-300"
                innerTrackStyle="text-red-800"
                {...state}
              />
            </CircularProgressWrapper>
          )}
        </CircularProgress>
        <Button type="reset" className="block mt-2" onClick={() => setValue(0)}>
          Restart CircularProgress
        </Button>
        <Button onClick={() => setValue(null)} className="block mt-2">
          Make Indeterminate - Sets value to `null`
        </Button>
      </>
    );
  },
  { size: "lg" },
)({});
