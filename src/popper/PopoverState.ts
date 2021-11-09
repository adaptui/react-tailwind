import * as React from "react";

import {
  ALIGN_OPTIONS,
  getPlacementData,
  PlacementData,
  SIDE_OPTIONS,
} from "./index";
import { useRect } from "./useRect";
import { useSize } from "./useSize";

export type PopoverState = PlacementData & {
  sideIndex: number;
  alignIndex: number;
  sideOffset: number;
  alignOffset: number;
  arrowOffset: number;
  collisionTolerance: number;
  anchor: HTMLDivElement | null;
  popper: HTMLDivElement | null;
  arrow: HTMLDivElement | null;
};

export type PopoverActions = {
  setSideIndex: React.Dispatch<React.SetStateAction<number>>;
  setAlignIndex: React.Dispatch<React.SetStateAction<number>>;
  setSideOffset: React.Dispatch<React.SetStateAction<number>>;
  setAlignOffset: React.Dispatch<React.SetStateAction<number>>;
  setArrowOffset: React.Dispatch<React.SetStateAction<number>>;
  setCollisionTolerance: React.Dispatch<React.SetStateAction<number>>;
  setAnchor: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
  setPopper: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
  setArrow: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
};

export type PopoverStateReturn = PopoverState & PopoverActions;

export type PopoverInitialState = Partial<
  Pick<
    PopoverState,
    | "sideIndex"
    | "alignIndex"
    | "sideOffset"
    | "alignOffset"
    | "arrowOffset"
    | "collisionTolerance"
  >
> & {
  enableCollisionsDetection?: boolean;
};

export const usePopoverState = (
  props: PopoverInitialState = {},
): PopoverStateReturn => {
  const {
    enableCollisionsDetection,
    sideIndex: initialSideIndex = 1,
    alignIndex: initialAlignIndex = 0,
    sideOffset: initialSideOffset = 5,
    alignOffset: initialAlignOffset = 0,
    arrowOffset: initialArrowOffset = 20,
    collisionTolerance: initialCollisionTolerance = 0,
  } = props;
  const [sideIndex, setSideIndex] = React.useState(initialSideIndex);
  const [alignIndex, setAlignIndex] = React.useState(initialAlignIndex);
  const [sideOffset, setSideOffset] = React.useState(initialSideOffset);
  const [alignOffset, setAlignOffset] = React.useState(initialAlignOffset);
  const [arrowOffset, setArrowOffset] = React.useState(initialArrowOffset);
  const [collisionTolerance, setCollisionTolerance] = React.useState(
    initialCollisionTolerance,
  );

  const side = SIDE_OPTIONS[sideIndex];
  const align = ALIGN_OPTIONS[alignIndex];

  const [anchor, setAnchor] = React.useState<HTMLDivElement | null>(null);
  const anchorRect = useRect(anchor);

  const [popper, setPopper] = React.useState<HTMLDivElement | null>(null);
  const popperSize = useSize(popper);

  const [arrow, setArrow] = React.useState<HTMLDivElement | null>(null);
  const arrowSize = useSize(arrow);

  const placementData = getPlacementData({
    popperSize,
    anchorRect,
    arrowSize,
    arrowOffset,
    side,
    sideOffset,
    align,
    alignOffset,
    shouldAvoidCollisions: enableCollisionsDetection,
    collisionBoundariesRect: DOMRect.fromRect({
      width: window.innerWidth,
      height: window.innerHeight,
      x: 0,
      y: 0,
    }),
    collisionTolerance,
  });

  return {
    ...placementData,
    sideIndex,
    alignIndex,
    sideOffset,
    alignOffset,
    arrowOffset,
    collisionTolerance,
    anchor,
    popper,
    arrow,
    setSideIndex,
    setAlignIndex,
    setSideOffset,
    setAlignOffset,
    setArrowOffset,
    setCollisionTolerance,
    setAnchor,
    setPopper,
    setArrow,
  };
};
