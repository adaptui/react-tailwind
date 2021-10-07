import { useState } from "react";
import { useForm } from "react-hook-form";
import { Meta } from "@storybook/react";

import { storyTemplate } from "../../../.storybook/utils";
import { Button } from "../../button";
import { InfoCircleIcon } from "../../icons";
import { Input } from "../../input";
import { Radio, RadioGroup } from "../../radio";
import { Slider } from "../../slider";
import { Switch } from "../../switch";
import { Textarea } from "../../textarea";
import { FormLabelValue } from "../FormLabelValue";
import {
  FormErrorText,
  FormField,
  FormFieldProps,
  FormHelperText,
  FormLabel,
  FormRequiredText,
} from "../index";

export default {
  title: "Forms/FormField",
  component: FormField,
} as Meta;

const base = storyTemplate<
  FormFieldProps & {
    labelText?: string;
    hintText?: string;
    errorText?: string;
    value?: any;
  }
>(
  ({ labelText, hintText, errorText, value, children, id, ...args }) => {
    return (
      <FormField id={id} className="w-60" {...args}>
        {labelText && (
          <FormLabel>
            {labelText}
            <FormRequiredText>Required</FormRequiredText>
            {value && <FormLabelValue>{value}</FormLabelValue>}
          </FormLabel>
        )}
        {children}
        {hintText && (
          <FormHelperText>
            <InfoCircleIcon />
            <span>{hintText}</span>
          </FormHelperText>
        )}
        {errorText && (
          <FormErrorText>
            <InfoCircleIcon />
            <span>{errorText}</span>
          </FormErrorText>
        )}
      </FormField>
    );
  },
  {
    isDisabled: false,
    isRequired: false,
    isInvalid: false,
    isReadOnly: false,
  },
);

export const Default = base({
  id: "email",
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
  const [value, setValue] = useState(0);
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
      <RadioGroup defaultState="chrome" className="flex gap-2">
        <Radio value="chrome">Chrome</Radio>
        <Radio value="fireFox">FireFox</Radio>
        <Radio value="safari">Safari</Radio>
      </RadioGroup>
      <FormHelperText>Select which browser you use.</FormHelperText>
    </FormField>
  );
};

export const WithSwitch = base({
  id: "switch",
  labelText: "Enable darkmode?",
  hintText: "Switch darkmode",
  children: <Switch />,
});

export const WithTextarea = base({
  id: "switch",
  labelText: "Add description",
  hintText: "Describe the bug",
  children: <Textarea />,
});

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
            <Input
              {...inputProps}
              ref={register({
                maxLength: { value: 10, message: "Username is too long" },
                minLength: { value: 2, message: "Username is too short" },
              })}
              type="text"
              name="username"
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
