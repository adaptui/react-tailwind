import * as React from "react";
import { Switch } from "../Switch";
import { cleanup, fireEvent, render, screen } from "../../utils/testUtils";
import { SwitchLabel, SwitchInput } from "..";

afterEach(cleanup);

describe("<Switch />", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<Switch />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should toggle switch state", () => {
    render(<Switch defaultState={true} />);

    expect(screen.getByRole("switch")).toBeChecked();
    fireEvent.click(screen.getByRole("switch"));
    expect(screen.getByRole("switch")).not.toBeChecked();
  });

  it("should support controlled state", () => {
    const Controlled = () => {
      const [state, setState] = React.useState(false);

      return <Switch state={state} onStateChange={() => setState(!state)} />;
    };
    render(<Controlled />);

    expect(screen.getByRole("switch")).not.toBeChecked();
    fireEvent.click(screen.getByRole("switch"));
    expect(screen.getByRole("switch")).toBeChecked();
  });

  it("should render with custom render prop", () => {
    const DARK_MODE = "Dark Mode";
    const LIGHT_MODE = "Light Mode";
    render(
      <Switch defaultState={true}>
        {({ state }) => {
          return (
            <SwitchLabel>
              <SwitchInput />
              <span data-testid="testid-mode">
                {state ? DARK_MODE : LIGHT_MODE}
              </span>
            </SwitchLabel>
          );
        }}
      </Switch>,
    );

    expect(screen.getByTestId("testid-mode")).toHaveTextContent(DARK_MODE);
    fireEvent.click(screen.getByRole("switch"));
    expect(screen.getByTestId("testid-mode")).toHaveTextContent(LIGHT_MODE);
  });
});
