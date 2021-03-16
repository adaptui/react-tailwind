import React from "react";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Button",
} as Meta;

export const Custom = () => {
  return (
    <button className="lib:w-60 lib:h-4 w-40 h-8  sm:w-44 sm:lib:w-52">
      Test
    </button>
  );
};
