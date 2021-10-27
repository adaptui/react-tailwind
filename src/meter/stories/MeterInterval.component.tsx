import * as React from "react";

import { Button, Meter, MeterProps } from "../../index";

export type MeterIntervalProps = MeterProps & {};

export const MeterInterval: React.FC<MeterIntervalProps> = props => {
  const [value, setValue] = useMeterState();

  return (
    <div className="w-80">
      <Meter
        value={value}
        max={100}
        intervals={10}
        label="Charging..."
        hint={value}
        {...props}
      />
      <ActionButtons setValue={setValue} />
    </div>
  );
};

export default MeterInterval;

const useMeterState = (initialValue: number = 0) => {
  const [value, setValue] = React.useState<number>(initialValue);

  React.useEffect(() => {
    const clearId = setInterval(() => {
      setValue(prevValue => {
        return prevValue + 10;
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
  setValue: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setValue }) => {
  return (
    <>
      <Button type="reset" className="block mt-2" onClick={() => setValue(0)}>
        Restart Meter
      </Button>
    </>
  );
};
