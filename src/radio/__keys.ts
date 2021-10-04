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
  "maxVisibleItems",
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
  "maxVisibleItems",
] as const;
export const RADIO_STATE_KEYS = [
  ...RADIO_GROUP_STATE_KEYS,
  "isChecked",
] as const;
export const RADIO_DESCRIPTION_KEYS = RADIO_STATE_KEYS;
export const RADIO_ICON_KEYS = [
  ...RADIO_DESCRIPTION_KEYS,
  "description",
] as const;
export const RADIO_INPUT_KEYS = RADIO_DESCRIPTION_KEYS;
export const RADIO_LABEL_KEYS = [
  ...RADIO_ICON_KEYS,
  ...RADIO_INPUT_KEYS,
  "disabled",
] as const;
export const RADIO_TEXT_KEYS = RADIO_INPUT_KEYS;
export const RENDERLESSKIT_RADIO_GROUP_KEYS = RADIO_TEXT_KEYS;
