import { useState } from "react";

import { cleanup, fireEvent, render, screen } from "../../utils/testUtils";
import { Switch } from "../index";

afterEach(cleanup);

describe("Switch", () => {
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

  it("can be disabled", () => {
    render(<Switch disabled defaultState={true} />);

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
});
