const NewsModel = require('./newsModel');

describe('Notes Model', () => {
  let newsModel;
  beforeEach(() => {
    newsModel = new NewsModel();
  });

  it('it should be an instance of NewsModel and return an empty array of stories', () => {
    expect(newsModel).toBeInstanceOf(NewsModel);
    expect(newsModel.getHeadlines()).toEqual([]);
  });

  it('can add a headline', () => {
    newsModel.addHeadline('Great Story, Read All About It!');
    expect(newsModel.getHeadlines()).toEqual(['Great Story, Read All About It!']);
  });

  it('should be able to set Headlines', () => {
    const headlines = [
      { Title: 'News About Nothing' },
      { Title: 'News About Something' },
    ];

    newsModel.setHeadlines(headlines);
    expect(newsModel.getHeadlines()).toEqual(headlines);
  });
});