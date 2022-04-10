class NewsView {
  constructor(newsApi) {
    this.newsApi = newsApi;
    this.news = [];

    this.newsCategory = document.querySelector('#main__container');

    this.newsApi.newsHeadlines((news) => {
      this.news = news;
      this.listNews();
    });
  }

  listNews() {
    this.news.forEach((news) => {
      const article = document.createElement('article');
      article.classList.add('headline');
      article.innerText = news;
      this.sectionNews.append(article);
    });

    console.log(this.newsCategory);
  }
}

module.exports = NewsView;