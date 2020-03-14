import React from "react";
import { shallow } from "enzyme";
import RaceSelect from "../../components/RaceSelect";

describe("<GenderSelect />", () => {
  it("renders without crashing", () => {
    const raceSelect = shallow(<RaceSelect />);
    expect(raceSelect.find("[data-testid='race-select']").length).toEqual(1);
  });
});
