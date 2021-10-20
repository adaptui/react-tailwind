import { Dict } from "../types";

export const objectKeys = <T extends Dict>(obj: T) =>
  Object.keys(obj) as unknown as (keyof T)[];
