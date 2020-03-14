import React from "react";
import { shallow } from "enzyme";
import GenderSelect from "../../components/GenderSelect";

describe("<GenderSelect />", () => {
  it("renders without crashing", () => {
    const genderSelect = shallow(<GenderSelect />);
    expect(genderSelect.find("[data-testid='gender-select']").length).toEqual(
      1
    );
  });
});
