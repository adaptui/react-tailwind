import * as React from "react";

import { Button, Meter, MeterBar, MeterProps, MeterTrack } from "../../index";

export type MeterCustomProps = MeterProps & {};

export const MeterCustom: React.FC<MeterCustomProps> = props => {
  const [value, setValue] = useMeterState();

  return (
    <div className="w-80">
      <Meter
        value={value}
        max={100}
        label="Charging..."
        hint={props =>
          props.state?.percent === null
            ? undefined
            : `${Math.ceil(props.state?.percent)}%`
        }
        {...props}
      >
        <MeterTrack className="bg-red-300" />
        <MeterBar className="bg-red-800" />
      </Meter>
      <ActionButtons setValue={setValue} />
    </div>
  );
};

export default MeterCustom;

const useMeterState = (initialValue: number = 0) => {
  const [value, setValue] = React.useState<number>(initialValue);

  React.useEffect(() => {
    const clearId = setInterval(() => {
      setValue(prevValue => {
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
  setValue: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setValue }) => {
  return (
    <>
      <Button type="reset" className="mt-2 block" onClick={() => setValue(0)}>
        Restart Meter
      </Button>
    </>
  );
};
