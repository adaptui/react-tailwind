// Automatically generated
export const SLIDER_STATE_KEYS = [
  "trackRef",
  "baseState",
  "orientation",
  "labelProps",
  "groupProps",
  "trackProps",
  "outputProps",
  "size",
  "range",
  "tooltip",
  "knobIcon",
] as const;
export const USE_SLIDER_STATE_KEYS = [
  "orientation",
  "isDisabled",
  "onChangeEnd",
  "minValue",
  "maxValue",
  "step",
  "value",
  "defaultValue",
  "onChange",
  "label",
  "id",
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details",
  "formatOptions",
  "size",
  "range",
  "knobIcon",
  "tooltip",
] as const;
export const SLIDER_THUMB_STATE_KEYS = [
  "sliderState",
  "inputRef",
  "thumbProps",
  "inputProps",
  "labelProps",
  "size",
  "index",
  "tooltip",
  "knobIcon",
] as const;
export const USE_SLIDER_THUMB_STATE_KEYS = [
  "sliderState",
  "orientation",
  "isDisabled",
  "index",
  "autoFocus",
  "onFocus",
  "onBlur",
  "onFocusChange",
  "onKeyDown",
  "onKeyUp",
  "validationState",
  "isRequired",
  "label",
  "id",
  "excludeFromTabOrder",
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details",
  "aria-errormessage",
  "size",
  "knobIcon",
  "tooltip",
] as const;
export const SLIDER_FILLED_TRACK_KEYS = [
  ...SLIDER_STATE_KEYS,
  ...SLIDER_THUMB_STATE_KEYS,
] as const;
export const SLIDER_THUMB_CONTAINER_KEYS = SLIDER_FILLED_TRACK_KEYS;
export const SLIDER_THUMB_INPUT_KEYS = SLIDER_THUMB_CONTAINER_KEYS;
export const SLIDER_THUMB_WRAPPER_KEYS = SLIDER_THUMB_INPUT_KEYS;
export const SLIDER_TRACK_KEYS = SLIDER_THUMB_WRAPPER_KEYS;
export const SLIDER_TRACK_WRAPPER_KEYS = SLIDER_TRACK_KEYS;
export const SLIDER_WRAPPER_KEYS = SLIDER_TRACK_WRAPPER_KEYS;
