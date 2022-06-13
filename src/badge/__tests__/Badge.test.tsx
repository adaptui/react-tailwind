import { render } from "../../utils/testUtils";
import { Badge } from "../Badge";

describe("Badge", () => {
  it("should render properly", () => {
    const { asFragment } = render(<Badge>AdaptUI</Badge>);

    expect(asFragment()).toMatchSnapshot();
  });
});
