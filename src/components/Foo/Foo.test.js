import React from "react";
import { shallow } from "enzyme";
import Foo from "./Foo";

describe("<Foo />", () => {
  let fooWrapper;

  const name = "__buzz__";

  beforeEach(() => {
    fooWrapper = shallow(<Foo name={name} />);
  });

  it("renders <p />", () => {
    expect(fooWrapper.find("p")).toHaveLength(1);
  });

  it("greets the user", () => {
    const expectedH1 = `Hello ${name}!`;

    expect(fooWrapper.find("p").text()).toEqual(expectedH1);
  });
});
