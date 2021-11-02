import { createComponent } from "reakit-system";
import { disclosureComposableButton, Hook } from "@renderlesskit/react";

import { ButtonHTMLProps, ButtonOptions, useButton } from "../button";

import { ShowMoreStateReturn } from "./ShowMoreState";

export type ShowMoreButtonOptions = ButtonOptions &
  Pick<ShowMoreStateReturn, "baseId" | "toggle" | "expanded">;

export type ShowMoreButtonHTMLProps = ButtonHTMLProps;

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
