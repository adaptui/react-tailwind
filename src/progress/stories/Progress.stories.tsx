import React from "react";
import { isNull } from "@renderlesskit/react";
import { Meta } from "@storybook/react/types-6-0";

import { Button } from "../../button";
import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { Progress, ProgressProps, ProgressTrack, ProgressBar } from "../index";

export default {
  title: "Progress",
  component: Progress,
  argTypes: { size: createUnionControl(["xs", "sm", "lg", "xl"]) },
} as Meta;

const useProgressState = (initialValue: number | null = 0) => {
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

const base = storyTemplate<ProgressProps>(
  args => {
    const [value, setValue] = useProgressState();

    return (
      <>
        <Progress value={value} {...args} />
        <Button type="reset" className="block mt-2" onClick={() => setValue(0)}>
          Restart Progress
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

export const Custom = storyTemplate<ProgressProps>(
  args => {
    const [value, setValue] = useProgressState();

    return (
      <>
        <Progress value={value} {...args}>
          <ProgressTrack className="bg-red-300">
            <ProgressBar className="bg-red-800" />
          </ProgressTrack>
        </Progress>
        <Button type="reset" className="block mt-2" onClick={() => setValue(0)}>
          Restart Progress
        </Button>
        <Button onClick={() => setValue(null)} className="block mt-2">
          Make Indeterminate - Sets value to `null`
        </Button>
      </>
    );
  },
  { size: "lg" },
)({});
