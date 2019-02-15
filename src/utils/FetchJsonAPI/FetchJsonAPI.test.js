import FetchJsonAPI from './FetchJsonAPI';

const json = jest.fn().mockResolvedValue(() => ({
  title: 'Lorem Ipsum',
}));

window.fetch = jest.fn().mockImplementation(() => ({
  status: 200,
  json,
}));


describe('FetchJsonAPI', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = jest.spyOn(window, 'fetch');
  });

  it('calls window.fetch', () => {
    FetchJsonAPI();

    expect(fetchMock).toHaveBeenCalled();
  });

  it('calls json', () => {
    FetchJsonAPI();

    expect(json).toHaveBeenCalled();
  });
});
