import React from "react";
import { shallow } from "enzyme";
import Fetch from "./Fetch";
import * as fetcher from "../../../utils/FetchData/FetchData";

jest.mock("../../../utils/FetchData/FetchData", () =>
  require
    .requireActual("../../../utils/TestUtils/TestUtils")
    .mockOriginalFunctionality("../FetchData/FetchData"),
);

describe("<Fetch />", () => {
  let fetchWrapper;

  beforeEach(() => {
    fetchWrapper = shallow(<Fetch />);
  });

  describe("componentDidMount", () => {
    it("calls fetchData", () => {
      expect(fetcher.fetchData).toHaveBeenCalled();
    });

    it("sets isLoading to false", () => {
      expect(fetchWrapper.props().isLoading).toBeFalsy();
    });

    it("sets the fetched todos", async () => {
      const fetchedTodo = [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
      ];

      fetcher.fetchData.mockImplementationOnce(() => fetchedTodo);
      fetchWrapper = await shallow(<Fetch />);

      expect(fetchWrapper.state("todos")).toEqual(fetchedTodo);
    });
  });

  it("renders the text between the first paragraph", () => {
    const expectedText = "You have just fetched a TODO!";

    expect(
      fetchWrapper
        .find("p")
        .first()
        .text(),
    ).toEqual(expectedText);
  });
});
