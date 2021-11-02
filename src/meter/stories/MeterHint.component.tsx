import * as React from "react";

import { Button, Meter, MeterProps } from "../../index";

export type MeterHintProps = MeterProps & {};

export const MeterHint: React.FC<MeterHintProps> = props => {
  const [value, setValue] = useMeterState();

  return (
    <div className="w-80">
      <Meter
        value={value}
        max={75}
        label="Charging..."
        hint={({ percent }: { percent: any }) =>
          percent === null ? undefined : `${percent}%`
        }
        {...props}
      />
      <ActionButtons setValue={setValue} />
    </div>
  );
};

export default MeterHint;

const useMeterState = (initialValue: number = 0) => {
  const [value, setValue] = React.useState<number>(initialValue);

  React.useEffect(() => {
    const clearId = setInterval(() => {
      setValue(prevValue => {
        return prevValue + 1;
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
