import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

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
        onChange={event => {
          setText(event.target.value as string);
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
