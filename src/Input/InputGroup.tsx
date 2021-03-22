import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { InputProps } from "./Input";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { createContext, getValidChildren } from "../utils";

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
  const groupInlineStyles: Record<string, any> = {};

  // register refs
  React.useLayoutEffect(() => {
    setClones(
      validChildren.map((child: any) => {
        if (["InputAddonPrefix", "InputAddonSuffix"].includes(child.type.id)) {
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

  // apply styles & childrens
  React.useLayoutEffect(() => {
    if (!refs[0]?.current) return;

    // set widths
    clones.forEach((child: any) => {
      if (child.type.id === "InputAddonPrefix") {
        const width = refs[0]?.current?.getBoundingClientRect()
          ?.width as number;
        inputInlineStyles.paddingLeft = width + offset;
      }

      if (child.type.id === "InputAddonSuffix") {
        const width = refs[1]?.current?.getBoundingClientRect()
          ?.width as number;
        inputInlineStyles.paddingRight = width + offset;
      }

      if (child.type.id === "InputPrefix") {
        groupInlineStyles.borderTopLeftRadius = 0;
        groupInlineStyles.borderBottomLeftRadius = 0;
      }

      if (child.type.id === "InputSuffix") {
        groupInlineStyles.borderTopRightRadius = 0;
        groupInlineStyles.borderBottomRightRadius = 0;
      }
    });

    setClones(
      clones.map((child: any) => {
        return child.type.id === "Input"
          ? React.cloneElement(child, {
              style: {
                ...inputInlineStyles,
                ...groupInlineStyles,
              },
            })
          : child;
      }),
    );
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
