import * as React from "react";
import { Story } from "@storybook/react";

import theme from "../src/theme/defaultTheme";

export const storyTemplate = <ComponentProps,>(
  Component: React.FC<ComponentProps>,
  defaultArgs?: Partial<ComponentProps>,
) => (props: ComponentProps) => {
  const base: Story<ComponentProps> = args => <Component {...args} />;
  base.args = { ...defaultArgs, ...props };
  return base;
};

export const createUnionControl = (keys: any) => {
  return {
    control: {
      type: "inline-radio",
      options: Array.isArray(keys) ? keys : Object.keys(keys),
    },
  };
};

type CreateControlsOptions = { unions?: string[]; ignore?: string[] };
export const createControls = (
  component: string,
  options?: CreateControlsOptions,
) => {
  try {
    const controls = (options?.unions || []).reduce((cur, key) => {
      const value = (theme as Record<string, any>)[component][key];

      if (!value) return cur;
      return {
        ...cur,
        [key]: createUnionControl(value),
      };
    }, {});

    const ignoredControls = (options?.ignore || []).reduce((cur, key) => {
      return {
        ...cur,
        [key]: { table: { disable: true } },
      };
    }, {});

    return { ...controls, ...ignoredControls };
  } catch (e) {
    console.log(e);
  }
};
