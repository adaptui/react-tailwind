// Automatically generated
export const SHOW_MORE_STATE_KEYS = [
  "isExpanded",
  "isVisibleAnimateStart",
  "setExpanded",
  "setIsVisibleAnimateStart",
  "getToggleProps",
  "getCollapseProps",
] as const;
export const USE_SHOW_MORE_STATE_KEYS = [
  "isExpanded",
  "defaultExpanded",
  "collapsedHeight",
  "expandStyles",
  "collapseStyles",
  "easing",
  "duration",
  "onCollapseStart",
  "onCollapseEnd",
  "onExpandStart",
  "onExpandEnd",
] as const;
export const SHOW_MORE_BUTTON_KEYS = SHOW_MORE_STATE_KEYS;
export const SHOW_MORE_CONTENT_KEYS = SHOW_MORE_BUTTON_KEYS;
export const CREATE_HOOK_KEYS = [
  ...SHOW_MORE_CONTENT_KEYS,
  "name",
  "compose",
  "useState",
  "useOptions",
  "useProps",
  "useComposeOptions",
  "useComposeProps",
  "propsAreEqual",
  "keys",
] as const;
