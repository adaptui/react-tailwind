// Automatically generated
export const SHOW_MORE_STATE_KEYS = [
  "baseId",
  "unstable_idCountRef",
  "visible",
  "duration",
  "direction",
  "contentSize",
  "easing",
  "setBaseId",
  "show",
  "hide",
  "toggle",
  "setVisible",
  "onExpandStart",
  "onExpandEnd",
  "onCollapseStart",
  "onCollapseEnd",
] as const;
export const USE_SHOW_MORE_STATE_KEYS = [
  "baseId",
  "visible",
  "direction",
  "contentSize",
  "easing",
  "duration",
  "onExpandStart",
  "onExpandEnd",
  "onCollapseStart",
  "onCollapseEnd",
  "defaultVisible",
  "onVisibleChange",
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
