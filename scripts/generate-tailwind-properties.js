const spawnSync = require("child_process").spawnSync;

const styles = {
  // got these from playing around with what I found from:
  // https://github.com/istanbuljs/istanbuljs/blob/0f328fd0896417ccb2085f4b7888dd8e167ba3fa/packages/istanbul-lib-report/lib/file-writer.js#L84-L96
  // they're the best I could find that works well for light or dark terminals
  success: { open: "\u001b[32;1m", close: "\u001b[0m" },
  danger: { open: "\u001b[31;1m", close: "\u001b[0m" },
  info: { open: "\u001b[36;1m", close: "\u001b[0m" },
  subtitle: { open: "\u001b[2;1m", close: "\u001b[0m" },
};

function color(modifier, string) {
  return styles[modifier].open + string + styles[modifier].close;
}

function run(title, subtitle, command, options) {
  options = options || {};

  console.log(color("info", "▶️  Starting: To generate " + title + "\n"));
  console.log(color("subtitle", subtitle + "\n"));
  console.log(
    color("subtitle", "Running the following command: " + command + "\n"),
  );

  var result = spawnSync(command, { stdio: "inherit", shell: true });

  if (result.status !== 0 && !options.ignoreFailure) {
    console.error(
      color(
        "danger",
        "    🚨  Failure: " +
          title +
          ". Please review the messages above for information on how to troubleshoot and resolve this issue. \n",
      ),
    );
    process.exit(result.status);
  }

  console.log(color("success", "✅  Success: Generated " + title + "\n\n"));
}

console.log(color("info", "\n▶️  Checking for npx compatability \n"));

const error = spawnSync("npx --version", { shell: true })
  .stderr.toString()
  .trim();

if (error) {
  console.error(
    color(
      "danger",
      "🚨  npx is not available on this computer. Please install npm@5.2.0 or greater \n",
    ),
  );
  throw error;
}

console.log(color("success", "✅  npx is available \n"));

const cliArgs = process.argv.slice(2);
const inputTailwindCssFile = cliArgs[0] || "";
const outputTailwindcssFile = cliArgs[1] || "./tailwind.css";

run(
  "Tailwind CSS",
  "Tailwind CSS file from the input file by infering the default config location...",
  `npx tailwindcss-cli@latest build ${inputTailwindCssFile} -o ${outputTailwindcssFile}`,
);

run(
  "Tailwind Override Properties",
  "TailwindCSS Properties for Overrides from the above generated file...",
  `npx tailwind-override --inputFile ${outputTailwindcssFile} --outputFile tailwindProperties.json > /dev/null`,
);
