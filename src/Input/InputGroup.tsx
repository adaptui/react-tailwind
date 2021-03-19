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

  const inputInlineStyles: Record<string, any> = {};
  // extra padding
  const offset = 5;

  // register refs
  React.useLayoutEffect(() => {
    setClones(
      validChildren.map((child: any) => {
        if (child.type.id !== "Input") {
          const ref = React.createRef<HTMLElement>();
          setRefs(prev => prev && [...prev, ref]);
          return React.cloneElement(child, {
            ref,
          });
        }

        return child;
      }),
    );
  }, []);

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
        const width = refs[0]?.current?.getBoundingClientRect()
          ?.width as number;
        inputInlineStyles.paddingRight = width + offset;
      }
    });

    setClones(
      clones.map((child: any) => {
        return child.type.id === "Input"
          ? React.cloneElement(child, {
              style: inputInlineStyles,
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
