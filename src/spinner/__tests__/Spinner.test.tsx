import { render } from "../../utils/testUtils";
import { Spinner } from "../Spinner";

describe("Spinner", () => {
  it("should render properly", () => {
    const { asFragment } = render(<Spinner />);

    expect(asFragment()).toMatchSnapshot();
  });
});
