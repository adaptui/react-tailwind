import { BoxProps } from "../box";
import { createComponent } from "./Alert";

export type AlertDescriptionProps = BoxProps & {};

export const AlertDescription = createComponent<AlertDescriptionProps>(
  "description",
  "AlertDescription",
);
