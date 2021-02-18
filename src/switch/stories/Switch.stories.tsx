import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { SwitchIcon } from "../SwitchIcon";
import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { SwitchLabel } from "../SwitchLabel";
import { SwitchInput } from "../SwitchInput";
import { Switch, SwitchProps } from "../Switch";

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    size: createUnionControl({
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
    }),
    defaultState: {
      control: {
        type: "inline-radio",
        options: [true, false],
      },
    },
  },
} as Meta;

const base = storyTemplate<SwitchProps>(Switch, {
  size: "md",
  defaultState: true,
});

export const Small = base({ size: "sm" });
export const Medium = base({});
export const Large = base({ size: "lg" });
export const ExtraLarge = base({ size: "xl" });

export const DefaultUnchecked = base({ defaultState: false });

export const DefaultChecked = base({ defaultState: true });

export const Custom = storyTemplate<SwitchProps>(
  args => (
    <Switch {...args}>
      {({ state }) => {
        return (
          <SwitchLabel className="inline-flex items-center px-4 py-3 bg-gray-100 rounded-lg">
            <SwitchInput />
            <SwitchIcon />
            <span className="ml-2 text-sm text-gray-800 select-none">
              {state ? "Dark Mode" : "Light Mode"}
            </span>
          </SwitchLabel>
        );
      }}
    </Switch>
  ),
  { size: "md", defaultState: false },
)({});
