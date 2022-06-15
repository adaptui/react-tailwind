import { Button } from "../../index";
import { render } from "../../utils/testUtils";
import { ButtonGroup } from "../ButtonGroup";

describe("ButtonGroup", () => {
  it("should render properly", () => {
    const { asFragment } = render(
      <ButtonGroup>
        <Button>Undo</Button>
        <Button>Redo</Button>
        <Button>Copy</Button>
        <Button>Paste</Button>
        <Button>Delete</Button>
        <Button>Close</Button>
      </ButtonGroup>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
