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

export type ReactFiberNode = React.ReactElement<any, any> & {
  ref?: React.MutableRefObject<HTMLElement>;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { disabled, children, invalid, style, className, ...rest } = props;

    const theme = useTheme();
    const inputWrapperStyles = cx(theme.input.wrapper);
    const inputStyles = cx(
      theme.input.base,
      invalid ? theme.input.disabled : "",
      disabled ? theme.input.disabled : "",
      className,
    );

    const validChildren = getValidChildren(
      React.Children.toArray(children).filter((child: any) =>
        isPrefixSuffix(child.type.id),
      ),
    );
    const [clones, setClones] = React.useState<ReactFiberNode[]>([]);
    const [isRefsAvailable, setRefsAvailable] = React.useState(false);

    const inputInlineStyles = React.useRef<Record<string, any>>({});

    function calculatePadding(child: any, index: number) {
      let key = "";
      if (isPrefix(child.type.id)) key = "paddingLeft";
      if (isSuffix(child.type.id)) key = "paddingRight";
      if (!key) return;

      const bbbox = clones[index]?.ref?.current?.getBoundingClientRect();
      inputInlineStyles.current[key] = bbbox?.width as number;
    }

    // register refs
    React.useLayoutEffect(() => {
      setClones(
        validChildren.map((child: any) => {
          if (isPrefixSuffix(child.type.id)) {
            return React.cloneElement(child, {
              ref: React.createRef<HTMLElement>(),
            });
          }
          return child;
        }),
      );
      setRefsAvailable(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children]);

    // set widths from refs & setClones with Input's styles
    React.useLayoutEffect(() => {
      if (!isRefsAvailable) return;

      validChildren.forEach((child: any, index) =>
        calculatePadding(child, index),
      );

      setClones(validChildren);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRefsAvailable]);

    return (
      <div className={inputWrapperStyles}>
        {clones.find(child => isPrefix(child?.type?.id))}
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
        {clones.find(child => isSuffix(child?.type?.id))}
      </div>
    );
  },
);

(Input as any).id = "Input";

const isPrefix = (id: any) => AddonTypes.InputPrefix === id;
const isSuffix = (id: any) => AddonTypes.InputSuffix === id;
const isPrefixSuffix = (id: any) =>
  [AddonTypes.InputPrefix, AddonTypes.InputSuffix].includes(id);
