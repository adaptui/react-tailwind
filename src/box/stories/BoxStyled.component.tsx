import * as React from "react";

import {
  Box as RenderlesskitBox,
  BoxProps as RenderlesskitBoxProps,
  tcm,
} from "../../index";

export type BoxProps = RenderlesskitBoxProps & {};

export const Box: React.FC<BoxProps> = props => {
  const { className, ...rest } = props;

  return (
    <RenderlesskitBox
      as="figure"
      className={tcm("p-8 overflow-hidden bg-gray-100 rounded-xl", className)}
      {...rest}
    >
      <RenderlesskitBox
        as="img"
        className="object-cover w-32 h-32 mx-auto rounded-full md:w-48 md:h-auto md:rounded-md"
        src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
        alt="Image of a women"
        width="384"
        height="512"
      />
      <RenderlesskitBox className="pt-6 space-y-4 text-center md:p-8 md:text-left">
        <RenderlesskitBox as="blockquote">
          <RenderlesskitBox as="p" className="text-lg font-semibold">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </RenderlesskitBox>
        </RenderlesskitBox>
        <RenderlesskitBox as="figcaption" className="font-medium">
          <RenderlesskitBox className="text-cyan-600">
            Sarah Dayan
          </RenderlesskitBox>
          <RenderlesskitBox className="text-gray-500">
            Staff Engineer, Algolia
          </RenderlesskitBox>
        </RenderlesskitBox>
      </RenderlesskitBox>
    </RenderlesskitBox>
  );
};

export default Box;
