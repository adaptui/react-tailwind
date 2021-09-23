import { useState } from "react";

import { cleanup, fireEvent, render, screen } from "../../utils/testUtils";
import { Switch } from "../Switch";
import { SwitchInput, SwitchLabel } from "..";

afterEach(cleanup);

describe("<Switch />", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<Switch />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should toggle switch state", () => {
    render(<Switch defaultChecked={true} />);

    expect(screen.getByRole("switch")).toBeChecked();
    fireEvent.click(screen.getByRole("switch"));
    expect(screen.getByRole("switch")).not.toBeChecked();
  });

  it("can be disabled", () => {
    render(<Switch isDisabled defaultChecked={true} />);

    expect(screen.getByRole("switch")).toBeDisabled();
    // toBeChecked is failing for this case
    expect((screen.getByRole("switch") as HTMLInputElement).checked).toBe(true);
  });

  it("should support controlled state", () => {
    const Controlled = () => {
      const [state, setState] = useState(false);

      return <Switch checked={state} onChange={() => setState(!state)} />;
    };
    render(<Controlled />);

    expect(screen.getByRole("switch")).not.toBeChecked();
    fireEvent.click(screen.getByRole("switch"));
    expect(screen.getByRole("switch")).toBeChecked();
  });

  it("should support controlled state with checked prop", () => {
    const Controlled = () => {
      const [state, setState] = useState(false);

      return <Switch checked={state} onChange={() => setState(!state)} />;
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
      <Switch defaultChecked={true}>
        {({ checked }) => {
          return (
            <SwitchLabel>
              <SwitchInput />
              <span data-testid="testid-mode">
                {checked ? DARK_MODE : LIGHT_MODE}
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
