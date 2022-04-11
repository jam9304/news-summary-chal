require('jest-fetch-mock').enableMocks();

const NewsApi = require('./newsApi.js');

describe("NewsApi", () => {
it("uses fetch to make post request to search for articles", () => {
    const newsApi = new NewsApi();

    fetch.mockResponseOnce(JSON.stringify({
      response: { results: [ { webTitle : "News is really depressing" }]}
    }));

    newsApi.searchStory(result => {
      expect(result.response.results[0].webTitle).toEqual("News is really depressing");
    })
  });
  
});