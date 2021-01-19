import * as React from "react";
import { Story } from "@storybook/react";

export const storyTemplate = <ComponentProps,>(
  Component: React.FC,
  defaultArgs?: Partial<ComponentProps>,
) => (props: ComponentProps) => {
  const base: Story<ComponentProps> = args => <Component {...args} />;
  base.args = { ...defaultArgs, ...props };
  return base;
};
