import { createIcon } from "../createIcon";
import { render, testA11y } from "../../utils/testUtils";

const Test = createIcon({
  displayName: "CloseIcon",
  viewBox: "0 0 12 12",
  path: (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
      d="M3 3l6 5.943M3 9l5.94-6"
    />
  ),
});

describe("createIcon", () => {
  expect.assertions(1);

  it("should render", () => {
    const { asFragment } = render(<Test />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should not have a11y violations", async () => {
    await testA11y(<Test />);
  });
});
