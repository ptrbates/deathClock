import React from "react";
import { mount } from "enzyme";
import Output from "../../components/Output";

describe("<Output />", () => {
  it("renders without crashing", () => {
    const output = mount(<Output />);
    expect(output.find("[data-testid='output-box']").length).toEqual(1);
  });
});
