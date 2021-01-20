import React from "react";
import { cx } from "@renderlesskit/react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";

import {
  Button,
  IconButton,
  ButtonProps,
  ButtonGroup,
  CloseButton as CloseButtonDefault,
  IconButtonProps,
  ButtonGroupProps,
  CloseButtonProps,
} from "../index";
import {
  SearchIcon,
  CaretDownIcon,
  InfoCircleIcon,
  WheelIcon,
} from "../../icons";
import { useTheme } from "../../theme";
import { Spinner } from "../../spinner";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Base: Story<ButtonProps> = args => <Button {...args}>Button</Button>;

export const Default = Base.bind({});
Default.args = { size: "lg", variant: "primary" };

export const ExtendedVariant = Default.bind({});
ExtendedVariant.args = { size: "xxl", variant: "tertiary" };

const LeftIconButton: Story<ButtonProps> = args => (
  <Button prefix={<SearchIcon />} {...args}>
    Button
  </Button>
);

export const LeftIcon = LeftIconButton.bind({});
LeftIcon.args = { size: "lg", variant: "primary" };

const RightIconButton: Story<ButtonProps> = args => (
  <Button suffix={<CaretDownIcon />} {...args}>
    Button
  </Button>
);

export const RightIcon = RightIconButton.bind({});
RightIcon.args = { size: "lg", variant: "primary" };

const BothSideIconButton: Story<ButtonProps> = args => (
  <Button prefix={<SearchIcon />} suffix={<CaretDownIcon />} {...args}>
    Button
  </Button>
);

export const BothSideIcon = BothSideIconButton.bind({});
BothSideIcon.args = { size: "lg", variant: "primary" };

const IconButtonBase: Story<IconButtonProps> = args => (
  <IconButton aria-label="Search" {...args}>
    <SearchIcon />
  </IconButton>
);

export const OnlyIcon = IconButtonBase.bind({});
OnlyIcon.args = { size: "lg", variant: "primary" };

const CloseButtonBase: Story<CloseButtonProps> = args => (
  <CloseButtonDefault {...args} />
);

export const CloseButton = CloseButtonBase.bind({});
CloseButton.args = { size: "lg", variant: "primary" };

export const LoadingIcon = BothSideIconButton.bind({});
LoadingIcon.args = { size: "lg", variant: "primary", isLoading: true };

const CustomSpinner = () => {
  const theme = useTheme();

  return (
    <>
      Loading
      <Spinner className={cx(theme.button.spinner, "ml-2", "text-red-500")} />
    </>
  );
};

export const CustomLaodingElement = BothSideIconButton.bind({});
CustomLaodingElement.args = {
  size: "lg",
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

const IconButtonGroupBase: Story<ButtonGroupProps> = args => (
  <ButtonGroup {...args}>
    <IconButton aria-label="search">
      <SearchIcon />
    </IconButton>
    <IconButton aria-label="info">
      <InfoCircleIcon />
    </IconButton>
    <IconButton aria-label="settings">
      <WheelIcon />
    </IconButton>
  </ButtonGroup>
);

export const GroupDefault = ButtonGroupBase.bind({});
GroupDefault.args = {};

export const GroupCollapsed = ButtonGroupBase.bind({});
GroupCollapsed.args = {
  isAttached: true,
  size: "lg",
  variant: "primary",
};

export const IconButtonGroupCollapsed = IconButtonGroupBase.bind({});
IconButtonGroupCollapsed.args = {
  isAttached: true,
  size: "lg",
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
