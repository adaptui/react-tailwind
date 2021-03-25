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
import { InfoCircleIcon } from "../../icons";
import { FormLabelValue } from "../FormLabelValue";
import { storyTemplate } from "../../../.storybook/storybookUtils";

export default {
  title: "FormField",
  component: FormField,
} as Meta;

const Input = React.forwardRef<HTMLInputElement, any>((props, ref) => {
  const inputProps = useFormControl(props);
  return (
    <input
      {...inputProps}
      ref={ref}
      className="w-full outline-none px-2 py-1 text-xs shadow-sm font-medium text-gray-500 border h-6 border-gray-300 hover:border-gray-400 rounded-md focus:text-gray-800 focus:border-blue-500"
    />
  );
});

const base = storyTemplate<
  FormFieldProps & {
    labelText: string;
    hintText: string;
    errorText: string;
    value?: any;
  }
>(({ labelText, hintText, errorText, value, children, ...args }) => {
  return (
    <FormField className="w-60" {...args}>
      <FormLabel htmlFor="email">
        {labelText}
        <FormRequiredText>Required</FormRequiredText>
        {value && <FormLabelValue>{value}</FormLabelValue>}
      </FormLabel>
      {children}
      <FormHelperText id="hint">
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
  required: false,
  invalid: false,
  labelText: "Enter Email",
  hintText: "Email should be valid",
  errorText: "Email is invalid",
  children: <Input type="email" />,
});

export const WthSlider = base({
  required: false,
  invalid: false,
  labelText: "Enter value",
  hintText: "Value should be valid",
  errorText: "Value is invalid",
  children: <Slider size="sm" />,
});

export const WithSliderValueLabel = () => {
  const [value, setValue] = React.useState(0);
  return (
    <FormField className="w-60" invalid={value > 80}>
      {({ invalid }) => (
        <>
          <FormLabel htmlFor="email">
            Slider value
            <FormLabelValue>{value}</FormLabelValue>
          </FormLabel>
          <Slider size="sm" values={[value]} onChange={v => setValue(v[0])} />
          {!invalid && <FormHelperText id="hint">Hint text</FormHelperText>}
          <FormErrorText>Value is above 80</FormErrorText>
        </>
      )}
    </FormField>
  );
};

type Inputs = {
  email: string;
};
export const ReactHookFormTest = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  const onSubmit = (e: any) => {
    alert(JSON.stringify(e));
  };

  return (
    <form className="w-60" onSubmit={handleSubmit(onSubmit)}>
      <FormField required invalid={!!errors.email}>
        {({ inputProps }) => (
          <>
            <FormLabel htmlFor="email">
              Enter email
              <FormRequiredText>Required</FormRequiredText>
            </FormLabel>
            <input
              {...inputProps}
              name="email"
              type="email"
              ref={register({
                required: { message: "Email is required", value: true },
              })}
            />
            {!errors.email && (
              <FormHelperText id="hint">Hint text</FormHelperText>
            )}
            <FormErrorText>{errors.email?.message}</FormErrorText>
          </>
        )}
      </FormField>

      <Button className="mt-2" size="sm" type="submit">
        Submit
      </Button>
    </form>
  );
};
