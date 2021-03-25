import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { Textarea, TextareaProps } from "../index";
import { Radio, RadioGroup } from "../../radio";
import { Box } from "../../box";

export default {
  title: "Textarea",
  component: Textarea,
} as Meta;

export const Default = () => (
  <Textarea aria-label="Textarea Story Default Example" />
);

export const Placeholder = () => (
  <Textarea
    aria-label="Textarea Story Placeholder Example"
    placeholder="Sample placeholder"
  />
);

export const Content = () => (
  <Textarea
    aria-label="Textarea Story Content Example"
    placeholder="Enter a description"
    defaultValue="Velit voluptatem a veritatis nam ducimus ut corporis. Iure dolorem perspiciatis nihil quam laudantium ea magnam est voluptatem. Quam repellat pariatur quasi accusantium aut architecto ut est. Ab totam voluptate beatae et alias quod vero enim tempora. Corporis laboriosam velit eveniet eos ut repellat pariatur ipsam."
  />
);

export const Autosize = () => (
  <Textarea
    autoSize
    aria-label="Textarea Story Autosize Example"
    placeholder="Enter a description"
    defaultValue="Velit voluptatem a veritatis nam ducimus ut corporis. Iure dolorem perspiciatis nihil quam laudantium ea magnam est voluptatem. Quam repellat pariatur quasi accusantium aut architecto ut est. Ab totam voluptate beatae et alias quod vero enim tempora. Corporis laboriosam velit eveniet eos ut repellat pariatur ipsam."
  />
);

export const Disabled = () => (
  <Textarea
    aria-label="Textarea Story Disabled Example"
    disabled
    placeholder="Enter a description"
    defaultValue="Velit voluptatem a veritatis nam ducimus ut corporis. Iure dolorem perspiciatis nihil quam laudantium ea magnam est voluptatem. Quam repellat pariatur quasi accusantium aut architecto ut est. Ab totam voluptate beatae et alias quod vero enim tempora. Corporis laboriosam velit eveniet eos ut repellat pariatur ipsam."
  />
);

export const Controlled = () => {
  const [text, setText] = React.useState<string>("");

  return (
    <Box className="flex flex-col space-y-2">
      <Textarea
        aria-label="Textarea Story Controlled Example"
        placeholder="Controlled textarea"
        value={text}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setText(event.target.value);
        }}
      />
      <p>Textarea text: {text}</p>
    </Box>
  );
};

export const Resizes = () => {
  const [resize, setResize] = React.useState<TextareaProps["resize"]>(
    "horizontal",
  );

  return (
    <>
      <RadioGroup
        aria-label="fruits"
        className="flex mb-2 space-x-2 w-36"
        loop
        state={resize}
        onStateChange={e => setResize(e as TextareaProps["resize"])}
      >
        <Radio value="horizontal">Horizontal</Radio>
        <Radio value="vertical">Vertical</Radio>
        <Radio value="both">Both</Radio>
        <Radio value="none">None</Radio>
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
          <input
            id="rows"
            type="number"
            placeholder="Enter no. of rows"
            value={rows}
            onChange={e => setRows(e.target.value)}
          />
        </label>
        <label htmlFor="cols" className="flex flex-col space-y-2">
          <span>Enter Cols</span>
          <input
            id="cols"
            type="number"
            placeholder="Enter no. of cols"
            value={cols}
            onChange={e => setCols(e.target.value)}
          />
        </label>
      </div>
      <span>
        <Textarea
          aria-label="Textarea Story RowsCols Example"
          placeholder="RowsCols textarea"
          rows={rows}
          cols={cols}
          className="inline"
        />
      </span>
    </Box>
  );
};
