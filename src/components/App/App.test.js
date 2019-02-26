import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { BasicDiv, List } from "./App.style";
import RB from "../../RB.svg";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders the RB logo", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });

  it("renders BasicDiv", () => {
    expect(wrapper.find(BasicDiv)).toHaveLength(1);
  });

  it("renders List", () => {
    expect(wrapper.find(List)).toHaveLength(1);
  });
});
