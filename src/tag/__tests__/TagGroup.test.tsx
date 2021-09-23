import { press } from "reakit-test-utils";
import { screen } from "@testing-library/react";

import { render, testA11y } from "../../utils/testUtils";
import { Tag, TagGroup } from "..";

describe("<TagGroup />", () => {
  it("should allowArrowNavigation", () => {
    const onCloseFn = jest.fn();
    render(
      <TagGroup allowArrowNavigation>
        <Tag closable>Tag 1</Tag>
        <Tag closable onClose={onCloseFn}>
          Tag 2
        </Tag>
      </TagGroup>,
    );

    press.Tab();
    press.ArrowRight();
    press.Enter();

    expect(onCloseFn).toBeCalledTimes(1);
    expect(screen.getAllByTestId("testid-close-element")[1]).toHaveFocus();
  });

  it("should not have a11y violations", async () => {
    await testA11y(
      <TagGroup>
        <Tag closable>Tag 1</Tag>
        <Tag closable>Tag 2</Tag>
      </TagGroup>,
    );
  });
});
