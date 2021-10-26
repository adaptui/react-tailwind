import * as React from "react";
import { isNull } from "@renderlesskit/react";

import { Button, Progress, ProgressProps } from "../../index";

export type ProgressHintProps = ProgressProps & {};

export const ProgressHint: React.FC<ProgressHintProps> = props => {
  const [value, setValue] = useProgressState();

  return (
    <div className="w-80">
      <Progress
        value={value}
        label="Loading..."
        hint={value === null ? undefined : `${value}%`}
        {...props}
      />
      <ActionButtons setValue={setValue} />
    </div>
  );
};

export default ProgressHint;

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