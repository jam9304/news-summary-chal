/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NewsView = require('./newsView');
 let newsView;
 
 beforeEach(() => {
   document.body.innerHTML = fs.readFileSync('./index.html');
   const fakeNewsApi = {
     newsHeadlines: () => callback([{ Title: 'News About Nothing' }]),
   };
   newsView = new NewsView(fakeNewsApi);
 });
 
 describe('News View', () => {
   it('Shows a list with News', () => {
     newsView.displayNews();
 
     expect(document.querySelectorAll('article.headline').length).toBe(1);
     expect(document.querySelectorAll('article.headline')[0].innerText).toEqual(
       'News About Nothing'
     );
   });
 });