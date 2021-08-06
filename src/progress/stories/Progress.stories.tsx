import * as React from "react";
import { isNull } from "@renderlesskit/react";
import { Meta } from "@storybook/react";

import { Button } from "../../button";
import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { Progress, ProgressProps, ProgressTrack, ProgressBar } from "../index";

export default {
  title: "Feedback/Progress",
  component: Progress,
  argTypes: { size: createUnionControl(["sm", "md", "lg", "xl"]) },
} as Meta;

const base = storyTemplate<ProgressProps>(
  args => {
    const [value, setValue] = useProgressState();

    return (
      <>
        <Progress value={value} {...args} />
        <ActionButtons setValue={setValue} />
      </>
    );
  },
  { size: "sm" },
);

export const Small = base({ size: "sm" });
export const Medium = base({});
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
        <ActionButtons setValue={setValue} />
      </>
    );
  },
  { size: "md" },
)({});

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

const ActionButtons: React.FC<{
  setValue: React.Dispatch<React.SetStateAction<number | null>>;
}> = ({ setValue }) => {
  return (
    <>
      <Button type="reset" className="block mt-2" onClick={() => setValue(0)}>
        Restart Progress
      </Button>
      <Button onClick={() => setValue(null)} className="block mt-2">
        Make Indeterminate - Sets value to `null`
      </Button>
    </>
  );
};
