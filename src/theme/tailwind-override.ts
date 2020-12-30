import defaultTailwindProperties from "./defaultTailwindProperties";

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
