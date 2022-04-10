class NewsModel {
  constructor() {
    this.headlines = [];
  };

  getHeadlines() {
    return this.headlines;
  };

  addHeadline(headline) {
    this.headlines.push(headline);
  };

  setHeadlines(headlines) {
    headlines.forEach((headline) => {
      this.headlines.push(headline);
    });
  }

};

module.exports = NewsModel;