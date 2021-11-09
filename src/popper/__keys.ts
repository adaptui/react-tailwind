// Automatically generated
export const POPOVER_STATE_KEYS = [
  "popperStyles",
  "arrowStyles",
  "placedSide",
  "placedAlign",
  "sideIndex",
  "alignIndex",
  "sideOffset",
  "alignOffset",
  "arrowOffset",
  "collisionTolerance",
  "anchor",
  "popper",
  "arrow",
  "setSideIndex",
  "setAlignIndex",
  "setSideOffset",
  "setAlignOffset",
  "setArrowOffset",
  "setCollisionTolerance",
  "setAnchor",
  "setPopper",
  "setArrow",
] as const;
export const USE_POPOVER_STATE_KEYS = [
  "sideIndex",
  "alignIndex",
  "sideOffset",
  "alignOffset",
  "arrowOffset",
  "collisionTolerance",
  "enableCollisionsDetection",
] as const;
export const ARROW_KEYS = POPOVER_STATE_KEYS;
export const ARROW_CONTENT_KEYS = ARROW_KEYS;
export const POPOVER_KEYS = ARROW_CONTENT_KEYS;
export const POPOVER_CONTENT_KEYS = POPOVER_KEYS;
export const POPOVER_DISCLOSURE_KEYS = POPOVER_CONTENT_KEYS;
export const GET_PLACEMENT_DATA_KEYS = [
  ...POPOVER_DISCLOSURE_KEYS,
  "anchorRect",
  "popperSize",
  "arrowSize",
  "side",
  "align",
  "shouldAvoidCollisions",
  "collisionBoundariesRect",
] as const;
export const GET_ARROW_STYLES_KEYS = [
  ...POPOVER_DISCLOSURE_KEYS,
  "popperSize",
  "arrowSize",
  "side",
  "align",
] as const;
