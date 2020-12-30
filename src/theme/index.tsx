import * as React from "react";
import { defaults, isString, isUndefined, mergeWith } from "lodash";
import { createContext } from "../utils";
import defaultTheme from "./defaultTheme";
import { cx } from "@renderlesskit/react";
import defaultTailwindProperties from "./defaultTailwindProperties";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

type DeepDictionary<K> = {
  [P in keyof K]: K[P] extends object
    ? DeepDictionary<K[P]> & { [x: string]: any }
    : K[P];
};

export type ThemeType = typeof defaultTheme;

export type ExtendThemeType = ThemeType & DeepPartial<{ extend: ThemeType }>;

export type ThemeContext = DeepDictionary<ThemeType>;

const [ThemeProvider, useTheme] = createContext<ThemeContext>({
  strict: false,
  name: "ThemeProvider",
});

export type OverrideContext = (...classNames: any[]) => string;

const [OverrideProvider, useOverride] = createContext<OverrideContext>({
  strict: false,
  name: "OverrideProvider",
});

export { useTheme, useOverride };

export type RenderlesskitProviderProps = {
  tailwindConfig?: any;
  theme?: ExtendThemeType;
  children?: React.ReactNode;
  tailwindProperties?: any;
};

export const RenderlesskitProvider = (props: RenderlesskitProviderProps) => {
  const {
    children,
    tailwindConfig = { components: {} },
    theme = defaultTheme,
    tailwindProperties = defaultTailwindProperties,
  } = props;

  const ocx = (...classNames: any[]) =>
    overrideTailwindClasses(cx(...classNames), {
      tailwindProperties: tailwindProperties,
    });

  const {
    components: userTheme,
  }: { components: ExtendThemeType } = tailwindConfig;
  const finalTheme: ThemeType = mergeExtensions(
    mergeThemes([userTheme, theme]),
    ocx,
  );

  return (
    <ThemeProvider value={finalTheme}>
      <OverrideProvider value={ocx}>{children}</OverrideProvider>
    </ThemeProvider>
  );
};

function mergeThemes(themes: ExtendThemeType[]) {
  return {
    ...themes.reduce((merged, theme) => defaults(merged, theme), {}),

    // In order to resolve n config objects, we combine all of their `extend` properties
    // into arrays instead of objects so they aren't overridden.
    extend: collectExtends(themes),
  };
}

function collectExtends(
  items: ExtendThemeType[],
): { [Key: string]: ExtendThemeType[] } {
  return items.reduce((merged, { extend }) => {
    return mergeWith(merged, extend, (mergedValue, extendValue) => {
      if (isUndefined(mergedValue)) {
        return [extendValue];
      }

      if (Array.isArray(mergedValue)) {
        return [extendValue, ...mergedValue];
      }

      return [extendValue, mergedValue];
    });
  }, {});
}

export function mergeExtensions(
  { extend, ...theme }: any,
  ocx: any,
): ExtendThemeType {
  return mergeWith(theme, extend, (themeValue, extendValue) => {
    return mergeWith(themeValue, ...extendValue, (merged: any, value: any) => {
      if (isString(merged) && isString(value)) {
        return ocx(merged, value);
      }

      return undefined;
    });
  });
}

const defaultOptions = {
  prefix: "",
  tailwindProperties: defaultTailwindProperties,
};

export const overrideTailwindClasses = (
  classNamesString: string,
  optionsArg: {
    prefix?: string;
    tailwindProperties?: { [key: string]: string[] };
  } = defaultOptions,
) => {
  const options = { ...defaultOptions, ...optionsArg };
  const classNames = classNamesString.split(/\s+/);

  const variantGroupedClassNames = classNames.reduce(
    (accumulator: { [key: string]: string[] }, className) => {
      const classNameWithoutPrefix = className.startsWith(options.prefix)
        ? className.substring(options.prefix.length)
        : className;

      if (!classNameWithoutPrefix.includes(":")) {
        if (!accumulator["base"]) {
          accumulator["base"] = [];
        }

        accumulator.base.push(classNameWithoutPrefix);
        return accumulator;
      }

      const [pseudoType, normalClassName] = classNameWithoutPrefix.split(":");

      if (!accumulator[pseudoType]) {
        accumulator[pseudoType] = [];
      }

      accumulator[pseudoType].push(normalClassName);
      return accumulator;
    },
    {},
  );

  const finalClassNames = Object.keys(variantGroupedClassNames).reduce(
    (accumulator: string[], variant) => {
      const overriddenClassNames = variantGroupedClassNames[variant].reduce(
        (
          result: { class: string; tailWindCssProperties: string[] }[],
          className: string,
        ) => {
          const propertiesForClass =
            // @ts-ignore
            (options.tailwindProperties[className] as string[]) || [];
          const nonClashingClasses = result.filter(
            // Should decide if `.some` or `.every` if problem arises.
            r =>
              !r.tailWindCssProperties.some(p =>
                propertiesForClass.includes(p),
              ),
          );
          return [
            ...nonClashingClasses,
            { class: className, tailWindCssProperties: propertiesForClass },
          ];
        },
        [],
      );

      if (variant === "base")
        return [
          ...accumulator,
          overriddenClassNames.map(c => c.class).join(" "),
        ];

      return [
        ...accumulator,
        overriddenClassNames.map(c => `${variant}:${c.class}`).join(" "),
      ];
    },
    [],
  );

  return finalClassNames.join(" ");
};
