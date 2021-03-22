import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { InputProps } from "./Input";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { createContext, getValidChildren } from "../utils";
import { AddonTypes } from "./InputAddons";
import { checkServerIdentity } from "tls";

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
  const context = React.useMemo(() => ({}), []);

  const theme = useTheme();
  const inputGroupStyles = cx(theme.input.group.base, className);
  const validChildren = getValidChildren(children);
  const [clones, setClones] = React.useState<any[]>([]);
  const [refs, setRefs] = React.useState<React.RefObject<HTMLElement>[]>([]);

  // 2px extra padding needed since,
  // in some cases the edge of the addon
  // is too close to the input's text content
  const offset = 2;
  const inputInlineStyles: Record<string, any> = {};

  function calculateBorderRadius(child: any) {
    if (child.type.id === AddonTypes.InputPrefix) {
      inputInlineStyles.borderTopLeftRadius = 0;
      inputInlineStyles.borderBottomLeftRadius = 0;
    }

    if (child.type.id === AddonTypes.InputSuffix) {
      inputInlineStyles.borderTopRightRadius = 0;
      inputInlineStyles.borderBottomRightRadius = 0;
    }
  }

  function populateClones() {
    setClones(
      validChildren.map((child: any) => {
        return child.type.id === "Input"
          ? React.cloneElement(child, {
              style: inputInlineStyles,
            })
          : child;
      }),
    );
  }

  // register refs & calculate border radius
  React.useLayoutEffect(() => {
    setClones(
      validChildren.map((child: any) => {
        if (
          [AddonTypes.InputAddonPrefix, AddonTypes.InputAddonSuffix].includes(
            child.type.id,
          )
        ) {
          const ref = React.createRef<HTMLElement>();
          setRefs(prev => prev && [...prev, ref]);
          return React.cloneElement(child, {
            ref,
          });
        }
        return child;
      }),
    );
  }, [children]);

  // set widths from refs & setClones with Input's styles
  React.useLayoutEffect(() => {
    if (!refs[0]?.current) {
      return;
    }

    // set widths
    validChildren.forEach((child: any) => {
      calculateBorderRadius(child);
      if (child.type.id === AddonTypes.InputAddonPrefix) {
        const width = refs[0]?.current?.getBoundingClientRect()
          ?.width as number;
        inputInlineStyles.paddingLeft = width + offset;
      }

      if (child.type.id === AddonTypes.InputAddonSuffix) {
        const width = refs[1]?.current?.getBoundingClientRect()
          ?.width as number;
        inputInlineStyles.paddingRight = width + offset;
      }
    });

    populateClones();
  }, [refs]);

  // if there are no addons, apply the input styles anyways
  // ie: when both elements are addons
  React.useLayoutEffect(() => {
    if (!refs[0]?.current) {
      const addons = validChildren.filter((child: any) => {
        calculateBorderRadius(child);
        return [
          AddonTypes.InputAddonPrefix,
          AddonTypes.InputAddonSuffix,
        ].includes(child.type.id);
      });
      if (addons.length == 0) {
        populateClones();
      }
    }
  }, [refs]);

  return (
    <InputGroupProvider value={context}>
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
