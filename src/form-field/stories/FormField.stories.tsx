import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { Slider } from "../../slider";
import { FormLabel } from "../FormLabel";
import { FormField, FormFieldProps } from "../FormField";
import { FormHelperText } from "../FormHelperText";
import { InfoCircleIcon } from "../../icons";
import { FormErrorMessage } from "../FormErrorMessage";
import { storyTemplate } from "../../../.storybook/storybookUtils";

export default {
  title: "FormField",
  component: FormField,
} as Meta;

const base = storyTemplate<
  FormFieldProps & { labelText: string; hintText: string; errorText: string }
>(({ labelText, hintText, errorText, children, ...args }) => {
  return (
    <FormField className="w-60" {...args}>
      <FormLabel htmlFor="email">{labelText}</FormLabel>
      {children}
      <FormHelperText id="hint">
        <InfoCircleIcon />
        <span>{hintText}</span>
      </FormHelperText>
      <FormErrorMessage>
        <InfoCircleIcon />
        <span>{errorText}</span>
      </FormErrorMessage>
    </FormField>
  );
});

export const Default = base({
  required: false,
  invalid: false,
  labelText: "Enter Email",
  hintText: "Email should be valid",
  errorText: "Email is invalid",
  children: (
    <input
      id="email"
      type="email"
      placeholder="username@email.com"
      aria-describedby="hint"
      className="w-full outline-none px-2 py-1 text-xs shadow-sm font-medium text-gray-500 border h-6 border-gray-300 hover:border-gray-400 rounded-md focus:text-gray-800 focus:border-blue-500"
    />
  ),
});

export const WthSlider = base({
  required: false,
  invalid: false,
  labelText: "Enter value",
  hintText: "Value should be valid",
  errorText: "Value is invalid",
  children: <Slider size="sm" />,
});
