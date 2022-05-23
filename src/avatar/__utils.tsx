import { AvatarUIState } from "./AvatarUIState";

export function getInitialsFromNameDefault(
  name: AvatarUIState["name"],
  size: AvatarUIState["size"],
) {
  if (name == null) return null;

  const [firstName, lastName] = name.split(" ");
  const oneLetterInitialSizes = ["xs", "sm", "md"];

  const initials =
    firstName && lastName
      ? `${firstName.charAt(0)}${lastName.charAt(0)}`
      : `${firstName.charAt(0)}${firstName.charAt(1)}`;

  return oneLetterInitialSizes.includes(size)
    ? initials.toUpperCase().charAt(0)
    : initials.toUpperCase();
}
