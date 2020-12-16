import { kebabCase } from "lodash";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story, context) => {
    document.body.id = kebabCase(context.kind);
    return <Story />;
  },
];
