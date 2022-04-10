const apiKey = require('./env.js');

class NewsApi {
  async newsHeadlines() {
    const response = await fetch(`https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=thumbnail`);
    return await response.json();
  };
};

module.exports = NewsApi;