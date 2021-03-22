import React from "react";
import { cx } from "@renderlesskit/react";
import { Input as ReakitInput, InputProps as ReakitInputProps } from "reakit";

import { useTheme } from "../theme";
import { AddonTypes } from "./InputAddons";
import { getValidChildren } from "../utils";

export type InputProps = Omit<ReakitInputProps, "prefix"> & {
  /**
   * Is Input invalid?
   */
  invalid?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { disabled, children, invalid, style, className, ...rest } = props;
    const theme = useTheme();

    const inputStyles = cx(
      theme.input.base,
      invalid ? theme.input.invalid : "",
      disabled ? theme.input.disabled : "",
      className,
    );
    const inputGroupStyles = cx(theme.input.group.base);

    const validChildren = getValidChildren(
      React.Children.toArray(children).filter((child: any) =>
        isPrefixSuffix(child.type.id),
      ),
    );
    const [clones, setClones] = React.useState<any[]>([]);
    const [refs, setRefs] = React.useState<React.RefObject<HTMLElement>[]>([]);

    // 2px extra padding needed since,
    // in some cases the edge of the addon
    // is too close to the input's text content
    const offset = 2;
    const inputInlineStyles = React.useRef<Record<string, any>>({});

    function calculatePadding(child: any, index: number) {
      if (clones[index]?.ref?.current === refs[index]?.current) {
        let key = "";
        if (isPrefix(child.type.id)) key = "paddingLeft";
        if (isSuffix(child.type.id)) key = "paddingRight";
        if (!key) return;

        inputInlineStyles.current[key] =
          (refs[index]?.current?.getBoundingClientRect()?.width as number) +
          offset;
      }
    }

    // register refs
    React.useLayoutEffect(() => {
      setClones(
        validChildren.map((child: any) => {
          if (isPrefixSuffix(child.type.id)) {
            const ref = React.createRef<HTMLElement>();
            setRefs(prev => prev && [...prev, ref]);
            return React.cloneElement(child, {
              ref,
            });
          }
          return child;
        }),
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children]);

    // set widths from refs & setClones with Input's styles
    React.useLayoutEffect(() => {
      if (!refs[0]?.current) return;

      validChildren.forEach((child: any, index) =>
        calculatePadding(child, index),
      );

      setClones(validChildren);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refs]);

    return (
      <div className={inputGroupStyles}>
        {clones.find(child => isPrefix(child.type.id))}
        <ReakitInput
          aria-invalid={invalid}
          className={inputStyles}
          disabled={disabled}
          ref={ref}
          style={{
            ...style,
            ...inputInlineStyles.current,
          }}
          {...rest}
        />
        {clones.find(child => isSuffix(child.type.id))}
      </div>
    );
  },
);

(Input as any).id = "Input";

const isPrefix = (id: any) => AddonTypes.InputPrefix === id;
const isSuffix = (id: any) => AddonTypes.InputSuffix === id;
const isPrefixSuffix = (id: any) =>
  [AddonTypes.InputPrefix, AddonTypes.InputSuffix].includes(id);
