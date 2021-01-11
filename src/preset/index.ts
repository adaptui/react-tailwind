import deepMerge from "deepmerge";
// @ts-ignore
// import renderlesskitConfig from "/src/tailwind.config";

function arrayMergeFn(destinationArray: any[], sourceArray: any) {
  return destinationArray
    .concat(sourceArray)
    .reduce((acc: string | any[], cur: any) => {
      if (acc.includes(cur)) return acc;
      return [...acc, cur];
    }, []);
}

/**
 * Merge renderlesskit and Tailwind CSS configurations
 */
export function preset<T extends { [x: string]: any; purge: any }, K extends T>(
  tailwindConfig: T,
  renderlesskitConfig: K,
): T {
  let purge;
  if (Array.isArray(tailwindConfig.purge)) {
    purge = {
      content: tailwindConfig.purge,
    };
  } else {
    purge = tailwindConfig.purge;
  }
  // @ts-ignore
  return deepMerge({ ...tailwindConfig, purge }, renderlesskitConfig, {
    // @ts-ignore
    arrayMerge: arrayMergeFn,
  });
}
