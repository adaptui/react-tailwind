import { addons, types } from "@storybook/addons";

import {
  ADDON_ID,
  TOOL_ID,
} from "storybook-addon-pseudo-states/dist/constants";
import { PseudoStateTool } from "storybook-addon-pseudo-states/dist/PseudoStateTool";

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "CSS pseudo states",
    match: ({ viewMode }) => viewMode === "story",
    render: PseudoStateTool,
  });
});
