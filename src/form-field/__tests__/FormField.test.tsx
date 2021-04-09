import * as React from "react";
import { screen } from "@testing-library/react";

import {
  FormField,
  FormLabel,
  FormErrorText,
  FormHelperText,
  FormRequiredText,
} from "../index";
import { Input } from "../../input";
import { FormFieldProps } from "../FormField";
import { render, testA11y } from "../../utils/testUtils";

const LABEL_TEXT = "Form label";
const HINT_TEXT = "This is hint text";
const ERROR_TEXT = "This is error text";
const REQUIRED_TEXT = "Required";
const LABEL_TESTID = "testid-label";
const HINT_TESTID = "testid-hint";
const ERROR_TESTID = "testid-error";
const REQUIRED_TESTID = "testid-required";
const INPUT_TESTID = "testid-input";

const FormFieldComponent: React.FC<FormFieldProps> = props => {
  return (
    <FormField {...props}>
      <FormLabel data-testid={LABEL_TESTID}>
        {LABEL_TEXT}
        <FormRequiredText data-testid={REQUIRED_TESTID}>
          {REQUIRED_TEXT}
        </FormRequiredText>
      </FormLabel>
      <Input data-testid={INPUT_TESTID} />
      <FormHelperText data-testid={HINT_TESTID}>{HINT_TEXT}</FormHelperText>
      <FormErrorText data-testid={ERROR_TESTID}>{ERROR_TEXT}</FormErrorText>
    </FormField>
  );
};

describe("<FormField />", () => {
  expect.assertions(1);

  it("should render FormField", () => {
    const { asFragment } = render(<FormFieldComponent id="email" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render FormErrorText when isInvalid is true", () => {
    const { rerender } = render(<FormFieldComponent isInvalid id="email" />);
    expect(screen.queryByTestId(ERROR_TESTID)).toBeInTheDocument();

    rerender(<FormFieldComponent id="email" />);
    expect(screen.queryByTestId(ERROR_TESTID)).not.toBeInTheDocument();
  });

  it("should render RequiredText when isRequired is true", () => {
    const { rerender } = render(<FormFieldComponent isRequired id="email" />);

    expect(screen.queryByTestId(REQUIRED_TESTID)).toBeInTheDocument();

    rerender(<FormFieldComponent id="email" />);
    expect(screen.queryByTestId(REQUIRED_TESTID)).not.toBeInTheDocument();
  });

  it("should set proper aria attributes to input on isDisabled", () => {
    const { rerender } = render(<FormFieldComponent isDisabled id="email" />);

    expect(screen.queryByTestId(INPUT_TESTID)).toHaveAttribute("disabled");
    expect(screen.queryByTestId(INPUT_TESTID)).toHaveAttribute(
      "aria-disabled",
      "true",
    );

    rerender(<FormFieldComponent id="email" />);
    expect(screen.queryByTestId(INPUT_TESTID)).not.toHaveAttribute("disabled");
  });

  it("should set proper aria attributes to input on isRequired", () => {
    const { rerender } = render(<FormFieldComponent isRequired id="email" />);

    expect(screen.queryByTestId(INPUT_TESTID)).toHaveAttribute("required");
    expect(screen.queryByTestId(INPUT_TESTID)).toHaveAttribute(
      "aria-required",
      "true",
    );

    rerender(<FormFieldComponent id="email" />);
    expect(screen.queryByTestId(INPUT_TESTID)).not.toHaveAttribute("required");
  });

  it("should set proper aria attributes to input on isInvalid", () => {
    const { rerender } = render(<FormFieldComponent isInvalid id="email" />);

    expect(screen.queryByTestId(INPUT_TESTID)).toHaveAttribute(
      "aria-invalid",
      "true",
    );

    rerender(<FormFieldComponent id="email" />);
    expect(screen.queryByTestId(INPUT_TESTID)).not.toHaveAttribute(
      "aria-invalid",
    );
  });

  it("should set proper aria attributes to input on isReadOnly", () => {
    const { rerender } = render(<FormFieldComponent isReadOnly id="email" />);

    expect(screen.queryByTestId(INPUT_TESTID)).toHaveAttribute("readonly");
    expect(screen.queryByTestId(INPUT_TESTID)).toHaveAttribute(
      "aria-readonly",
      "true",
    );

    rerender(<FormFieldComponent id="email" />);
    expect(screen.queryByTestId(INPUT_TESTID)).not.toHaveAttribute(
      "aria-readonly",
    );
  });

  it("should support render props", () => {
    const { asFragment } = render(
      <FormField id="email" isReadOnly isDisabled isInvalid isRequired>
        {({ inputProps, setHasErrorText, setHasHelpText, ...props }) => (
          <>
            <FormLabel>{LABEL_TEXT}</FormLabel>
            <input {...inputProps} />
            <FormHelperText>{HINT_TEXT}</FormHelperText>
            {JSON.stringify(props, null, 2)}
          </>
        )}
      </FormField>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should not have a11y violations", async () => {
    await testA11y(<FormFieldComponent id="email" />);
  });
});
