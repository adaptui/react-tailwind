import React from "react";
import { useForm } from "react-hook-form";
import { Meta } from "@storybook/react/types-6-0";

import {
  FormField,
  FormLabel,
  FormErrorText,
  FormHelperText,
  useFormControl,
  FormFieldProps,
  FormRequiredText,
} from "..";
import { Button } from "../../button";
import { Slider } from "../../slider";
import { Switch } from "../../switch";
import { InfoCircleIcon } from "../../icons";
import { Radio, RadioGroup } from "../../radio";
import { FormLabelValue } from "../FormLabelValue";
import { storyTemplate } from "../../../.storybook/storybookUtils";

export default {
  title: "FormField",
  component: FormField,
} as Meta;

const inputStyles =
  "w-full outline-none px-2 py-1 text-xs shadow-sm font-medium text-gray-500 border h-6 border-gray-300 hover:border-gray-400 rounded-md focus:text-gray-800 focus:border-blue-500";

const Input = React.forwardRef<HTMLInputElement, any>((props, ref) => {
  const inputProps = useFormControl(props);
  return <input {...inputProps} ref={ref} className={inputStyles} />;
});

const base = storyTemplate<
  FormFieldProps & {
    labelText: string;
    hintText: string;
    errorText: string;
    value?: any;
  }
>(({ labelText, hintText, errorText, value, children, id, ...args }) => {
  return (
    <FormField id={id} className="w-60" {...args}>
      <FormLabel>
        {labelText}
        <FormRequiredText>Required</FormRequiredText>
        {value && <FormLabelValue>{value}</FormLabelValue>}
      </FormLabel>
      {children}
      <FormHelperText>
        <InfoCircleIcon />
        <span>{hintText}</span>
      </FormHelperText>
      <FormErrorText>
        <InfoCircleIcon />
        <span>{errorText}</span>
      </FormErrorText>
    </FormField>
  );
});

export const Default = base({
  id: "email",
  isDisabled: false,
  isRequired: false,
  isInvalid: false,
  isReadOnly: false,
  labelText: "Enter Email",
  hintText: "Email should be valid",
  errorText: "Email is invalid",
  children: <Input type="email" />,
});

export const WthSlider = base({
  id: "slider",
  isDisabled: false,
  isReadOnly: false,
  isRequired: false,
  isInvalid: false,
  labelText: "Enter value",
  hintText: "Value should be valid",
  errorText: "Value is invalid",
  children: <Slider id="slider" size="sm" />,
});

export const WithSliderValueLabel = () => {
  const [value, setValue] = React.useState(0);
  return (
    <FormField id="slider" className="w-60" isInvalid={value > 80}>
      {({ isInvalid }) => (
        <>
          <FormLabel>
            Slider value
            <FormLabelValue>{value}</FormLabelValue>
          </FormLabel>
          <Slider
            id="slider"
            size="sm"
            values={[value]}
            onChange={v => setValue(v[0])}
          />
          {!isInvalid && <FormHelperText id="hint">Hint text</FormHelperText>}
          <FormErrorText>Value is above 80</FormErrorText>
        </>
      )}
    </FormField>
  );
};

export const WithRadioGroups = () => {
  return (
    <FormField as="fieldset" id="radios">
      <FormLabel as="legend">Favorite Browser</FormLabel>
      <RadioGroup defaultState="Chrome" className="flex gap-2">
        <Radio value="Chrome">Chrome</Radio>
        <Radio value="FireFox">FireFox</Radio>
        <Radio value="Safari">Safari</Radio>
      </RadioGroup>
      <FormHelperText>Select which browser you use.</FormHelperText>
    </FormField>
  );
};

export const WithSwitch = () => {
  return (
    <FormField id="switch">
      <FormLabel>Enable darkmode?</FormLabel>
      <Switch />
      <FormHelperText>Switch darkmode</FormHelperText>
    </FormField>
  );
};

type Inputs = {
  username: string;
};
export const ReactHookFormTest = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  const onSubmit = (e: any) => {
    alert(JSON.stringify(e));
  };

  return (
    <form className="w-60" onSubmit={handleSubmit(onSubmit)}>
      <FormField id="username" isRequired isInvalid={!!errors.username}>
        {({ inputProps }) => (
          <>
            <FormLabel>
              Enter username
              <FormRequiredText>Required</FormRequiredText>
            </FormLabel>
            <input
              {...inputProps}
              ref={register({
                maxLength: { value: 10, message: "Username is too long" },
                minLength: { value: 2, message: "Username is too short" },
              })}
              type="text"
              name="username"
              className={inputStyles}
            />
            {!errors.username && <FormHelperText>Hint text</FormHelperText>}
            <FormErrorText>{errors.username?.message}</FormErrorText>
          </>
        )}
      </FormField>

      <Button className="mt-2" size="sm" type="submit">
        Submit
      </Button>
    </form>
  );
};
