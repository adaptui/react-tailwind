import * as React from "react";

import {
  Button,
  CircularProgress,
  CircularProgressProps,
  isNull,
} from "../../index";

export type CircularProgressBasicProps = CircularProgressProps & {};

export const CircularProgressBasic: React.FC<
  CircularProgressBasicProps
> = props => {
  const [value, setValue] = useCircularProgressState();

  return (
    <div className="flex flex-col items-center">
      <CircularProgress value={value} {...props} />
      <ActionButtons setValue={setValue} />
    </div>
  );
};

export default CircularProgressBasic;

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
      <Button type="reset" className="mt-4 block" onClick={() => setValue(0)}>
        Restart CircularProgress
      </Button>
      <Button onClick={() => setValue(null)} className="mt-2 block">
        Make Indeterminate - Sets value to `null`
      </Button>
    </>
  );
};
