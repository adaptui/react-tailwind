import * as React from "react";
import { Story } from "@storybook/react";
import theme from "../theme/defaultTheme";

export const storyTemplate = <ComponentProps,>(
  Component: React.FC,
  defaultArgs?: Partial<ComponentProps>,
) => (props: ComponentProps) => {
  const base: Story<ComponentProps> = args => <Component {...args} />;
  base.args = { ...defaultArgs, ...props };
  return base;
};

export const createUnionControl = (keys: any) => {
  return {
    control: { type: "select", options: Object.keys(keys) },
  };
};

export const createControls = (
  component: string,
  options?: { unions: string[]; ignore: string[] },
) => {
  console.log(component, options);
  const controls = options?.unions.reduce((cur, key) => {
    console.log((theme as Record<string, any>)[component][key]);
    return {
      ...cur,
      [key]: createUnionControl((theme as Record<string, any>)[component][key]),
    };
  }, {});

  const ignoredControls = options?.ignore.reduce((cur, key) => {
    return {
      ...cur,
      [key]: { table: { disable: true } },
    };
  }, {});

  return { ...controls, ...ignoredControls };
};
