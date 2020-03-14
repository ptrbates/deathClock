import React from "react";
import { shallow } from "enzyme";
import BirthDateSelect from "../../components/BirthDateSelect";

describe("<GenderSelect />", () => {
  it("renders without crashing", () => {
    const birthDateSelect = shallow(<BirthDateSelect />);
    expect(
      birthDateSelect.find("[data-testid='birthdate-select']").length
    ).toEqual(1);
  });
});
