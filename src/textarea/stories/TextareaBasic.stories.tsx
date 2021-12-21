import * as React from "react";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { Box } from "../../box";
import { Input } from "../../input";
import { Radio } from "../../radio";
import { RadioGroup } from "../../radio-group";
import { Textarea, TextareaProps } from "../Textarea";

import js from "./templates/TextareaBasicJsx";
import ts from "./templates/TextareaBasicTsx";
import { TextareaBasic } from "./TextareaBasic.component";

type Meta = ComponentMeta<typeof TextareaBasic>;
type Story = ComponentStoryObj<typeof TextareaBasic>;

export default {
  title: "Forms/Textarea/Basic",
  component: TextareaBasic,
  argTypes: {
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls(undefined, {
      ignore: [
        "unstable_system",
        "unstable_clickOnEnter",
        "unstable_clickOnSpace",
        "wrapElement",
        "focusable",
        "as",
        "setState",
        "checked",
        "value",
        "defaultState",
        "state",
        "onStateChange",
        "icon",
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
    placeholder: "",
    defaultValue: "",
    rowsMax: 100,
    rowsMin: 10,
    cols: 30,
    resize: "both",
    autoSize: false,
  },
};

const lorem =
  "Velit voluptatem a veritatis nam ducimus ut corporis. Iure dolorem perspiciatis nihil quam laudantium ea magnam est voluptatem. Quam repellat pariatur quasi accusantium aut architecto ut est. Ab totam voluptate beatae et alias quod vero enim tempora. Corporis laboriosam velit eveniet eos ut repellat pariatur ipsam.";

export const Placeholder = {
  args: { ...Default.args, placeholder: "Sample placeholder" },
};

export const Content = {
  args: {
    ...Default.args,
    placeholder: "Sample placeholder",
    defaultValue: lorem,
  },
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
    defaultValue: lorem,
  },
};

export const AutoSize = {
  args: {
    ...Default.args,
    autoSize: true,
    resize: "none",
    cols: 50,
    defaultValue:
      "Velit voluptatem a veritatis nam ducimus ut corporis. Iure dolorem perspiciatis nihil quam laudantium ea magnam est voluptatem. Quam repellat pariatur quasi accusantium aut architecto ut est. Ab totam voluptate beatae et alias quod vero enim tempora. Corporis laboriosam velit eveniet eos ut repellat pariatur ipsam.",
  },
};

export const Controlled = () => {
  const [text, setText] = React.useState<string>("");

  return (
    <Box className="flex flex-col space-y-2 break-words w-80">
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
        className="flex flex-col mb-2 space-y-2 w-36"
        state={resize}
        onStateChange={e => setResize(e as TextareaProps["resize"])}
      >
        <Radio value="horizontal" label="Horizontal" />
        <Radio value="vertical" label="Vertical" />
        <Radio value="both" label="Both" />
        <Radio value="none" label="None" />
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
      <div className="flex mb-2 space-x-2">
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
