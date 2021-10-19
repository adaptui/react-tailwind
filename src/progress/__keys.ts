// Automatically generated
export const USE_PROGRESS_STATE_KEYS = ["value", "min", "max", "size"] as const;
export const PROGRESS_STATE_KEYS = [
  ...USE_PROGRESS_STATE_KEYS,
  "isIndeterminate",
  "percent",
] as const;
export const PROGRESS_BAR_KEYS = PROGRESS_STATE_KEYS;
export const PROGRESS_TRACK_KEYS = PROGRESS_BAR_KEYS;
