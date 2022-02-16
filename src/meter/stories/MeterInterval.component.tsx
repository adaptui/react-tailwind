import * as React from "react";
import {
  NumberInput,
  NumberInputStateReturn,
  useNumberInputState,
} from "@renderlesskit/react";

import { Button, Meter, MeterProps } from "../../index";

export type MeterIntervalProps = MeterProps & {};

export const MeterInterval: React.FC<MeterIntervalProps> = props => {
  const intervalState = useNumberInputState({ defaultValue: 10 });
  const stepState = useNumberInputState({ defaultValue: 10 });
  const max = intervalState.valueAsNumber * stepState.valueAsNumber;
  const [value, setValue] = useMeterState(0, max, stepState.valueAsNumber);

  return (
    <div className="w-80 space-y-4">
      <div className="flex justify-between space-x-4">
        <Input state={intervalState} label="Interval" />
        <Input state={stepState} label="Step" />
      </div>
      <Meter
        value={value}
        max={max}
        intervals={intervalState.valueAsNumber}
        label="Charging..."
        hint={value}
        {...props}
      />
      <ActionButtons setValue={setValue} />
    </div>
  );
};

export default MeterInterval;

const useMeterState = (
  initialValue: number = 0,
  max: number = 100,
  step: number = 10,
) => {
  const [value, setValue] = React.useState<number>(initialValue);

  React.useEffect(() => {
    const clearId = setInterval(() => {
      setValue(prevValue => {
        return prevValue + step;
      });
    }, 500);

    if (value === max) {
      clearInterval(clearId);
    }

    return () => {
      clearInterval(clearId);
    };
  }, [setValue, value, step, max]);

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

const Input: React.FC<{
  state: NumberInputStateReturn;
  label: string;
}> = props => {
  const { state, label } = props;
  return (
    <label>
      <span className="mb-1 inline-block text-sm font-medium text-gray-700">
        {label}
      </span>
      <NumberInput
        id="interval"
        className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-300 sm:text-sm"
        {...state}
      />
    </label>
  );
};
