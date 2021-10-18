// Automatically generated
export const SWITCH_STATE_KEYS = [
  "state",
  "size",
  "value",
  "isChecked",
  "setState",
] as const;
export const USE_SWITCH_STATE_KEYS = [
  "defaultState",
  "state",
  "onStateChange",
  "size",
  "value",
] as const;
export const SWITCH_DESCRIPTION_KEYS = SWITCH_STATE_KEYS;
export const SWITCH_ICON_KEYS = [
  ...SWITCH_DESCRIPTION_KEYS,
  "description",
] as const;
export const SWITCH_INPUT_KEYS = SWITCH_DESCRIPTION_KEYS;
export const SWITCH_LABEL_KEYS = [
  ...SWITCH_ICON_KEYS,
  ...SWITCH_INPUT_KEYS,
  "disabled",
] as const;
export const SWITCH_TEXT_KEYS = SWITCH_INPUT_KEYS;
