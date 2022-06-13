import { Config } from "@tailwindcss/config";

// Cannot use generic constraints in T because it would then infer the Config and `preset`,
// would not be able to infer `component` keys which would break the typesafe component extends.
// So by doing this we can get both typesafe intellisense in the tailwind config and also the component extends
export function preset<T>(arg: Config & T): T;
