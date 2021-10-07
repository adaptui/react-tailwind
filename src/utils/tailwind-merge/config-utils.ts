import { createClassUtils } from "./class-utils";
import { getLruCache } from "./lru-cache";
import { createPrefixUtils } from "./prefix-utils";
import { Config } from "./types";

export type ConfigUtils = ReturnType<typeof createConfigUtils>;

export function createConfigUtils(config: Config) {
  return {
    cache: getLruCache<string>(config.cacheSize),
    ...createPrefixUtils(config),
    ...createClassUtils(config),
  };
}
