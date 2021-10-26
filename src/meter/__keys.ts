// Automatically generated
export const USE_METER_STATE_KEYS = [
  "baseId",
  "value",
  "min",
  "max",
  "low",
  "optimum",
  "high",
  "size",
] as const;
export const METER_STATE_KEYS = [
  ...USE_METER_STATE_KEYS,
  "unstable_idCountRef",
  "percent",
  "status",
  "setBaseId",
] as const;
export const METER_BAR_KEYS = METER_STATE_KEYS;
export const METER_HINT_KEYS = METER_BAR_KEYS;
export const METER_LABEL_KEYS = METER_HINT_KEYS;
export const METER_TRACK_KEYS = METER_LABEL_KEYS;
export const METER_WRAPPER_KEYS = [...METER_TRACK_KEYS, "label"] as const;
