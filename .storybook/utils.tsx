import * as React from "react";
import type { Story } from "@storybook/react";
import { CodeSandboxTemplate } from "storybook-addon-preview";

import theme from "../src/theme/defaultTheme";

export const storyTemplate =
  <ComponentProps,>(
    Component: React.FC<ComponentProps>,
    defaultArgs?: Partial<ComponentProps>,
  ) =>
  (props: ComponentProps) => {
    const base: Story<ComponentProps> = args => <Component {...args} />;

    base.args = { ...defaultArgs, ...props };

    return base;
  };

export const createUnionControl = (keys: any) => {
  return {
    options: Array.isArray(keys) ? keys : Object.keys(keys),
    control: {
      type: "inline-radio",
    },
  };
};

type CreateControlsOptions = {
  unions?: string[];
  ignore?: string[];
  allow?: string[];
};

export const createControls = (
  component?: string,
  options?: CreateControlsOptions,
) => {
  try {
    const controls = (options?.unions || []).reduce((cur, key) => {
      if (!component) return cur;

      const value = (theme as Record<string, any>)[component][key];

      if (!value) return cur;
      return {
        ...cur,
        [key]: createUnionControl(value),
      };
    }, {});

    const ignoredControls = (options?.ignore || []).reduce((cur, key) => {
      return {
        ...cur,
        [key]: { table: { disable: true } },
      };
    }, {});

    const allowedControls = (options?.allow || []).reduce((cur, key) => {
      return {
        ...cur,
        [key]: { table: { disable: true } },
      };
    }, {});

    return { ...controls, ...ignoredControls, ...allowedControls };
  } catch (e) {
    console.log(e);
  }
};

interface Props {
  js?: string;
  ts?: string;
  jsUtils?: string;
  tsUtils?: string;
  css?: string;
  deps?: string[];
}

export function createPreviewTabs(props: Props) {
  const { js, ts, jsUtils, tsUtils, css, deps: extraDeps = [] } = props;
  const deps = [...extraDeps];
  const tabs = [];

  if (js) {
    tabs.push({
      tab: "JSX",
      template: js,
      language: "jsx",
      copy: true,
      codesandbox: NEXTJS_CUSTOM_CODESANDBOX(deps),
    });
  }

  if (jsUtils) {
    tabs.push({
      tab: "UtilsJSX",
      template: jsUtils,
      language: "jsx",
      copy: true,
      codesandbox: NEXTJS_CUSTOM_CODESANDBOX(deps),
    });
  }

  if (ts) {
    tabs.push({
      tab: "TSX",
      template: ts,
      language: "tsx",
      copy: true,
      codesandbox: NEXTTS_CUSTOM_CODESANDBOX(deps),
    });
  }

  if (tsUtils) {
    tabs.push({
      tab: "UtilsTSX",
      template: tsUtils,
      language: "tsx",
      copy: true,
      codesandbox: NEXTTS_CUSTOM_CODESANDBOX(deps),
    });
  }

  if (css) {
    tabs.push({
      tab: "CSS",
      template: css,
      language: "css",
      copy: true,
    });
  }

  return tabs;
}

const joinStrs = (strs: string[]) => {
  return `[${strs.map(str => `"${str}"`).join(", ")}]`;
};

const NEXTJS_CUSTOM_CODESANDBOX = (dependencies: string[]) =>
  new Function(`
var previews = arguments[0];
return {
    framework: "nextjs",
    files: {
        "components/index.js": previews["JSX"][0],
        ...(previews["UtilsJSX"] ? {"component/Utils.component.js": previews["UtilsJSX"][0]} : {}),
    },
    userDependencies: ${joinStrs(dependencies)},
};`) as CodeSandboxTemplate;

const NEXTTS_CUSTOM_CODESANDBOX = (dependencies: string[]) =>
  new Function(`
var previews = arguments[0];
return {
    framework: "next",
    files: {
        "components/index.tsx": previews["TSX"][0],
        ...(previews["UtilsTSX"] ? {"src/Utils.component.tsx": previews["UtilsTSX"][0]} : {}),
    },
    userDependencies: ${joinStrs(dependencies)},
};`) as CodeSandboxTemplate;
