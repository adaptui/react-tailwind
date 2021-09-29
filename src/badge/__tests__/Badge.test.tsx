import { render } from "../../utils/testUtils";
import { Badge } from "../Badge2";

describe("<Badge />", () => {
  it("should render properly", () => {
    const { asFragment } = render(<Badge>Hello world</Badge>);

    expect(asFragment()).toMatchSnapshot();
  });
});
