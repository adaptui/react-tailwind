import { Meta } from "@storybook/react/types-6-0";

import {
  Switch,
  SwitchProps,
  SwitchLabel,
  SwitchIcon,
  SwitchInput,
  SwitchStateContext,
  SwitchThemeContext,
} from "../Switch";
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

export const CustomSwitch = storyTemplate<SwitchProps>(
  args => (
    <Switch {...args}>
      {({
        state: { state },
        theme,
      }: {
        state: SwitchStateContext;
        theme: SwitchThemeContext;
      }) => {
        return (
          <SwitchLabel className="inline-flex items-center px-4 py-3 bg-gray-100 rounded-lg">
            <SwitchInput />
            <SwitchIcon />
            <span className="ml-2 text-sm text-gray-800">
              {state ? "Dark Mode" : "Light Mode"}
            </span>
          </SwitchLabel>
        );
      }}
    </Switch>
  ),
  { size: "sm", defaultState: false },
)({});
