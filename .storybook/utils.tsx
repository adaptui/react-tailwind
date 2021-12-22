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
  deps?: string[];
}

export function createPreviewTabs(props: Props) {
  const { js, ts, deps: extraDeps = [] } = props;
  const tabs = [];

  if (js) {
    tabs.push({
      tab: "JSX",
      template: js,
      language: "jsx",
      copy: true,
      codesandbox: NEXT_JS_CODESANDBOX([...extraDeps], {
        "components/index.js": { tab: "JSX" },
      }),
    });
  }

  if (ts) {
    tabs.push({
      tab: "TSX",
      template: ts,
      language: "tsx",
      copy: true,
      codesandbox: NEXT_TS_CODESANDBOX([...extraDeps], {
        "components/index.tsx": { tab: "TSX" },
      }),
    });
  }

  return tabs;
}

const NEXT_JS_CODESANDBOX: CodeSandboxTemplate = (
  userDependencies = [],
  files = {},
) => {
  return {
    template: "next",
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
      lint: "next lint",
    },
    dependencies: {
      "@renderlesskit/react-tailwind": "0.0.1-alpha.30",
      next: "12.0.3",
      react: "17.0.2",
      "react-dom": "17.0.2",
    },
    devDependencies: {
      autoprefixer: "10.4.0",
      eslint: "8.2.0",
      "eslint-config-next": "12.0.3",
      postcss: "8.3.11",
      tailwindcss: "2.2.19",
    },
    files: {
      "pages/_app.js":
        'import { RenderlesskitProvider } from "@renderlesskit/react-tailwind";\n\nimport "../styles/index.css";\nimport theme from "../renderlesskit.config";\n\nfunction MyApp({ Component, pageProps }) {\n  return (\n    <RenderlesskitProvider extend={theme}>\n      <Component {...pageProps} />\n    </RenderlesskitProvider>\n  );\n}\n\nexport default MyApp;\n',
      "pages/index.js":
        "import Head from \"next/head\";\nimport Component from \"../components\";\n\nexport default function Home() {\n  return (\n    <div>\n      <Head>\n        <title>Renderlesskit React Tailwind Example</title>\n        <link rel='icon' href='/favicon.ico' />\n      </Head>\n\n      <main className='flex items-center justify-center min-h-screen'>\n        <Component />\n      </main>\n    </div>\n  );\n}\n",
      "styles/index.css":
        "@tailwind base;\n@tailwind components;\n@tailwind utilities;",
      ".babelrc": '{\n  "presets": ["next/babel"]\n}\n',
      ".eslintrc.json": '{\n  "extends": "next/core-web-vitals"\n}\n',
      ".gitignore":
        "# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n# dependencies\n/node_modules\n/.pnp\n.pnp.js\n\n# testing\n/coverage\n\n# next.js\n/.next/\n/out/\n\n# production\n/build\n\n# misc\n.DS_Store\n*.pem\n\n# debug\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n# local env files\n.env.local\n.env.development.local\n.env.test.local\n.env.production.local\n\n# vercel\n.vercel\n",
      "postcss.config.js":
        "module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n};\n",
      "README.md":
        "# next-tailwind-jit\n\n[View on Vercel](https://next-tailwind-jit.vercel.app/)\n\n[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/next-tailwind-jit-evzkdg)\n",
      "renderlesskit.config.js":
        'import { extendTheme } from "@renderlesskit/react-tailwind";\n\nexport const theme = extendTheme({\n  // This only affected the Storybook, doesn\'t go or merge when used this config as preset\n  extend: {\n    button: {\n      variant: {\n        default: {\n          tertiary: "bg-purple-600 text-white",\n        },\n      },\n      size: {\n        default: {\n          xxl: "h-14 min-w-14 px-6 rounded-xl text-xl",\n        },\n      },\n    },\n  },\n});\n\nexport default theme;\n',
      "tailwind.config.js":
        'const path = require("path");\n\nconst preset = require("@renderlesskit/react-tailwind/preset");\n\nmodule.exports = preset({\n  mode: "jit",\n  purge: [\n    path.resolve(__dirname, "./components/**/*"),\n    path.resolve(__dirname, "./pages/**/*"),\n    path.resolve(__dirname, "./renderlesskit.config.ts"),\n    "node_modules/@renderlesskit/react-tailwind/**/*",\n  ],\n  theme: {\n    extend: {},\n  },\n  variants: {},\n  plugins: [],\n});\n',
      ...files,
    },
  };
};

