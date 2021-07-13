import React from "react";
import { Badge } from "../Badge";
import { render } from "../../utils/testUtils";

describe("<Badge />", () => {
  it("should render properly", () => {
    const { asFragment } = render(<Badge>Hello world</Badge>);

    expect(asFragment()).toMatchSnapshot();
  });
});
