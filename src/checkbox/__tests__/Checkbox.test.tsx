import { useState } from "react";
import { press } from "reakit-test-utils";

import {
  Checkbox,
  CheckboxIcon,
  CheckboxInput,
  CheckboxLabel,
  CheckboxProps,
  CheckboxStatus,
  CheckboxText,
} from "../";
import { cleanup, fireEvent, render, screen } from "../../utils/testUtils";

afterEach(cleanup);

const CheckboxCustom = (props: CheckboxProps) => {
  const [state, onStateChange] = useState<CheckboxStatus>(true);

  return (
    <Checkbox state={state} onStateChange={onStateChange} {...props}>
      <CheckboxLabel>
        <CheckboxInput />
        <CheckboxIcon />
        <CheckboxText>Custom Checkbox</CheckboxText>
      </CheckboxLabel>
    </Checkbox>
  );
};

describe("<Checkbox />", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<Checkbox value="apple">Checkbox</Checkbox>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should toggle checkbox state", () => {
    render(<Checkbox value="apple">Checkbox</Checkbox>);

    expect(screen.getByRole("checkbox")).not.toBeChecked();
    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("checkbox")).toBeChecked();
    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("can have custom icons", async () => {
    const WithIcon = (args: CheckboxProps) => (
      <Checkbox
        {...args}
        icon={({ isChecked, isIndeterminate, isDisabled, isInvalid }) => {
          console.log(isChecked, isIndeterminate);
          return (
            <div
              data-testid="testid-icon"
              data-disabled={isDisabled}
              data-invalid={isInvalid}
            >
              {isIndeterminate
                ? "indeterminate"
                : isChecked
                ? "checked"
                : "unchecked"}
            </div>
          );
        }}
      >
        Checkbox
      </Checkbox>
    );
    const { rerender } = render(<WithIcon />);

    expect(screen.getByTestId("testid-icon")).toHaveTextContent("unchecked");

    rerender(<WithIcon defaultState={true} />);
    expect(screen.getByTestId("testid-icon")).toHaveTextContent("checked");

    rerender(<WithIcon defaultState={false} />);
    expect(screen.getByTestId("testid-icon")).toHaveTextContent("unchecked");

    rerender(<WithIcon defaultState={"indeterminate"} />);
    expect(screen.getByTestId("testid-icon")).toHaveTextContent("unchecked");

    rerender(<WithIcon isInvalid />);
    expect(screen.getByTestId("testid-icon")).toHaveAttribute("data-invalid");

    rerender(<WithIcon isDisabled />);
    expect(screen.getByTestId("testid-icon")).toHaveAttribute("data-disabled");

    rerender(<WithIcon defaultState={true} isDisabled isInvalid />);
    expect(screen.getByTestId("testid-icon")).toHaveTextContent("checked");
    expect(screen.getByTestId("testid-icon")).toHaveAttribute("data-disabled");
    expect(screen.getByTestId("testid-icon")).toHaveAttribute("data-invalid");

    rerender(<WithIcon defaultState={false} isDisabled isInvalid />);
    expect(screen.getByTestId("testid-icon")).toHaveTextContent("unchecked");
    expect(screen.getByTestId("testid-icon")).toHaveAttribute("data-disabled");
    expect(screen.getByTestId("testid-icon")).toHaveAttribute("data-invalid");

    // TODO: Fix it
    // rerender(<WithIcon defaultState={"indeterminate"} isDisabled isInvalid />);
    // expect(screen.getByTestId("testid-icon")).toHaveTextContent(
    //   "indeterminate",
    // );
    // expect(screen.getByTestId("testid-icon")).toHaveAttribute("data-disabled");
    // expect(screen.getByTestId("testid-icon")).toHaveAttribute("data-invalid");
  });

  it("can be isDisabled", () => {
    render(
      <Checkbox isDisabled defaultState={true}>
        Checkbox
      </Checkbox>,
    );

    expect(screen.getByRole("checkbox")).toBeDisabled();
    // toBeChecked is failing for this case
    expect((screen.getByRole("checkbox") as HTMLInputElement).checked).toBe(
      true,
    );
  });

  it("can be disabled", () => {
    render(
      <Checkbox disabled defaultState={true}>
        Checkbox
      </Checkbox>,
    );

    expect(screen.getByRole("checkbox")).toBeDisabled();
    // toBeChecked is failing for this case
    expect((screen.getByRole("checkbox") as HTMLInputElement).checked).toBe(
      true,
    );
  });

  it("should support controlled state", () => {
    const Controlled = () => {
      const [state, setState] = useState(false);

      return (
        <Checkbox state={state} onStateChange={() => setState(!state)}>
          Checkbox
        </Checkbox>
      );
    };
    render(<Controlled />);

    expect(screen.getByRole("checkbox")).not.toBeChecked();
    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("should support custom checkbox", () => {
    const Custom = () => {
      const [state, setState] = useState(false);

      return (
        <CheckboxCustom state={state} onStateChange={() => setState(!state)}>
          Custom
        </CheckboxCustom>
      );
    };
    render(<Custom />);

    expect(screen.getByRole("checkbox")).not.toBeChecked();
    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("should support group checkboxes", () => {
    const Group = () => {
      const [state, onStateChange] = useState<CheckboxStatus>([]);

      return (
        <>
          <div data-testid="testid-choices">
            {(state as string[]).join(", ")}
          </div>
          <Checkbox state={state} onStateChange={onStateChange} value="apple">
            Apple
          </Checkbox>
          <Checkbox state={state} onStateChange={onStateChange} value="orange">
            Orange
          </Checkbox>
          <Checkbox
            state={state}
            onStateChange={onStateChange}
            value="watermelon"
          >
            Watermelon
          </Checkbox>
        </>
      );
    };

    const { getByTestId } = render(<Group />);

    expect(getByTestId("testid-choices")).toHaveTextContent("");
    press.Tab();
    press.Space();
    expect(getByTestId("testid-choices")).toHaveTextContent("apple");
    press.Tab();
    press.Space();
    expect(getByTestId("testid-choices")).toHaveTextContent("apple, orange");
    press.Tab();
    press.Space();
    expect(getByTestId("testid-choices")).toHaveTextContent(
      "apple, orange, watermelon",
    );
    press.Tab(null, { shiftKey: true });
    press.Tab(null, { shiftKey: true });
    press.Space();
    expect(getByTestId("testid-choices")).toHaveTextContent(
      "orange, watermelon",
    );
  });
});
