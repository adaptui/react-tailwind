import "../src/button/stories/style.css";
import tailwindConfig from "../tailwind.config";
import { RenderlesskitProvider } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story, context) => {
    return (
      <RenderlesskitProvider tailwindConfig={tailwindConfig}>
        <div className="font-sans">
          <Story />
        </div>
      </RenderlesskitProvider>
    );
  },
];
