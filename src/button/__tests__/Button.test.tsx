import { Button } from "../Button";

import { screen } from "@testing-library/react";
import { render, testA11y } from "../../utils/testUtils";

describe("Testing Button", () => {
  it("should render properly", () => {
    render(<Button>Hello World</Button>);

    expect(screen.getByRole("button")).toHaveTextContent(/hello world/i);
  });

  it("should render properly with iconOnly", () => {
    render(<Button iconOnly={<p>Icon only</p>}>hello world</Button>);

    expect(screen.queryByText(/hello world/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Icon only/i)).toBeInTheDocument();
  });

  test("prefix, suffix & children should be ignored when iconOnly is set", () => {
    render(
      <Button
        prefix={<p>prefix</p>}
        suffix={<p>suffix</p>}
        iconOnly={<p>Icon only</p>}
      >
        hello world
      </Button>,
    );

    expect(screen.queryByText(/hello world/i)).not.toBeInTheDocument();
    expect(screen.queryByText("prefix")).not.toBeInTheDocument();
    expect(screen.queryByText("suffix")).not.toBeInTheDocument();
    expect(screen.queryByText(/Icon only/i)).toBeInTheDocument();
  });

  test("when loading & iconOnly is set: prefix, suffix & children should be ignored and show spinner", () => {
    render(
      <Button
        loading
        prefix={<p>prefix</p>}
        suffix={<p>suffix</p>}
        iconOnly={<p>Icon only</p>}
      >
        hello world
      </Button>,
    );

    expect(screen.queryByText(/hello world/i)).not.toBeInTheDocument();
    expect(screen.queryByText("prefix")).not.toBeInTheDocument();
    expect(screen.queryByText("suffix")).not.toBeInTheDocument();
    expect(screen.queryByText(/Icon only/i)).toHaveAttribute("aria-hidden");
    expect(screen.queryByText(/Icon only/i)?.parentElement).toHaveClass(
      "opacity-0",
    );
    expect(screen.getByTestId("testid-spinner")).toBeInTheDocument();
  });

  it("should render with loading spinner when loading is true", () => {
    render(<Button loading>hello world</Button>);

    expect(screen.getByTestId("testid-spinner")).toBeInTheDocument();
  });

  it("should render a custom loading spinner", () => {
    render(
      <Button loading spinner={<p>spinning</p>}>
        hello world
      </Button>,
    );

    expect(screen.queryByText("spinning")).toBeInTheDocument();
  });

  it("should render with prefix suffix", () => {
    render(
      <Button prefix={<p>prefix</p>} suffix={<p>suffix</p>}>
        hello world
      </Button>,
    );

    expect(screen.queryByText("prefix")).toBeInTheDocument();
    expect(screen.queryByText("suffix")).toBeInTheDocument();
  });

  test("when loading, replace prefix with spinner when prefix is provided", () => {
    render(
      <Button prefix={<p>prefix</p>} loading>
        hello world
      </Button>,
    );

    expect(screen.queryByText("prefix")).not.toBeInTheDocument();
    expect(screen.getByTestId("testid-spinner")).toBeInTheDocument();
  });

  test("when loading, replace suffix with spinner when suffix is provided", () => {
    render(
      <Button suffix={<p>suffix</p>} loading>
        hello world
      </Button>,
    );

    expect(screen.queryByText("suffix")).not.toBeInTheDocument();
    expect(screen.getByTestId("testid-spinner")).toBeInTheDocument();
  });

  test("when loading, replace suffix with spinner when both suffix and prefix are provided", () => {
    render(
      <Button prefix={<p>prefix</p>} suffix={<p>suffix</p>} loading>
        hello world
      </Button>,
    );

    expect(screen.queryByText("prefix")).toBeInTheDocument();
    expect(screen.queryByText("suffix")).not.toBeInTheDocument();
    expect(screen.getByTestId("testid-spinner")).toBeInTheDocument();
  });

  it("should not have axe violations", async () => {
    testA11y(<Button>Ally</Button>);
  });
});
