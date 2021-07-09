import * as React from "react";
import { Story } from "@storybook/react";

import theme from "../src/theme/defaultTheme";

export const storyTemplate =
  <ComponentProps,>(
    Component: React.FC<ComponentProps>,
    defaultArgs?: Partial<ComponentProps>,
  ) =>
  (props: ComponentProps) => {
    const base: Story<ComponentProps> = args => <Component {...args} />;

    base.args = { ...defaultArgs, ...props };

    return base;
  };

export const createUnionControl = (keys: any) => {
  return {
    options: Array.isArray(keys) ? keys : Object.keys(keys),
    control: {
      type: "inline-radio",
    },
  };
};

type CreateControlsOptions = {
  unions?: string[];
  ignore?: string[];
  allow?: string[];
};

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

    const allowedControls = (options?.allow || []).reduce((cur, key) => {
      return {
        ...cur,
        [key]: { table: { disable: true } },
      };
    }, {});
    console.log("%c allowedControls", "color: #731d6d", allowedControls);

    return { ...controls, ...ignoredControls, ...allowedControls };
  } catch (e) {
    console.log(e);
  }
};
