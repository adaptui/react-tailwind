import { createComponent } from "reakit-system";
import {
  disclosureComposableButton,
  DisclosureHTMLProps,
  DisclosureOptions,
  Hook,
} from "@renderlesskit/react";

import { ButtonHTMLProps, ButtonOptions, useButton } from "../button";

export type ShowMoreButtonOptions = ButtonOptions & DisclosureOptions;

export type ShowMoreButtonHTMLProps = ButtonHTMLProps & DisclosureHTMLProps;

export type ShowMoreButtonProps = ShowMoreButtonOptions &
  ShowMoreButtonHTMLProps;

export const useShowMoreButton = disclosureComposableButton(useButton) as Hook<
  ShowMoreButtonOptions,
  ShowMoreButtonHTMLProps
>;

export const ShowMoreButton = createComponent({
  as: "button",
  memo: true,
  useHook: useShowMoreButton,
});

ShowMoreButton.displayName = "ShowMoreButton";
