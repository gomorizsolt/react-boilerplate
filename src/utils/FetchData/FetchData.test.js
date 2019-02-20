import * as fetcher from "./FetchData";

const json = jest.fn().mockResolvedValue(() => ({
  title: "Lorem Ipsum",
}));

window.fetch = jest.fn().mockImplementation(() => ({
  status: 200,
  json,
}));

describe("fetchData", () => {
  let fetchMock;

  const apiURl = "https://www.fake.com";

  beforeEach(() => {
    fetchMock = jest.spyOn(window, "fetch");
  });

  it("calls window.fetch with the given url", () => {
    fetcher.fetchData(apiURl);

    expect(fetchMock).toHaveBeenCalledWith(apiURl);
  });

  it("calls json", () => {
    fetcher.fetchData(apiURl);

    expect(json).toHaveBeenCalled();
  });
});
