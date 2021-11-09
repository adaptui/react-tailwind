import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls } from "../../../.storybook/utils";

import { PopperBasic } from "./PopperBasic.component";

type Meta = ComponentMeta<typeof PopperBasic>;
type Story = ComponentStoryObj<typeof PopperBasic>;

export default {
  title: "Primitives/Popper/Basic",
  component: PopperBasic,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
  },
  argTypes: createControls(undefined, {
    ignore: ["unstable_system", "wrapElement", "as"],
  }),
} as Meta;

export const Default: Story = {};

// export function Collisions() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         width: "200vw",
//         height: "200vh",
//       }}
//     >
//       <Demo />
//     </div>
//   );
// }
