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
    const inputInlineStyles = React.useRef<Record<string, any>>({});

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children]);

    // set widths from refs & setClones with Input's styles
    React.useLayoutEffect(() => {
      if (!refs[0]?.current) return;

      // set widths
      validChildren.forEach((child: any) => {
        if (child.type.id === AddonTypes.InputPrefix) {
          inputInlineStyles.current.paddingLeft =
            (refs[0]?.current?.getBoundingClientRect()?.width as number) +
            offset;
        }

        if (child.type.id === AddonTypes.InputSuffix) {
          inputInlineStyles.current.paddingRight =
            (refs[1]?.current?.getBoundingClientRect()?.width as number) +
            offset;
        }
      });

      setClones(validChildren);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refs]);

    return (
      <div className={inputGroupStyles}>
        {clones.find(child => child.type.id === AddonTypes.InputPrefix)}
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
        {clones.find(child => child.type.id === AddonTypes.InputSuffix)}
      </div>
    );
  },
);

(Input as any).id = "Input";
