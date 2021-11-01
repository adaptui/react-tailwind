import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils";

export type IconProps = React.SVGProps<SVGElement> & BoxProps & {};

export const TypingLargeStatusIcon = forwardRefWithAs<
  IconProps,
  HTMLOrSVGElement,
  "svg"
>((props, ref) => {
  return (
    <Box
      as="svg"
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 12 7"
      {...props}
    >
      <rect width="12" height="7" fill="currentColor" rx="3.5"></rect>
      <rect
        width="2"
        height="2"
        x="2"
        y="2.5"
        fill="#fff"
        rx="1"
        className="animate-pulse animation-duration-1000"
      />
      <rect
        width="2"
        height="2"
        x="5"
        y="2.5"
        fill="#fff"
        rx="1"
        className="animate-pulse animation-duration-1000 animation-delay-333"
      />
      <rect
        width="2"
        height="2"
        x="8"
        y="2.5"
        fill="#fff"
        rx="1"
        className="animate-pulse animation-duration-1000 animation-delay-667"
      />
    </Box>
  );
});
