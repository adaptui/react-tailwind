// Automatically generated
export const RADIO_GROUP_STATE_KEYS = [
  "baseId",
  "unstable_idCountRef",
  "unstable_virtual",
  "rtl",
  "orientation",
  "items",
  "groups",
  "currentId",
  "loop",
  "wrap",
  "shift",
  "unstable_moves",
  "unstable_hasActiveWidget",
  "unstable_includesBaseElement",
  "state",
  "size",
  "stack",
  "setBaseId",
  "registerItem",
  "unregisterItem",
  "registerGroup",
  "unregisterGroup",
  "move",
  "next",
  "previous",
  "up",
  "down",
  "first",
  "last",
  "sort",
  "unstable_setVirtual",
  "setRTL",
  "setOrientation",
  "setCurrentId",
  "setLoop",
  "setWrap",
  "setShift",
  "reset",
  "unstable_setIncludesBaseElement",
  "unstable_setHasActiveWidget",
  "setState",
] as const;
export const USE_RADIO_GROUP_STATE_KEYS = [
  "baseId",
  "unstable_virtual",
  "rtl",
  "orientation",
  "currentId",
  "loop",
  "wrap",
  "shift",
  "unstable_includesBaseElement",
  "defaultState",
  "state",
  "onStateChange",
  "size",
  "stack",
] as const;
export const RADIO_SHOW_MORE_STATE_KEYS = [
  "isExpanded",
  "isVisibleAnimateStart",
  "setExpanded",
  "setIsVisibleAnimateStart",
  "getToggleProps",
  "getCollapseProps",
] as const;
export const USE_RADIO_SHOW_MORE_STATE_KEYS = [
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
export const RADIO_STATE_KEYS = [
  ...RADIO_GROUP_STATE_KEYS,
  "isChecked",
] as const;
export const RADIO_DESCRIPTION_KEYS = [
  ...RADIO_STATE_KEYS,
  ...RADIO_SHOW_MORE_STATE_KEYS,
] as const;
export const RADIO_ICON_KEYS = RADIO_DESCRIPTION_KEYS;
export const RADIO_INPUT_KEYS = RADIO_ICON_KEYS;
export const RADIO_LABEL_KEYS = RADIO_INPUT_KEYS;
export const RADIO_SHOW_MORE_BUTTON_KEYS = RADIO_LABEL_KEYS;
export const RADIO_SHOW_MORE_CONTENT_KEYS = RADIO_SHOW_MORE_BUTTON_KEYS;
export const RADIO_TEXT_KEYS = RADIO_SHOW_MORE_CONTENT_KEYS;
