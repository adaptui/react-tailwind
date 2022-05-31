import * as React from "react";
import {
  NumberFieldBaseStateProps,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldLabel,
  useNumberFieldBaseState,
  useNumberFieldState,
} from "@adaptui/react";

import { Button, Meter, MeterProps } from "../../index";

export type MeterIntervalProps = MeterProps & {};

export const MeterInterval: React.FC<MeterIntervalProps> = props => {
  const [intervalValue, setIntervalValue] = React.useState(10);
  const [stepValue, setStepValue] = React.useState(10);

  const max = intervalValue * stepValue;
  const [value, setValue] = useMeterState(0, max, stepValue);

  return (
    <div className="w-80 space-y-4">
      <div className="flex justify-between space-x-4">
        <Input
          label="Interval"
          value={intervalValue}
          onChange={setIntervalValue}
          locale="en-US"
        />
        <Input
          label="Step"
          value={stepValue}
          onChange={setStepValue}
          locale="en-US"
        />
      </div>
      <Meter
        value={value}
        max={max}
        intervals={intervalValue}
        label="Charging..."
        hint={value.toString()}
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

const Input: React.FC<NumberFieldBaseStateProps> = props => {
  const { label } = props;
  const baseState = useNumberFieldBaseState(props);
  const state = useNumberFieldState({ state: baseState, ...props });

  return (
    <div>
      <NumberFieldLabel
        state={state}
        className="mb-1 inline-block text-sm font-medium text-gray-700"
      >
        {label}
      </NumberFieldLabel>
      <NumberFieldGroup state={state}>
        <NumberFieldInput
          id="interval"
          className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-300 sm:text-sm"
          state={state}
        />
      </NumberFieldGroup>
    </div>
  );
};
