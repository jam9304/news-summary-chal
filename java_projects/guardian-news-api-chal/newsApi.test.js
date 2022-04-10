require('jest-fetch-mock').enableMocks();

const NewsApi = require('./newsApi.js');

describe('News Api', () => {

  it('gets data from a mocked API', async () => {
    const newsApi = new NewsApi();

    fetch.mockResponseOnce(
      JSON.stringify({
        Title: 'The Guardian Headlines',
      })
    );

    newsApi.newsHeadlines((news) => {
      expect(news[0]).toEqual('The Guardian Headlines');
    });
  });
});