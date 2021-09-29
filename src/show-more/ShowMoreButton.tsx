import React from "react";
import { createComponent, createHook } from "reakit-system";
import { ButtonHTMLProps, ButtonOptions, useButton } from "reakit";
import { useLiveRef } from "reakit-utils";

import { SHOW_MORE_BUTTON_KEYS } from "./__keys";
import { ShowMoreStateReturn } from "./ShowMoreState";

export type ShowMoreButtonOptions = ButtonOptions &
  Pick<ShowMoreStateReturn, "setExpanded" | "getToggleProps">;

export type ShowMoreButtonHTMLProps = ButtonHTMLProps;

export type ShowMoreButtonProps = ShowMoreButtonOptions &
  ShowMoreButtonHTMLProps;

export const useShowMoreButton = createHook<
  ShowMoreButtonOptions,
  ShowMoreButtonHTMLProps
>({
  name: "ShowMoreButton",
  compose: useButton,
  keys: SHOW_MORE_BUTTON_KEYS,

  useOptions(options, htmlProps) {
    return options;
  },

  useProps(options, htmlProps) {
    const { setExpanded, getToggleProps } = options;
    const { onClick: htmlOnClick, ...restHtmlProps } = htmlProps;

    const onClickRef = useLiveRef(htmlOnClick);

    const onClick = React.useCallback(
      (event: React.MouseEvent) => {
        onClickRef.current?.(event);
        if (event.defaultPrevented) return;

        setExpanded((previousIsExpanded: any) => !previousIsExpanded);
      },
      [onClickRef, setExpanded],
    );

    return getToggleProps({ onClick, ...restHtmlProps });
  },
});

// type Hook<O> = {
//   (options?: O, props?: RoleHTMLProps): RoleHTMLProps;
//   unstable_propsAreEqual?: (prev: O, next: O) => boolean;
//   __keys?: ReadonlyArray<any>;
// };

// export const overrideHook = <T extends As, O>(useHook: Hook<O>) => {
//   return createHook<ShowMoreButtonOptions, ShowMoreButtonHTMLProps>({
//     name: "ShowMoreButton",
//     compose: useHook,
//     keys: SHOW_MORE_BUTTON_KEYS,

//     useOptions(options, htmlProps) {
//       return options;
//     },

//     useProps(options, htmlProps) {
//       const { setExpanded, getToggleProps } = options;
//       const { onClick: htmlOnClick, ...restHtmlProps } = htmlProps;

//       const onClickRef = useLiveRef(htmlOnClick);

//       const onClick = React.useCallback(
//         (event: React.MouseEvent) => {
//           onClickRef.current?.(event);
//           if (event.defaultPrevented) return;

//           setExpanded((previousIsExpanded: any) => !previousIsExpanded);
//         },
//         [onClickRef, setExpanded],
//       );

//       return getToggleProps({ onClick, ...restHtmlProps });
//     },
//   });
// };

export const ShowMoreButton = createComponent({
  as: "button",
  memo: true,
  useHook: useShowMoreButton,
});
