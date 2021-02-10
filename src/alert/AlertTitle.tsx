import { BoxProps } from "../box";
import { createComponent } from "./Alert";

export type AlertTitleProps = BoxProps & {};

export const AlertTitle = createComponent<AlertTitleProps>(
  "title",
  "AlertTitle",
);
