import React from "react";

import "./tailwind.css";
import theme from "../renderlesskit.config.ts";
import { RenderlesskitProvider } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story, context) => {
    return (
      <RenderlesskitProvider theme={theme}>
        <div className="box-border font-sans">
          <Story />
        </div>
      </RenderlesskitProvider>
    );
  },
];
