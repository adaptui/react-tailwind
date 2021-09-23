import { screen } from "@testing-library/react";

import {
  Input,
  InputGroup,
  InputGroupPrefix,
  InputGroupSuffix,
  InputPrefix,
  InputSuffix,
} from "../../input";
import { cleanup, render, testA11y } from "../../utils/testUtils";

afterEach(cleanup);

describe("<Input />", () => {
  it("should render input's prefix/suffix correctly", () => {
    const { getByText } = render(
      <Input>
        <InputPrefix>Hello</InputPrefix>
        <Input />
        <InputSuffix>World</InputSuffix>
      </Input>,
    );
    expect(getByText("Hello")).toBeInTheDocument();
    expect(getByText("World")).toBeInTheDocument();
  });

  it("should render InpuGroup's prefix/suffix correctly", () => {
    const { getByText } = render(
      <InputGroup>
        <InputGroupPrefix>Hello</InputGroupPrefix>
        <Input>
          <InputPrefix>InputHello</InputPrefix>
          <Input />
          <InputSuffix>InputWorld</InputSuffix>
        </Input>
        <InputGroupSuffix>World</InputGroupSuffix>
      </InputGroup>,
    );
    expect(getByText("InputHello")).toBeInTheDocument();
    expect(getByText("InputWorld")).toBeInTheDocument();
    expect(getByText("Hello")).toBeInTheDocument();
    expect(getByText("World")).toBeInTheDocument();
  });

  it("should render Input & InputGroup prefix/suffix combined correctly", () => {
    const { getByText } = render(
      <InputGroup>
        <InputGroupPrefix>Hello</InputGroupPrefix>
        <Input />
        <InputGroupSuffix>World</InputGroupSuffix>
      </InputGroup>,
    );
    expect(getByText("Hello")).toBeInTheDocument();
    expect(getByText("World")).toBeInTheDocument();
  });

  it("should render invalid input correctly", () => {
    render(<Input isInvalid />);

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("should render disabled input correctly", () => {
    render(<Input isDisabled />);

    expect(screen.getByRole("textbox")).toHaveAttribute("disabled");
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-disabled");
  });

  it("should render readOnly input correctly", () => {
    render(<Input isReadOnly />);

    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-readonly",
      "true",
    );
  });

  it("should not have a11y violations", async () => {
    await testA11y(<Input />, {
      axeOptions: {
        rules: {
          label: { enabled: false },
        },
      },
    });
  });
});
