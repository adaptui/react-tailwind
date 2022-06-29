import "focus-visible";

import "./tailwind.css";
import theme from "../adaptui.config";
import { AdaptUIProvider } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  storySort: {
    order: ["Primitives", "Forms", "Popups"],
  },
};

export const decorators = [
  Story => {
    document.body.classList.add("font-sans");
    document.body.classList.add("antialiased");

    return (
      <AdaptUIProvider extend={theme}>
        <Story />
      </AdaptUIProvider>
    );
  },
];
