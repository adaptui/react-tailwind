// Automatically generated
export const USE_INPUT_STATE_KEYS = [
  "prefix",
  "suffix",
  "size",
  "variant",
  "invalid",
  "loading",
  "spinner",
] as const;
export const INPUT_STATE_KEYS = USE_INPUT_STATE_KEYS;
export const INPUT_BASE_KEYS = INPUT_STATE_KEYS;
export const INPUT_PREFIX_KEYS = [...INPUT_BASE_KEYS, "disabled"] as const;
export const INPUT_SUFFIX_KEYS = INPUT_PREFIX_KEYS;
export const INPUT_WRAPPER_KEYS = INPUT_BASE_KEYS;
