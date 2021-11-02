// Automatically generated
export const USE_AVATAR_GROUP_STATE_KEYS = [
  "size",
  "max",
  "circular",
  "showRing",
  "ringColor",
] as const;
export const AVATAR_GROUP_STATE_KEYS = USE_AVATAR_GROUP_STATE_KEYS;
export const USE_AVATAR_OWN_STATE_KEYS = [
  "size",
  "icon",
  "status",
  "circular",
  "showRing",
  "ringColor",
  "name",
  "statusIndicators",
  "getInitialsFromName",
  "parentsBackground",
] as const;
export const AVATAR_STATE_KEYS = [
  ...USE_AVATAR_OWN_STATE_KEYS,
  "initials",
  "imageStatus",
  "showFallback",
] as const;
export const USE_AVATAR_IMAGE_STATE_KEYS = [
  "src",
  "srcSet",
  "sizes",
  "onLoad",
  "onError",
  "ignoreFallback",
  "crossOrigin",
  "loading",
] as const;
export const USE_AVATAR_STATE_KEYS = [
  ...USE_AVATAR_OWN_STATE_KEYS,
  ...USE_AVATAR_IMAGE_STATE_KEYS,
] as const;
export const AVATAR_GROUP_WRAPPER_KEYS = [
  ...AVATAR_GROUP_STATE_KEYS,
  ...AVATAR_STATE_KEYS,
] as const;
export const AVATAR_ICON_KEYS = AVATAR_GROUP_WRAPPER_KEYS;
export const AVATAR_IMAGE_KEYS = AVATAR_ICON_KEYS;
export const AVATAR_INITIALS_KEYS = AVATAR_IMAGE_KEYS;
export const AVATAR_STATUS_INDICATOR_KEYS = AVATAR_INITIALS_KEYS;
export const AVATAR_WRAPPER_KEYS = AVATAR_STATUS_INDICATOR_KEYS;
