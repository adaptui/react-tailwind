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
    <div className="space-y-4 w-80">
      <div className="flex justify-between space-x-4">
        <Input state={intervalState} label="Max" />
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
      <Button type="reset" className="block mt-2" onClick={() => setValue(0)}>
        Restart Meter
      </Button>
    </>
  );
};

const Input: React.FC<{ state: NumberInputStateReturn; label: string }> =
  props => {
    const { state, label } = props;
    return (
      <label>
        <span className="inline-block mb-1 text-sm font-medium text-gray-700">
          {label}
        </span>
        <NumberInput
          id="interval"
          className="block w-full border-gray-300 rounded-md shadow-sm form-input focus:ring-gray-300 focus:border-gray-500 sm:text-sm"
          {...state}
        />
      </label>
    );
  };
