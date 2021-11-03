// Automatically generated
export const CHECKBOX_STATE_KEYS = [
  "state",
  "stack",
  "maxVisibleItems",
  "size",
  "isChecked",
  "isIndeterminate",
  "isUnchecked",
  "value",
  "icon",
  "label",
  "description",
  "setState",
] as const;
export const USE_CHECKBOX_STATE_KEYS = [
  "defaultState",
  "state",
  "onStateChange",
  "size",
  "value",
  "icon",
  "label",
  "description",
] as const;
export const CHECKBOX_DESCRIPTION_KEYS = CHECKBOX_STATE_KEYS;
export const CHECKBOX_ICON_KEYS = CHECKBOX_DESCRIPTION_KEYS;
export const CHECKBOX_INPUT_KEYS = CHECKBOX_ICON_KEYS;
export const CHECKBOX_LABEL_KEYS = [
  ...CHECKBOX_INPUT_KEYS,
  "disabled",
] as const;
export const CHECKBOX_TEXT_KEYS = CHECKBOX_INPUT_KEYS;
