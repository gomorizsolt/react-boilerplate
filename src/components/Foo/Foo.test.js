import React from "react";
import { shallow } from "enzyme";
import Foo from "./Foo";
import { SampleH1 } from "./Foo.style";

describe("<Foo />", () => {
  let fooWrapper;

  const name = "@fellowDeveloper";

  beforeEach(() => {
    fooWrapper = shallow(<Foo name={name} />);
  });

  it("renders `SampleH1", () => {
    expect(fooWrapper.find(SampleH1)).toHaveLength(1);
  });

  it("renders the passed name", () => {
    const expectedH1 = `Hello ${name}!`;

    expect(fooWrapper.find(SampleH1).text()).toEqual(expectedH1);
  });
});
