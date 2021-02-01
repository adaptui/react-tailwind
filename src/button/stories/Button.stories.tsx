import React from "react";
import { cx } from "@renderlesskit/react";
import { Meta } from "@storybook/react/types-6-0";
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
import {
  SearchIcon,
  CaretDownIcon,
  InfoCircleIcon,
  WheelIcon,
} from "../../icons";
import { useTheme } from "../../theme";
import { Spinner } from "../../spinner";
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

export const ExtraSmall = base({ size: "xs" });
export const Small = base({ size: "sm" });
export const Large = base({});
export const ExtraLarge = base({ size: "xl" });

export const Primary = base({});
export const Secondary = base({ variant: "secondary" });
export const Outline = base({ variant: "outline" });
export const Ghost = base({ variant: "ghost" });

export const ExtendedTheme = base({
  // @ts-ignore
  size: "xxl",
  // @ts-ignore
  variant: "tertiary",
});

export const LeftIcon = base({ prefix: <SearchIcon /> });
export const RightIcon = base({ suffix: <CaretDownIcon /> });
export const BothIcon = base({
  suffix: <CaretDownIcon />,
  prefix: <SearchIcon />,
});
export const LoadingIcon = base({
  suffix: <CaretDownIcon />,
  prefix: <SearchIcon />,
  loading: true,
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
  loading: true,
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

export const GroupDefault = buttonGroupBase({});

export const GroupCollapsed = buttonGroupBase({
  attached: true,
  variant: "secondary",
});

const IconButtonGroupBase = storyTemplate<ButtonGroupProps>(
  args => (
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
  ),
  { size: "lg", variant: "primary" },
);

export const IconButtonGroupDefault = IconButtonGroupBase({});

export const IconButtonGroupCollapsed = IconButtonGroupBase({
  attached: true,
  variant: "secondary",
});

const buttonGroupExample = storyTemplate<ButtonGroupProps>(args => {
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
});

export const TabListAsGroup = buttonGroupExample({
  attached: true,
  size: "lg",
  variant: "secondary",
});
