import React from "react";
import { shallow } from "enzyme";
import withLoading from "./withLoading";

const FakeComponent = () => <p>Fake Component</p>;

describe("withLoading", () => {
  let fakeComponentWrapper;
  let WithLoaderComponent;

  beforeEach(() => {
    WithLoaderComponent = withLoading(FakeComponent);
  });

  describe("when isLoading is true", () => {
    const isLoading = true;

    beforeEach(() => {
      fakeComponentWrapper = shallow(<WithLoaderComponent isLoading={isLoading} />);
    });

    it("does not render the original component", () => {
      expect(fakeComponentWrapper.find(FakeComponent)).toHaveLength(0);
    });

    it("renders the loading text", () => {
      expect(fakeComponentWrapper.find("div").text()).toEqual("Loading ...");
    });
  });

  describe("when isLoading is false", () => {
    const isLoading = false;

    beforeEach(() => {
      fakeComponentWrapper = shallow(<WithLoaderComponent isLoading={isLoading} />);
    });

    it("renders the original component", () => {
      expect(fakeComponentWrapper.find(FakeComponent)).toHaveLength(1);
    });
  });
});
