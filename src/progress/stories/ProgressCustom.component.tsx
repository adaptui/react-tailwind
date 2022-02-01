import * as React from "react";

import {
  Button,
  isNull,
  Progress,
  ProgressBar,
  ProgressProps,
  ProgressTrack,
} from "../../index";

export type ProgressCustomProps = ProgressProps & {};

export const ProgressCustom: React.FC<ProgressCustomProps> = props => {
  const [value, setValue] = useProgressState();

  return (
    <div className="w-80">
      <Progress value={value} {...props}>
        <ProgressTrack className="bg-red-300" />
        <ProgressBar className="bg-red-800" />
      </Progress>
      <ActionButtons setValue={setValue} />
    </div>
  );
};

export default ProgressCustom;

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
      <Button type="reset" className="mt-2 block" onClick={() => setValue(0)}>
        Restart Progress
      </Button>
      <Button onClick={() => setValue(null)} className="mt-2 block">
        Make Indeterminate - Sets value to `null`
      </Button>
    </>
  );
};
