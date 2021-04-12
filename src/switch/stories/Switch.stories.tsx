import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Controller, useForm } from "react-hook-form";

import { SwitchIcon } from "../SwitchIcon";
import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { Button } from "../../button";
import { FormErrorText, FormField } from "../../form-field";
import { Switch, SwitchProps, SwitchLabel, SwitchInput } from "..";
import { SwitchText } from "../SwitchText";

export default {
  title: "Forms/Switch",
  component: Switch,
  argTypes: {
    size: createUnionControl({
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
    }),
    defaultChecked: {
      control: {
        type: "inline-radio",
        options: [true, false],
      },
    },
  },
} as Meta;

const base = storyTemplate<SwitchProps>(Switch, {
  size: "md",
  defaultChecked: true,
  children: "Label text",
  isDisabled: false,
  isRequired: false,
  isInvalid: false,
});

export const Small = base({ size: "sm" });
export const Medium = base({});
export const Large = base({ size: "lg" });
export const ExtraLarge = base({ size: "xl" });

export const DefaultUnchecked = base({ defaultChecked: false });

export const DefaultChecked = base({ defaultChecked: true });

export const Custom = storyTemplate<SwitchProps>(
  args => (
    <Switch {...args}>
      {({ checked }) => {
        return (
          <SwitchLabel className="inline-flex items-center px-4 py-3 bg-gray-100 rounded-lg">
            <SwitchInput />
            <SwitchIcon />
            <SwitchText>{checked ? "Dark Mode" : "Light Mode"}</SwitchText>
          </SwitchLabel>
        );
      }}
    </Switch>
  ),
  { size: "md", defaultChecked: false },
)({});

export const Controlled = storyTemplate<SwitchProps>(args => {
  const [state, setState] = React.useState(false);

  return <Switch checked={state} onChange={() => setState(!state)} {...args} />;
})({});

type FormData = {
  darkmode: boolean;
};
export const ReactHookForm = () => {
  const { control, handleSubmit, watch } = useForm<FormData>({
    defaultValues: { darkmode: false },
  });
  const onSubmit = handleSubmit(data => console.log(data));

  function isOff(value: boolean) {
    return !value;
  }

  return (
    <form onSubmit={onSubmit}>
      <Controller
        name="darkmode"
        control={control}
        rules={{ validate: isOff }}
        render={({ field, fieldState }) => {
          return (
            <FormField isInvalid={fieldState.invalid}>
              <Switch {...field} children="Enable darkmode?" />
              <FormErrorText>
                Darkmode must be off!!! (evil laugh)
              </FormErrorText>
            </FormField>
          );
        }}
      />
      <Button className="my-2" type="submit">
        submit
      </Button>
      <pre>{JSON.stringify(watch())}</pre>
    </form>
  );
};
