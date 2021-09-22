import "focus-visible";

import "./tailwind.css";
import { RenderlesskitProvider } from "../src/theme";

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
      <RenderlesskitProvider>
        <Story />
      </RenderlesskitProvider>
    );
  },
];
