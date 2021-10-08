const fetch = require("node-fetch");
const { outdent } = require("outdent");
const { joinCwd, extractCode } = require("./utils/common-utils");

const getSandboxShortURL = async templates => {
  const body = getSandboxContents(
    {
      js: templates.js ? extractCode(joinCwd(templates.js)) : undefined,
      css: templates.css ? extractCode(joinCwd(templates.css)) : undefined,
      utils: templates.utils
        ? extractCode(joinCwd(templates.utils))
        : undefined,
    },
    templates.deps && templates.deps,
  );

  // fetching the sandbox_id, otherwise the URL would be longer
  const response = await fetch(
    "https://codesandbox.io/api/v1/sandboxes/define?json=1",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body,
    },
  );
  const json = await response.json();
  const sandboxLink = `https://codesandbox.io/s/${json.sandbox_id}`;

  return sandboxLink;
};

const getSandboxContents = (files, extraDeps) => {
  const deps = {
    "@renderlesskit/react-tailwind": "latest",
    "deep-merge": "latest",
    next: "latest",
    react: "latest",
    "react-dom": "latest",
    ...(extraDeps &&
      extraDeps.reduce((curr, next) => {
        return { ...curr, ...resolveVersion(next) };
      }, {})),
  };

  return JSON.stringify({
    files: {
      "component/index.js": {
        content: files.js,
      },
      "pages/_app.js": {
        content: outdent`
          import { RenderlesskitProvider } from "@renderlesskit/react-tailwind";

          import "./styles.css";
          import theme from "../renderlesskit.config";

          function MyApp({ Component, pageProps }) {
            return (
              <RenderlesskitProvider extend={theme}>
                <Component {...pageProps} />
              </RenderlesskitProvider>
            );
          }

          export default MyApp;
        `,
      },
      "pages/index.js": {
        content: outdent`
          import Head from "next/head";
          import Component from "../component";

          export default function Home() {
            return (
              <div>
                <Head>
                  <title>Renderlesskit React Tailwind Example</title>
                  <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="flex m-10 space-x-2">
                  <Component />
                </main>
              </div>
            );
          }
        `,
      },
      "pages/styles.css": {
        content: outdent`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
      `,
      },
      "renderlesskit.config.js": {
        content: outdent`
          import { extendTheme } from "@renderlesskit/react-tailwind";

          export const theme = extendTheme({
            // This only affected the Storybook, doesn't go or merge when used this config as preset
            extend: {
              button: {
                variant: {
                  default: {
                    tertiary: "bg-purple-600 text-white",
                  },
                },
                size: {
                  default: {
                    xxl: "h-14 min-w-14 px-6 rounded-xl text-xl",
                  },
                },
              },
            },
          });

          export default theme;
        `,
      },
      "tailwind.config.js": {
        content: outdent`
          const path = require("path");
          const defaultTheme = require("tailwindcss/defaultTheme");

          const preset = require("@renderlesskit/react-tailwind/preset.js");

          module.exports = preset({
            mode: "jit",
            purge: [
              path.resolve(__dirname, "./components/**/*"),
              path.resolve(__dirname, "./pages/**/*"),
              path.resolve(__dirname, "./renderlesskit.config.ts"),
              "node_modules/@renderlesskit/react-tailwind/src/theme.tsx",
            ],

            theme: {
              extend: {}
            },
            variants: {},
            plugins: [],
          });
        `,
      },
      "postcss.config.js": {
        content: outdent`
          module.exports = {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          };
        `,
      },
      "package.json": {
        content: {
          name: "renderlesskit-react-tailwind",
          version: "1.0.0",
          private: true,
          scripts: {
            dev: "next dev",
            build: "next build",
            start: "next start",
          },
          dependencies: { ...deps },
          devDependencies: {
            tailwindcss: "latest",
            autoprefixer: "latest",
            postcss: "latest",
          },
        },
      },
    },
  });
};

const resolveVersion = userModule => {
  const packageDendencies = {};
  const result = /^(@*[^@]+)@*([^@/]+)*$/g.exec(userModule);
  const name = result ? result[1] : userModule;
  const version = result && result[2] ? result[2] : "latest";
  packageDendencies[name] = version;
  return packageDendencies;
};

const url = getSandboxShortURL({
  js: "./src/box/stories/templates/BoxBasicJsx.ts",
});
console.log("%curl", "color: #917399", url.then(console.log));
