import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const app = shallow(<App />);
    expect(app.find("[data-testid='main-app']").length).toEqual(1);
  });
});
