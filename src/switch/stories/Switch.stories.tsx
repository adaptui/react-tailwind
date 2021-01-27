import { Meta } from "@storybook/react/types-6-0";

import { Switch, SwitchProps } from "../Switch";
import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    size: createUnionControl({
      xs: "xs",
      sm: "sm",
      lg: "lg",
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
  size: "sm",
  defaultState: true,
});

export const ExtraSmall = base({ size: "xs" });

export const Small = base({});

export const Large = base({ size: "lg" });

export const DefaultUnchecked = base({ defaultState: false });

export const DefaultChecked = base({ defaultState: true });
