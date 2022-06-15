import { addDecorator } from "@storybook/react";
import { withPropsTable } from "storybook-addon-react-docgen";
import "focus-visible";

import "./tailwind.css";
import theme from "../adaptui.config.ts";
import { AdaptUIProvider } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  storySort: {
    method: "alphabetical",
    order: ["Primitives", "Forms", "Popups"],
  },
};

export const decorators = [
  (Story, context) => {
    document.body.classList.add("font-sans");
    document.body.classList.add("antialiased");

    return (
      <AdaptUIProvider extend={theme}>
        <Story />
      </AdaptUIProvider>
    );
  },
];

addDecorator(withPropsTable);
