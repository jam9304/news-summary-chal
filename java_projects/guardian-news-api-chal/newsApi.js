const apiKey = require('./env.js');

class NewsApi {
  async newsHeadlines() {
    const response = await fetch(`https://content.guardianapis.com/search?api-key=4753bc48-feb6-4bb3-9bd6-b35bff1f3c40&show-fields=thumbnail`);
    return await response.json();
  };
};

module.exports = NewsApi;