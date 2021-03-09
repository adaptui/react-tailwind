import { objectKeys } from "../../../utils";
import { Toast } from "../index";
import { ToastPlacement } from "../ToastTypes";

export const genId = (() => {
  let count = 0;
  return () => {
    return (++count).toString();
  };
})();

export const getToast = (toasts: Toast[], toastId: string) => {
  const index = toasts.findIndex(toast => toast.id === toastId);
  return toasts[index];
};

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

      acc[`${side}-center`] = [
        ...acc[`${side}-center`],
        ...sortedToasts[placement],
      ];

      return acc;
    },
    { "bottom-center": [] as Toast[], "top-center": [] as Toast[] },
  );
