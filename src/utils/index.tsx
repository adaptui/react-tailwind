import { cx } from "@renderlesskit/react";

import tailwindProperties from "../../tailwindProperties.json";

export const __DEV__ = process.env.NODE_ENV !== "production";

const defaultOptions = {
  prefix: "",
  tailwindProperties,
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
  return classNames
    .reduce(
      (
        result: { class: string; tailWindCssProperties: string[] }[],
        className: string,
      ) => {
        const classNameWithoutPrefix = className.startsWith(options.prefix)
          ? className.substring(options.prefix.length)
          : className;
        const propertiesForClass =
          // @ts-ignore
          (options.tailwindProperties[classNameWithoutPrefix] as string[]) ||
          [];
        const nonClashingClasses = result.filter(
          r =>
            !r.tailWindCssProperties.some(p => propertiesForClass.includes(p)),
        );
        return [
          ...nonClashingClasses,
          { class: className, tailWindCssProperties: propertiesForClass },
        ];
      },
      [],
    )
    .map(r => r.class)
    .join(" ");
};

/**
 * Override base styles with those that come after like the css rules
 */
export const ocx = (...classNames: any[]) =>
  overrideTailwindClasses(cx(...classNames), {
    tailwindProperties: tailwindProperties,
  });
