import React from "react";
import { shallow } from "enzyme";
import Input from "../../components/Input";

describe("<Input />", () => {
  it("renders without crashing", () => {
    const input = shallow(<Input />);
    expect(input.find("[data-testid='input-box']").length).toEqual(1);
  });
});
