const NewsApi = require('./newsApi');
const Model = require('/model')
const View = require('./view');

const newsApi = new NewsApi();
const model = new Model();
const view = new View(newsApi);

view.displayHeadlines();