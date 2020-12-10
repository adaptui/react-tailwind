import { cx } from "@renderlesskit/react";
import { overrideTailwindClasses } from "tailwind-override";

import tailwindProperties from "../../tailwindProperties.json";

export const __DEV__ = process.env.NODE_ENV !== "production";

/**
 * Override base styles with those that come after like the css rules
 */
export const ocx = (...classNames: any[]) =>
  overrideTailwindClasses(cx(...classNames), {
    tailwindProperties: tailwindProperties,
  });
