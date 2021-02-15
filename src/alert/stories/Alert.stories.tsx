import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import {
  Alert,
  AlertBody,
  AlertIcon,
  AlertProps,
  AlertTitle,
  AlertDescription,
  AlertActionButton,
} from "../index";
import { CloseIcon } from "../../icons";
import { IconButton } from "../../button";
import { cx } from "@renderlesskit/react";
import {
  storyTemplate,
  createUnionControl,
} from "../../../.storybook/storybookUtils";

export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    status: createUnionControl([
      "neutral",
      "info",
      "success",
      "warning",
      "error",
    ]),
    title: { defaultValue: "" },
    description: { defaultValue: "" },
    actionButtonLabel: { defaultValue: "" },
  },
} as Meta;

const base = storyTemplate<AlertProps>(
  args => {
    const status = args?.status || "info";

    return <Alert status={status} {...args} />;
  },
  {
    actionButtonLabel: "Reach Out",
    title: "Your browser is outdated.",
    status: "info",
  },
);

export const Default = base({});
export const WithDescription = base({
  description: "Your experience may be degraded.",
});

// export const Customization = storyTemplate<AlertProps>(args => {
//   const status = args?.status || "info";
//   return (
//     <Alert {...args} status={status}>
//       {({ status, styles }) => (
//         <>
//           <AlertIcon />
//           <AlertBody>
//             <AlertTitle>Build failed due to timeout</AlertTitle>
//             <AlertDescription>
//               Build container is stuck in building state for 2700000ms
//             </AlertDescription>
//           </AlertBody>
//           <AlertActions>
//             <AlertActionButton as="div">Reach Out</AlertActionButton>
//             <IconButton
//               aria-label="close"
//               className={cx(
//                 styles.iconButton.base,
//                 styles.status[status].iconButton,
//               )}
//             >
//               <CloseIcon />
//             </IconButton>
//           </AlertActions>
//         </>
//       )}
//     </Alert>
//   );
// })({});
