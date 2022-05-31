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
      "@adaptui/react-tailwind": "0.0.1-alpha.33",
      next: "12.0.7",
      react: "17.0.2",
      "react-dom": "17.0.2",
    },
    devDependencies: {
      autoprefixer: "10.4.0",
      eslint: "8.5.0",
      "eslint-config-next": "12.0.7",
      postcss: "8.4.5",
      tailwindcss: "3.0.8",
    },
    files: {
      "pages/_app.js":
        'import { AdaptUIProvider } from "@adaptui/react-tailwind";\n\nimport "../styles/index.css";\nimport theme from "../adaptui.config";\n\nfunction MyApp({ Component, pageProps }) {\n  return (\n    <AdaptUIProvider extend={theme}>\n      <Component {...pageProps} />\n    </AdaptUIProvider>\n  );\n}\n\nexport default MyApp;\n',
      "pages/_document.js":
        "import Document, { Html, Head, Main, NextScript } from \"next/document\";\n\nclass MyDocument extends Document {\n  render() {\n    return (\n      <Html>\n        <Head>\n          <link href='https://rsms.me/inter/inter.css' rel='stylesheet' />\n        </Head>\n        <body>\n          <Main />\n          <NextScript />\n        </body>\n      </Html>\n    );\n  }\n}\n\nexport default MyDocument;\n",
      "pages/index.js":
        "import Head from \"next/head\";\nimport Component from \"../components\";\n\nexport default function Home() {\n  return (\n    <div>\n      <Head>\n        <title>AdaptUI React Tailwind Example</title>\n        <link rel='icon' href='/favicon.ico' />\n      </Head>\n\n      <main className='flex items-center justify-center min-h-screen'>\n        <Component />\n      </main>\n    </div>\n  );\n}\n",
      "styles/index.css":
        "@tailwind base;\n@tailwind components;\n@tailwind utilities;",
      ".babelrc": '{\n  "presets": ["next/babel"]\n}\n',
      ".eslintrc.json": '{\n  "extends": "next/core-web-vitals"\n}\n',
      ".gitignore":
        "# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n# dependencies\n/node_modules\n/.pnp\n.pnp.js\n\n# testing\n/coverage\n\n# next.js\n/.next/\n/out/\n\n# production\n/build\n\n# misc\n.DS_Store\n*.pem\n\n# debug\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n# local env files\n.env.local\n.env.development.local\n.env.test.local\n.env.production.local\n\n# vercel\n.vercel\n",
      "postcss.config.js":
        '// If you want to use other PostCSS plugins, see the following:\n// https://tailwindcss.com/docs/using-with-preprocessors\nmodule.exports = {\n  plugins: ["tailwindcss", "autoprefixer"],\n};\n',
      "README.md":
        "# next-tailwind-jit\n\n[View on Vercel](https://next-tailwind-jit.vercel.app/)\n\n[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/next-tailwind-jit-evzkdg)\n",
      "adaptui.config.js":
        'import { extendTheme } from "@adaptui/react-tailwind";\n\nexport const theme = extendTheme({\n  // This only affected the Storybook, doesn\'t go or merge when used this config as preset\n  extend: {\n    button: {\n      variant: {\n        default: {\n          tertiary: "bg-purple-600 text-white",\n        },\n      },\n      size: {\n        default: {\n          xxl: "h-14 min-w-14 px-6 rounded-xl text-xl",\n        },\n      },\n    },\n  },\n});\n\nexport default theme;\n',
      "tailwind.config.js":
        'module.exports = {\n  presets: [require("@adaptui/react-tailwind/preset")],\n  content: [\n    "./components/**/*",\n    "./pages/**/*",\n    "./adaptui.config.ts",\n    "node_modules/@adaptui/react-tailwind/**/*",\n  ],\n  theme: {},\n  variants: {},\n  plugins: [],\n};\n',
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
      "@adaptui/react-tailwind": "0.0.1-alpha.33",
      next: "12.0.7",
      react: "17.0.2",
      "react-dom": "17.0.2",
    },
    devDependencies: {
      "@types/node": "17.0.5",
      "@types/react": "17.0.38",
      "@types/react-dom": "17.0.11",
      autoprefixer: "10.4.0",
      eslint: "8.5.0",
      "eslint-config-next": "12.0.7",
      postcss: "8.4.5",
      tailwindcss: "3.0.8",
      typescript: "4.5.4",
    },
    files: {
      "pages/_app.tsx":
        'import type { AppProps } from "next/app";\nimport React from "react";\nimport { AdaptUIProvider } from "@adaptui/react-tailwind";\n\nimport "../styles/index.css";\nimport theme from "../adaptui.config";\n\nfunction MyApp({ Component, pageProps }: AppProps) {\n  return (\n    <AdaptUIProvider extend={theme}>\n      <Component {...pageProps} />\n    </AdaptUIProvider>\n  );\n}\n\nexport default MyApp;\n',
      "pages/_document.tsx":
        "import Document, { Html, Head, Main, NextScript } from \"next/document\";\n\nclass MyDocument extends Document {\n  render() {\n    return (\n      <Html>\n        <Head>\n          <link href='https://rsms.me/inter/inter.css' rel='stylesheet' />\n        </Head>\n        <body>\n          <Main />\n          <NextScript />\n        </body>\n      </Html>\n    );\n  }\n}\n\nexport default MyDocument;\n",
      "pages/index.tsx":
        "import type { NextPage } from \"next\";\nimport Head from \"next/head\";\n\nimport Component from \"../components\";\n\nconst Home: NextPage = () => {\n  return (\n    <div className=''>\n      <Head>\n        <title>Create Next App</title>\n        <meta name='description' content='Generated by create next app' />\n        <link rel='icon' href='/favicon.ico' />\n      </Head>\n\n      <main className='flex items-center justify-center min-h-screen'>\n        <Component />\n      </main>\n    </div>\n  );\n};\n\nexport default Home;\n",
      "styles/index.css":
        "@tailwind base;\n@tailwind components;\n@tailwind utilities;",
      ".babelrc": '{\n  "presets": ["next/babel"]\n}\n',
      ".eslintrc.json": '{\n  "extends": "next/core-web-vitals"\n}\n',
      ".gitignore":
        "# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n# dependencies\n/node_modules\n/.pnp\n.pnp.js\n\n# testing\n/coverage\n\n# next.js\n/.next/\n/out/\n\n# production\n/build\n\n# misc\n.DS_Store\n*.pem\n\n# debug\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n# local env files\n.env.local\n.env.development.local\n.env.test.local\n.env.production.local\n\n# vercel\n.vercel\n",
      "next-env.d.ts":
        '/// <reference types="next" />\n/// <reference types="next/image-types/global" />\n\n// NOTE: This file should not be edited\n// see https://nextjs.org/docs/basic-features/typescript for more information.\n',
      "postcss.config.js":
        '// If you want to use other PostCSS plugins, see the following:\n// https://tailwindcss.com/docs/using-with-preprocessors\nmodule.exports = {\n  plugins: ["tailwindcss", "autoprefixer"],\n};\n',
      "README.md":
        "# next-tailwind-jit-ts\n\n[View on Vercel](https://next-tailwind-jit-ts.vercel.app/)\n\n[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/github-jntzof)\n",
      "adaptui.config.js":
        'import { extendTheme } from "@adaptui/react-tailwind";\n\nexport const theme = extendTheme({\n  // This only affected the Storybook, doesn\'t go or merge when used this config as preset\n  extend: {\n    button: {\n      variant: {\n        default: {\n          tertiary: "bg-purple-600 text-white",\n        },\n      },\n      size: {\n        default: {\n          xxl: "h-14 min-w-14 px-6 rounded-xl text-xl",\n        },\n      },\n    },\n  },\n});\n\nexport default theme;\n',
      "tailwind.config.js":
        'module.exports = {\n  presets: [require("@adaptui/react-tailwind/preset")],\n  content: [\n    "./components/**/*",\n    "./pages/**/*",\n    "./adaptui.config.ts",\n    "node_modules/@adaptui/react-tailwind/**/*",\n  ],\n  theme: {},\n  variants: {},\n  plugins: [],\n};\n',
      "tsconfig.json":
        '{\n  "compilerOptions": {\n    "target": "es5",\n    "lib": ["dom", "dom.iterable", "esnext"],\n    "allowJs": true,\n    "skipLibCheck": true,\n    "strict": true,\n    "forceConsistentCasingInFileNames": true,\n    "noEmit": true,\n    "esModuleInterop": true,\n    "module": "esnext",\n    "moduleResolution": "node",\n    "resolveJsonModule": true,\n    "isolatedModules": true,\n    "jsx": "preserve",\n    "incremental": true\n  },\n  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],\n  "exclude": ["node_modules"]\n}\n',
      ...files,
    },
  };
};
