// Automatically generated
export const USE_SELECT_STATE_KEYS = [
  "prefix",
  "suffix",
  "size",
  "variant",
  "invalid",
  "loading",
  "spinner",
] as const;
export const SELECT_STATE_KEYS = USE_SELECT_STATE_KEYS;
export const SELECT_BASE_KEYS = SELECT_STATE_KEYS;
export const SELECT_PREFIX_KEYS = [...SELECT_BASE_KEYS, "disabled"] as const;
export const SELECT_SUFFIX_KEYS = SELECT_PREFIX_KEYS;
export const SELECT_WRAPPER_KEYS = SELECT_BASE_KEYS;
