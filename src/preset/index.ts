import deepMerge from "deepmerge";
import renderlesskitConfig from "../../tailwind.config";

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
export function preset<T extends typeof renderlesskitConfig>(
  tailwindConfig: T,
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
