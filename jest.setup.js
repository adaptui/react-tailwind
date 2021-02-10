const {
  matcherHint,
  printReceived,
  printExpected,
} = require("jest-matcher-utils");
const { toHaveNoViolations: axeMatchers } = require("jest-axe");
const matchers = require("@testing-library/jest-dom/matchers");
const { configureToMatchImageSnapshot } = require("jest-image-snapshot");

// Consider [aria-activedescendant="${id}"] #${id} as the focused element.
function toHaveFocus(element) {
  const result = matchers.toHaveFocus.call(this, element);
  const { activeElement } = element.ownerDocument;
  const activeId =
    activeElement && activeElement.getAttribute("aria-activedescendant");
  return {
    ...result,
    pass: result.pass || activeId === element.id,
    message: () => {
      if (activeId) {
        return [
          matcherHint(`${this.isNot ? ".not" : ""}.toHaveFocus`, "element", ""),
          "",
          "Expected:",
          `  ${printExpected(element)}`,
          "Received:",
          `  ${printReceived(element.ownerDocument.getElementById(activeId))}`,
        ].join("\n");
      }
      return result.message();
    },
  };
}

const customConfig = {
  threshold: 0.01,
  failureThresholdType: "percent",
};
const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: customConfig,
});
expect.extend({ toMatchImageSnapshot });

expect.extend({
  ...matchers,
  ...axeMatchers,
  toHaveFocus,
  toMatchImageSnapshot,
});
