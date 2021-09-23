import { mergeExtensions, mergeThemes } from "./mergeThemes";

describe("mergeThemes", () => {
  test("merges two empty themes together", () => {
    const userTheme = {};
    const defaultTheme = {};
    const deepTheme = mergeThemes([userTheme, defaultTheme]);

    expect(deepTheme).toEqual({ extend: {} });
    expect(mergeExtensions(deepTheme)).toEqual({});
  });

  test("merges two themes together without extend", () => {
    const userTheme = { alert: { base: "bg-red-100" } };
    const defaultTheme = {
      alert: { base: "bg-green-100", sizes: {} },
    };

    const deepTheme = mergeThemes([userTheme, defaultTheme]);

    expect(deepTheme).toEqual({
      alert: { base: "bg-red-100" },
      extend: {},
    });
    expect(mergeExtensions(deepTheme)).toEqual({
      alert: { base: "bg-red-100" },
    });
  });

  test("merges two themes together with extend", () => {
    const userTheme = {
      extend: {
        button: {
          variant: {
            tertiary: "bg-purple-600 text-white",
          },
        },
      },
    };
    const defaultTheme = {
      button: { base: "bg-green-100", sizes: {} },
    };

    // @ts-ignore
    const deepTheme = mergeThemes([userTheme, defaultTheme]);

    expect(deepTheme).toEqual({
      button: { base: "bg-green-100", sizes: {} },
      extend: {
        button: [
          {
            variant: {
              tertiary: "bg-purple-600 text-white",
            },
          },
        ],
      },
    });

    expect(mergeExtensions(deepTheme)).toEqual({
      button: {
        sizes: {},
        base: "bg-green-100",
        variant: {
          tertiary: "bg-purple-600 text-white",
        },
      },
    });
  });
});
