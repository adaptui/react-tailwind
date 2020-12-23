const { kebabCase } = require("lodash");

module.exports = components => {
  return function componentPlugin({ addComponents, theme }) {
    const getComponentCSSObject = components => {
      const componentNames = Object.keys(components);

      const getThemeValues = (component, name, prop) => {
        if (!component[prop] || !component) return {};

        return Object.keys(component[prop])
          .map(s => `${kebabCase(name)}-${s}`)
          .reduce((prev, curr) => {
            return {
              ...prev,
              [`.${curr}`]: {
                [`@apply ${theme(
                  `components.${name}.${prop}.${curr.replace(`${name}-`, "")}`,
                )}`]: {},
              },
            };
          }, {});
      };

      const getPropThemeValue = (name, prop) => {
        return {
          [`.${kebabCase(name)}-${prop}`]: {
            [`@apply ${theme(`components.${name}.${prop}`)}`]: {},
          },
        };
      };

      const getComponentClasses = componentNames => {
        return componentNames.reduce((prev, name) => {
          const base = getPropThemeValue(name, "base");
          const sizeKeys = getThemeValues(components[name], name, "size");
          const variantKeys = getThemeValues(components[name], name, "variant");
          const stokeKeys = getThemeValues(components[name], name, "stroke");

          return {
            ...prev,
            ...base,
            ...sizeKeys,
            ...variantKeys,
            ...stokeKeys,
            ...getPropThemeValue("buttonGroup", "attached"),
            ...getPropThemeValue("button", "prefix"),
            ...getPropThemeValue("button", "suffix"),
            ...getPropThemeValue("tag", "prefix"),
            ...getPropThemeValue("tag", "suffix"),
          };
        }, {});
      };

      const parsedComponents = getComponentClasses(componentNames);
      addComponents(parsedComponents);
    };

    getComponentCSSObject(components);
  };
};
