import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";

import "./button.css";
import {
  ClockIcon,
  CrossIcon,
  WheelIcon,
  PhotographIcon,
  ArrowNarrowRightIcon,
} from "../../icons";
import theme from "../../theme";
import { ocx } from "../../utils";
import { Spinner } from "../../spinner";
import { Button, ButtonProps, ButtonGroup, ButtonGroupProps } from "../index";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Base: Story<ButtonProps> = args => <Button {...args}>Button</Button>;

export const Default = Base.bind({});
Default.args = { size: "md", variant: "primary" };

const IconButton: Story<ButtonProps> = args => (
  <Button aria-label="settings" {...args}>
    <WheelIcon />
  </Button>
);

export const Icon = IconButton.bind({});
Icon.args = { size: "md", variant: "primary" };

const LeftIconButton: Story<ButtonProps> = args => (
  <Button prefix={<ClockIcon />} {...args}>
    Button
  </Button>
);

export const LeftIcon = LeftIconButton.bind({});
LeftIcon.args = { size: "md", variant: "primary" };

const RightIconButton: Story<ButtonProps> = args => (
  <Button suffix={<ArrowNarrowRightIcon />} {...args}>
    Button
  </Button>
);

export const RightIcon = RightIconButton.bind({});
RightIcon.args = { size: "md", variant: "primary" };

const BothSideIconButton: Story<ButtonProps> = args => (
  <Button prefix={<PhotographIcon />} suffix={<CrossIcon />} {...args}>
    Button
  </Button>
);

export const BothSideIcon = BothSideIconButton.bind({});
BothSideIcon.args = { size: "md", variant: "primary" };

const LoadingIconButton: Story<ButtonProps> = args => (
  <Button prefix={<PhotographIcon />} suffix={<CrossIcon />} {...args}>
    Button
  </Button>
);

export const LoadingIcon = LoadingIconButton.bind({});
LoadingIcon.args = { size: "md", variant: "primary", isLoading: true };

const CustomSpinner = () => (
  <>
    Loading
    <Spinner className={ocx(theme.button.spinner, "ml-2", "text-red-500")} />
  </>
);

export const CustomLaodingElement = LoadingIconButton.bind({});
CustomLaodingElement.args = {
  size: "md",
  variant: "primary",
  isLoading: true,
  spinner: <CustomSpinner />,
};

const ButtonGroupBase: Story<ButtonGroupProps> = args => (
  <ButtonGroup {...args}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

export const GroupDefault = ButtonGroupBase.bind({});
GroupDefault.args = { className: "space-x-4" };

export const GroupCollapsed = ButtonGroupBase.bind({});
GroupCollapsed.args = {
  isAttached: true,
  size: "md",
  variant: "primary",
};

export const GroupSecondary = ButtonGroupBase.bind({});
GroupSecondary.args = {
  isAttached: true,
  size: "lg",
  variant: "secondary",
};

const ButtonGroupExample: Story<ButtonGroupProps> = args => {
  const tab = useTabState();
  return (
    <>
      <TabList as={ButtonGroup} {...args} {...tab} aria-label="My tabs">
        <Tab as={Button} {...tab}>
          Tab 1
        </Tab>
        <Tab as={Button} {...tab}>
          Tab 2
        </Tab>
        <Tab as={Button} {...tab}>
          Tab 3
        </Tab>
      </TabList>
      <TabPanel {...tab}>Tab 1</TabPanel>
      <TabPanel {...tab}>Tab 2</TabPanel>
      <TabPanel {...tab}>Tab 3</TabPanel>
    </>
  );
};

export const TabListAsGroup = ButtonGroupExample.bind({});
TabListAsGroup.args = {
  isAttached: true,
  size: "lg",
  variant: "secondary",
};
