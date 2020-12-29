import { kebabCase } from "lodash";
import tailwindConfig from "../tailwind.config";
import { RenderlesskitProvider } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story, context) => {
    document.body.id = kebabCase(context.kind);

    return (
      <RenderlesskitProvider tailwindConfig={tailwindConfig}>
        <Story />
      </RenderlesskitProvider>
    );
  },
];
