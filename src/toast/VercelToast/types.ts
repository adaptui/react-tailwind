import { Toast as DefaultToast } from "../RenderlessToast/core";

export interface Toast extends DefaultToast {
  offsetGap: number;
  hoverOffsetGap: number;
  visibleToasts: number;
  frontHeight: number | null;
}
