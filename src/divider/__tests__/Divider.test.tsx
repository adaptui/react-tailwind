import { render } from "../../utils/testUtils";
import { Divider } from "../Divider";

describe("Divider", () => {
  it("should render properly", () => {
    const { asFragment } = render(
      <div className="w-80">
        <Divider />
      </div>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
