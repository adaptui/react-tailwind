import * as React from "react";
import {
  unstable_IdActions,
  unstable_IdInitialState,
  unstable_IdState,
  unstable_useIdState,
} from "reakit";
import { useControllableState } from "@renderlesskit/react";

export type ShowMoreState = unstable_IdState & {
  /**
   * Whether it's visible or not.
   */
  visible: boolean;

  /**
   * Duration of the transition.
   *
   */
  duration?: number;

  /**
   * Direction of the transition.
   *
   * @default vertical
   */
  direction: "vertical" | "horizontal";

  /**
   * Size of the content.
   *
   * @default 0
   */
  contentSize: number;

  /**
   * Transition Easing.
   *
   * @default cubic-bezier(0.4, 0, 0.2, 1)
   */
  easing: string;
};

export type ShowMoreActions = unstable_IdActions & {
  /**
   * Changes the `visible` state to `true`
   */
  show: () => void;

  /**
   * Changes the `visible` state to `false`
   */
  hide: () => void;

  /**
   * Toggles the `visible` state
   */
  toggle: () => void;

  /**
   * Sets `visible`.
   */
  setVisible: React.Dispatch<React.SetStateAction<ShowMoreState["visible"]>>;

  onExpandStart?: () => void;
  onExpandEnd?: () => void;
  onCollapseStart?: () => void;
  onCollapseEnd?: () => void;
};

export type ShowMoreStateReturn = ShowMoreState & ShowMoreActions;

export type ShowMoreInitialState = unstable_IdInitialState &
  Partial<
    Pick<
      ShowMoreState,
      "visible" | "direction" | "contentSize" | "easing" | "duration"
    >
  > &
  Pick<
    ShowMoreActions,
    "onExpandStart" | "onExpandEnd" | "onCollapseStart" | "onCollapseEnd"
  > & {
    defaultVisible?: boolean;
    visible?: boolean;
    onVisibleChange?: (visible: boolean) => void;
  };

const easeInOut = "cubic-bezier(0.4, 0, 0.2, 1)";

export const useShowMoreState = (
  props: ShowMoreInitialState = {},
): ShowMoreStateReturn => {
  const {
    defaultVisible = false,
    visible: initialVisible,
    onVisibleChange,
    direction = "vertical",
    contentSize = 0,
    duration,
    easing = easeInOut,
    onCollapseEnd,
    onCollapseStart,
    onExpandEnd,
    onExpandStart,
  } = props;
  const id = unstable_useIdState();
  const [visible, setVisible] = useControllableState({
    defaultValue: defaultVisible,
    value: initialVisible,
    onChange: onVisibleChange,
  });

  const show = React.useCallback(() => setVisible(true), [setVisible]);
  const hide = React.useCallback(() => setVisible(false), [setVisible]);
  const toggle = React.useCallback(() => setVisible(v => !v), [setVisible]);

  return {
    ...id,
    visible,
    direction,
    contentSize,
    duration,
    easing,
    show,
    hide,
    toggle,
    setVisible,
    onCollapseEnd,
    onCollapseStart,
    onExpandEnd,
    onExpandStart,
  };
};
