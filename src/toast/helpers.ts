import { objectKeys } from "../utils";

import { Toast, ToastPlacement } from "./ToastTypes";

export type SortedToastList = Record<ToastPlacement, Toast[]>;

export const getPlacementSortedToasts = (toasts: Toast[]) =>
  toasts.reduce((acc, curr) => {
    if (!acc[curr.placement]) acc[curr.placement] = [];
    acc[curr.placement].push(curr);
    return acc;
  }, {} as SortedToastList);

export const mobileSortedToasts = (sortedToasts: SortedToastList) =>
  objectKeys(sortedToasts).reduce(
    (acc, placement) => {
      const [side] = placement.split("-");

      // @ts-ignore
      acc[`${side}-center`] = [
        // @ts-ignore
        ...acc[`${side}-center`],
        ...sortedToasts[placement],
      ];

      return acc;
    },
    { "bottom-center": [] as Toast[], "top-center": [] as Toast[] },
  );