const NEXT_TS_CODESANDBOX: CodeSandboxTemplate = (
  userDependencies = [],
  files = {},
) => {
  return {
    template: "next",
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
      lint: "next lint",
    },
    dependencies: {
      "@renderlesskit/react-tailwind": "0.0.1-alpha.30",
      next: "12.0.3",
      react: "17.0.2",
      "react-dom": "17.0.2",
    },
    devDependencies: {
      "@types/react": "17.0.34",
      autoprefixer: "10.4.0",
      eslint: "8.2.0",
      "eslint-config-next": "12.0.3",
      postcss: "8.3.11",
      tailwindcss: "2.2.19",
      typescript: "4.4.4",
    },
    files: {
      "pages/_app.tsx":
        'import type { AppProps } from "next/app";\nimport React from "react";\nimport { RenderlesskitProvider } from "@renderlesskit/react-tailwind";\n\nimport "../styles/index.css";\nimport theme from "../renderlesskit.config";\n\nfunction MyApp({ Component, pageProps }: AppProps) {\n  return (\n    <RenderlesskitProvider extend={theme}>\n      <Component {...pageProps} />\n    </RenderlesskitProvider>\n  );\n}\n\nexport default MyApp;\n',
      "pages/index.tsx":
        "import type { NextPage } from \"next\";\nimport Head from \"next/head\";\n\nimport Component from \"../components\";\n\nconst Home: NextPage = () => {\n  return (\n    <div className=''>\n      <Head>\n        <title>Create Next App</title>\n        <meta name='description' content='Generated by create next app' />\n        <link rel='icon' href='/favicon.ico' />\n      </Head>\n\n      <main className='flex items-center justify-center min-h-screen'>\n        <Component />\n      </main>\n    </div>\n  );\n};\n\nexport default Home;\n",
      "styles/index.css":
        "@tailwind base;\n@tailwind components;\n@tailwind utilities;",
      ".babelrc": '{\n  "presets": ["next/babel"]\n}\n',
      ".eslintrc.json": '{\n  "extends": "next/core-web-vitals"\n}\n',
      ".gitignore":
        "# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n# dependencies\n/node_modules\n/.pnp\n.pnp.js\n\n# testing\n/coverage\n\n# next.js\n/.next/\n/out/\n\n# production\n/build\n\n# misc\n.DS_Store\n*.pem\n\n# debug\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n# local env files\n.env.local\n.env.development.local\n.env.test.local\n.env.production.local\n\n# vercel\n.vercel\n",
      "next-env.d.ts":
        '/// <reference types="next" />\n/// <reference types="next/types/global" />\n/// <reference types="next/image-types/global" />\n\n// NOTE: This file should not be edited\n// see https://nextjs.org/docs/basic-features/typescript for more information.\n',
      "postcss.config.js":
        "module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n};\n",
      "README.md":
        "# next-tailwind-jit-ts\n\n[View on Vercel](https://next-tailwind-jit-ts.vercel.app/)\n\n[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/github-jntzof)\n",
      "renderlesskit.config.js":
        'import { extendTheme } from "@renderlesskit/react-tailwind";\n\nexport const theme = extendTheme({\n  // This only affected the Storybook, doesn\'t go or merge when used this config as preset\n  extend: {\n    button: {\n      variant: {\n        default: {\n          tertiary: "bg-purple-600 text-white",\n        },\n      },\n      size: {\n        default: {\n          xxl: "h-14 min-w-14 px-6 rounded-xl text-xl",\n        },\n      },\n    },\n  },\n});\n\nexport default theme;\n',
      "tailwind.config.js":
        'const path = require("path");\n\nconst preset = require("@renderlesskit/react-tailwind/preset");\n\nmodule.exports = preset({\n  mode: "jit",\n  purge: [\n    path.resolve(__dirname, "./components/**/*"),\n    path.resolve(__dirname, "./pages/**/*"),\n    path.resolve(__dirname, "./renderlesskit.config.ts"),\n    "node_modules/@renderlesskit/react-tailwind/**/*",\n  ],\n  theme: {\n    extend: {},\n  },\n  variants: {},\n  plugins: [],\n});\n',
      "tsconfig.json":
        '{\n  "compilerOptions": {\n    "target": "es5",\n    "lib": ["dom", "dom.iterable", "esnext"],\n    "allowJs": true,\n    "skipLibCheck": true,\n    "strict": true,\n    "forceConsistentCasingInFileNames": true,\n    "noEmit": true,\n    "esModuleInterop": true,\n    "module": "esnext",\n    "moduleResolution": "node",\n    "resolveJsonModule": true,\n    "isolatedModules": true,\n    "jsx": "preserve",\n    "incremental": true\n  },\n  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],\n  "exclude": ["node_modules"]\n}\n',
      ...files,
    },
  };
};
