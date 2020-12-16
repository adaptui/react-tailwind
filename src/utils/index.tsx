import { cx } from "@renderlesskit/react";
import { overrideTailwindClasses } from "tailwind-override";

import { tailwindProperties } from "./tailwindProperties";

/**
 * Override base styles with those that come after like the css rules
 */
export const ocx = (...classNames: any[]) =>
  overrideTailwindClasses(cx(...classNames), {
    tailwindProperties: tailwindProperties,
  });
