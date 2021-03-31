import React from "react";
import { isNull } from "@renderlesskit/react";
import { Meta } from "@storybook/react/types-6-0";

import { Button } from "../../button";
import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { CircularProgressBar } from "../CircularProgressBar";
import { CircularProgress, CircularProgressProps } from "../index";
import { CircularProgressWrapper } from "../CircularProgressWrapper";

export default {
  title: "Feedback/CircularProgress",
  component: CircularProgress,
  argTypes: { size: createUnionControl(["sm", "md", "lg"]) },
} as Meta;

const base = storyTemplate<CircularProgressProps>(
  args => {
    const [value, setValue] = useCircularProgressState();

    return (
      <>
        <CircularProgress value={value} {...args} />
        <ActionButtons setValue={setValue} />
      </>
    );
  },
  { size: "md" },
);

export const Small = base({ size: "sm" });
export const Medium = base({});
export const Large = base({ size: "lg" });

export const Custom = storyTemplate<CircularProgressProps>(
  args => {
    const [value, setValue] = useCircularProgressState();

    return (
      <>
        <CircularProgress value={value} {...args}>
          <CircularProgressWrapper>
            <CircularProgressBar
              trackStyle="text-red-300"
              innerTrackStyle="text-red-800"
            />
          </CircularProgressWrapper>
        </CircularProgress>
        <ActionButtons setValue={setValue} />
      </>
    );
  },
  { size: "md" },
)({});

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
