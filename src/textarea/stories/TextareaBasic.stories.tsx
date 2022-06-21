import * as React from "react";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { Box } from "../../box";
import { SlotIcon } from "../../icons";
import { Input } from "../../input";
import { Radio } from "../../radio";
import { RadioGroup } from "../../radio-group";
import { Textarea } from "../Textarea";
import { TextareaProps } from "../TextareaProps";

import js from "./templates/TextareaBasicJsx";
import ts from "./templates/TextareaBasicTsx";
import { TextareaBasic } from "./TextareaBasic.component";

type Meta = ComponentMeta<typeof TextareaBasic>;
type Story = ComponentStoryObj<typeof TextareaBasic>;

export default {
  title: "Forms/Textarea/Basic",
  component: TextareaBasic,
  argTypes: {
    ...createControls("textarea", {
      ignore: [
        "ref",
        "wrapElement",
        "as",
        "icon",
        "spinner",
        "inputRef",
        "ghostRef",
        "inputStyles",
        "autoSizeOnChange",
        "autoFocus",
        "focusable",
        "accessibleWhenDisabled",
        "onFocusVisible",
        "clickOnEnter",
        "clickOnSpace",
      ],
    }),
  },
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {
  args: {
    size: "md",
    variant: "outline",
    rowsMin: 3,
    cols: 30,
    autoSize: false,
    resize: "none",
  },
};

const lorem =
  "Velit voluptatem a veritatis nam ducimus ut corporis. Iure dolorem perspiciatis nihil quam laudantium ea magnam est voluptatem. Quam repellat pariatur quasi accusantium aut architecto ut est. Ab totam voluptate beatae et alias quod vero enim tempora. Corporis laboriosam velit eveniet eos ut repellat pariatur ipsam.";

export const Placeholder: Story = {
  args: { ...Default.args, placeholder: "Sample placeholder" },
};

export const Small: Story = {
  args: { ...Default.args, placeholder: "Sample placeholder", size: "sm" },
};

export const Medium: Story = {
  args: { ...Default.args, placeholder: "Sample placeholder", size: "md" },
};

export const Large: Story = {
  args: { ...Default.args, placeholder: "Sample placeholder", size: "lg" },
};

export const ExtraLarge: Story = {
  args: { ...Default.args, placeholder: "Sample placeholder", size: "xl" },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    placeholder: "Sample placeholder",
    variant: "outline",
  },
};

export const Underline: Story = {
  args: {
    ...Default.args,
    placeholder: "Sample placeholder",
    variant: "underline",
  },
};

export const Subtle: Story = {
  args: {
    ...Default.args,
    placeholder: "Sample placeholder",
    variant: "subtle",
  },
};

export const Content: Story = {
  args: {
    ...Default.args,
    placeholder: "Sample placeholder",
    defaultValue: lorem,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    defaultValue: lorem,
  },
};

export const AutoSize: Story = {
  args: {
    ...Default.args,
    autoSize: true,
    resize: "none",
    cols: 50,
    defaultValue: lorem,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    autoSize: true,
    loading: true,
    defaultValue: lorem,
  },
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    autoSize: true,
    invalid: true,
    icon: <SlotIcon />,
    defaultValue: lorem,
  },
};

export const Controlled = () => {
  const [text, setText] = React.useState<string>("");

  return (
    <Box className="flex w-80 flex-col space-y-2 break-words">
      <Textarea
        aria-label="Textarea Story Controlled Example"
        placeholder="Controlled textarea"
        value={text}
        rows={5}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setText(event.target.value);
        }}
      />
      <p>Textarea text: {text}</p>
    </Box>
  );
};

export const Resizes = () => {
  const [resize, setResize] =
    React.useState<TextareaProps["resize"]>("horizontal");

  return (
    <>
      <RadioGroup
        aria-label="fruits"
        className="mb-2 flex w-36 flex-col space-y-2"
        value={resize}
        setValue={e => setResize(e as TextareaProps["resize"])}
      >
        <Radio inputValue="horizontal" label="Horizontal" />
        <Radio inputValue="vertical" label="Vertical" />
        <Radio inputValue="both" label="Both" />
        <Radio inputValue="none" label="None" />
      </RadioGroup>

      <Textarea
        aria-label="Textarea Story Resize Example"
        placeholder="Resizable textarea"
        resize={resize}
      />
    </>
  );
};

export const RowsCols = () => {
  const [rows, setRows] = React.useState(1);
  const [cols, setCols] = React.useState(20);

  return (
    <Box className="flex flex-col space-y-2">
      <div className="mb-2 flex space-x-2">
        <label htmlFor="rows" className="flex flex-col space-y-2">
          <span>Enter Rows</span>
          <Input
            id="rows"
            type="number"
            placeholder="Enter no. of rows"
            value={rows}
            onChange={e => setRows(e.target.valueAsNumber)}
          />
        </label>
        <label htmlFor="cols" className="flex flex-col space-y-2">
          <span>Enter Cols</span>
          <Input
            id="cols"
            type="number"
            placeholder="Enter no. of cols"
            value={cols}
            onChange={e => setCols(e.target.valueAsNumber)}
          />
        </label>
      </div>
      <Textarea
        aria-label="Textarea Story RowsCols Example"
        placeholder="RowsCols textarea"
        rows={rows}
        cols={cols}
        className="inline"
      />
    </Box>
  );
};
