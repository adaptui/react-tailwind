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

    const validChildren = getValidChildren(children);
    const [clones, setClones] = React.useState<any[]>([]);
    const [refs, setRefs] = React.useState<React.RefObject<HTMLElement>[]>([]);

    // 2px extra padding needed since,
    // in some cases the edge of the addon
    // is too close to the input's text content
    const offset = 2;
    let paddingLeft = React.useRef(0);
    let paddingRight = React.useRef(0);

    function populateClones() {
      setClones(
        validChildren.map((child: any) => {
          return child;
        }),
      );
    }

    // register refs & calculate border radius
    React.useLayoutEffect(() => {
      setClones(
        validChildren.map((child: any) => {
          if (
            [AddonTypes.InputPrefix, AddonTypes.InputSuffix].includes(
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
        if (child.type.id === AddonTypes.InputPrefix) {
          const width = refs[0]?.current?.getBoundingClientRect()
            ?.width as number;
          paddingLeft.current = width + offset;
        }

        if (child.type.id === AddonTypes.InputSuffix) {
          const width = refs[1]?.current?.getBoundingClientRect()
            ?.width as number;
          paddingRight.current = width + offset;
        }
      });

      populateClones();
    }, [refs]);

    const inputInlineStyles = {
      paddingLeft: paddingLeft.current > 0 ? paddingLeft.current : undefined,
      paddingRight: paddingRight.current > 0 ? paddingRight.current : undefined,
    };

    return (
      <div className={inputGroupStyles}>
        {clones.filter(child => child.type.id === AddonTypes.InputPrefix)}
        <ReakitInput
          aria-invalid={invalid}
          className={inputStyles}
          disabled={disabled}
          ref={ref}
          style={{
            ...style,
            ...inputInlineStyles,
          }}
          {...rest}
        />
        {clones.filter(child => child.type.id === AddonTypes.InputSuffix)}
      </div>
    );
  },
);

(Input as any).id = "Input";
