// Automatically generated
export const USE_CHECKBOX_GROUP_STATE_KEYS = [
  "size",
  "stack",
  "maxVisibleItems",
] as const;
export const CHECKBOX_GROUP_STATE_KEYS = USE_CHECKBOX_GROUP_STATE_KEYS;
export const CHECKBOX_STATE_KEYS = [
  ...CHECKBOX_GROUP_STATE_KEYS,
  "state",
  "isChecked",
  "isIndeterminate",
  "isUnchecked",
  "value",
  "setState",
] as const;
export const USE_CHECKBOX_STATE_KEYS = [
  "defaultState",
  "state",
  "onStateChange",
  "size",
  "value",
] as const;
export const CHECKBOX_DESCRIPTION_KEYS = CHECKBOX_STATE_KEYS;
export const CHECKBOX_GROUP_WRAPPER_KEYS = CHECKBOX_DESCRIPTION_KEYS;
export const CHECKBOX_ICON_KEYS = [
  ...CHECKBOX_GROUP_WRAPPER_KEYS,
  "label",
  "description",
] as const;
export const CHECKBOX_INPUT_KEYS = CHECKBOX_GROUP_WRAPPER_KEYS;
export const CHECKBOX_LABEL_KEYS = [
  ...CHECKBOX_ICON_KEYS,
  ...CHECKBOX_INPUT_KEYS,
  "disabled",
] as const;
export const CHECKBOX_TEXT_KEYS = CHECKBOX_INPUT_KEYS;
