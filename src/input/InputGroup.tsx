import { cloneElement, useMemo, useState } from "react";

import { Box, BoxProps } from "../box";
import { useSafeLayoutEffect } from "../hooks";
import { useTheme } from "../theme";
import {
  createContext,
  forwardRefWithAs,
  getValidChildren,
  tcm,
} from "../utils";

import { InputProps, ReactFiberNode } from "./Input";
import { AddonTypes } from "./InputAddons";

export type InputGroupContext = InputGroupProps;

const [InputGroupProvider, useInputGroup] = createContext<InputGroupContext>({
  strict: false,
  name: "InputGroupContext",
});

export { useInputGroup };

export type InputGroupProps = BoxProps & InputProps & {};

export const InputGroup = forwardRefWithAs<
  InputGroupProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, children, ...rest } = props;
  const context = useMemo(() => ({}), []);

  const theme = useTheme();
  const inputGroupStyles = tcm(theme.input.group.base, className);
  const validChildren = getValidChildren(children);
  const [clones, setClones] = useState<ReactFiberNode[]>([]);

  const inputInlineStyles: Record<string, any> = {};

  function calculateBorderRadius(child: ReactFiberNode) {
    if (child.type.id === AddonTypes.InputGroupPrefix) {
      inputInlineStyles.borderTopLeftRadius = 0;
      inputInlineStyles.borderBottomLeftRadius = 0;
    }

    if (child.type.id === AddonTypes.InputGroupSuffix) {
      inputInlineStyles.borderTopRightRadius = 0;
      inputInlineStyles.borderBottomRightRadius = 0;
    }
  }

  function populateClones() {
    setClones(
      validChildren.map((child: any) => {
        return child.type.id === "Input"
          ? cloneElement(child, {
              style: inputInlineStyles,
            })
          : child;
      }),
    );
  }

  // if there are no addons, apply the input styles anyways
  // ie: when both elements are addons
  useSafeLayoutEffect(() => {
    const addons = validChildren.filter((child: any) => {
      calculateBorderRadius(child);

      return [AddonTypes.InputPrefix, AddonTypes.InputSuffix].includes(
        child.type.id,
      );
    });

    if (addons.length === 0) {
      populateClones();
    }
  }, [children]);

  return (
    <InputGroupProvider {...context}>
      <Box
        ref={ref}
        role="group"
        aria-label="Input group"
        className={inputGroupStyles}
        {...rest}
      >
        {clones}
      </Box>
    </InputGroupProvider>
  );
});

InputGroup.displayName = "InputGroup";

export default InputGroup;
