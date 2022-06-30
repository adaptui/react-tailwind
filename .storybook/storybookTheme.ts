import { create } from "@storybook/theming";
const logo = require("./adaptui-tailwind.svg") as string;

export default create({
  base: "light",
  brandTitle: "AdaptUI React Tailwind",
  brandUrl: "https://github.com/adaptui/react-tailwind",
  brandImage: logo,
  brandTarget: "_self",
});
