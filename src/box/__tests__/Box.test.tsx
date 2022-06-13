import { render } from "../../utils/testUtils";
import { Box } from "../Box";

describe("Box", () => {
  it("should render properly", () => {
    const { asFragment } = render(<Box>AdaptUI</Box>);

    expect(asFragment()).toMatchSnapshot();
  });
});
