// Automatically generated
export const USE_PROGRESS_STATE_KEYS = [
  "baseId",
  "value",
  "min",
  "max",
  "size",
] as const;
export const PROGRESS_STATE_KEYS = [
  ...USE_PROGRESS_STATE_KEYS,
  "unstable_idCountRef",
  "isIndeterminate",
  "percent",
  "setBaseId",
] as const;
export const PROGRESS_BAR_KEYS = PROGRESS_STATE_KEYS;
export const PROGRESS_HINT_KEYS = PROGRESS_BAR_KEYS;
export const PROGRESS_LABEL_KEYS = PROGRESS_HINT_KEYS;
export const PROGRESS_TRACK_KEYS = PROGRESS_LABEL_KEYS;
export const PROGRESS_WRAPPER_KEYS = [...PROGRESS_TRACK_KEYS, "label"] as const;
