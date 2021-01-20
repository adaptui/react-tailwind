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
} from "../index";
import { useTheme } from "../../theme";
import { Spinner } from "../../spinner";
import { SearchIcon, CaretDownIcon } from "../../icons";
import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";

export default {
  title: "Button",
  component: Button,
  argTypes: createControls("button", {
    unions: ["size", "variant"],
    ignore: [
      "unstable_system",
      "unstable_clickOnEnter",
      "unstable_clickOnSpace",
      "wrapElement",
    ],
  }),
} as Meta;

const base = storyTemplate<ButtonProps>(Button, {
  children: "Button",
  size: "lg",
  variant: "primary",
});

export const Default = base({});

export const ExtendedVariant = base({
  // @ts-ignore
  size: "xxl",
  // @ts-ignore
  variant: "tertiary",
});

export const LeftIcon = base({
  prefix: <SearchIcon />,
});

export const RightIcon = base({
  suffix: <CaretDownIcon />,
});

export const BothIcon = base({
  suffix: <CaretDownIcon />,
  prefix: <SearchIcon />,
});

export const LoadingIcon = base({
  suffix: <CaretDownIcon />,
  prefix: <SearchIcon />,
  isLoading: true,
});

const CustomSpinner = () => {
  const theme = useTheme();

  return (
    <>
      Loading
      <Spinner className={cx(theme.button.spinner, "ml-2", "text-red-500")} />
    </>
  );
};

export const CustomLoadingElement = base({
  suffix: <CaretDownIcon />,
  prefix: <SearchIcon />,
  isLoading: true,
  spinner: <CustomSpinner />,
});

const iconButtonBase = storyTemplate<IconButtonProps>(
  args => {
    return (
      <IconButton aria-label="picture" {...args}>
        <SearchIcon />
      </IconButton>
    );
  },
  { size: "lg", variant: "primary" },
);

export const OnlyIcon = iconButtonBase({});

const closeButtonBase = storyTemplate<IconButtonProps>(CloseButtonDefault, {
  size: "lg",
  variant: "primary",
});

export const CloseButton = closeButtonBase({});

const buttonGroupBase = storyTemplate<ButtonGroupProps>(
  args => (
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
  { size: "lg", variant: "primary" },
);

export const GroupDefault = buttonGroupBase({ className: "space-x-4" });

export const GroupCollapsed = buttonGroupBase({ isAttached: true });

export const GroupSecondary = buttonGroupBase({
  isAttached: true,
  variant: "secondary",
});

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
