import * as React from "react";
import { isNull } from "@renderlesskit/react";

import {
  Button,
  Progress,
  ProgressBar,
  ProgressProps,
  ProgressTrack,
} from "../../index";

export type ProgressCustomProps = ProgressProps & {};

export const ProgressCustom: React.FC<ProgressCustomProps> = props => {
  const [value, setValue] = useProgressState();

  return (
    <>
      <Progress value={value} {...props}>
        <ProgressTrack className="bg-red-300" />
        <ProgressBar className="bg-red-800" />
      </Progress>
      <ActionButtons setValue={setValue} />
    </>
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
      <Button type="reset" className="block mt-2" onClick={() => setValue(0)}>
        Restart Progress
      </Button>
      <Button onClick={() => setValue(null)} className="block mt-2">
        Make Indeterminate - Sets value to `null`
      </Button>
    </>
  );
};
