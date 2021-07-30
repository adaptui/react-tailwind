import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from "../Checkbox";
import { Button } from "reakit/ts";
import { createControls } from "../../../.storybook/storybookUtils";

export default {
  title: "Forms/CheckboxNew",
  component: Checkbox,
  argTypes: createControls("checkbox", {
    ignore: [
      "unstable_system",
      "unstable_clickOnEnter",
      "unstable_clickOnSpace",
      "wrapElement",
      "focusable",
      "as",
    ],
  }),
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Checkbox> = {
  args: {},
};
