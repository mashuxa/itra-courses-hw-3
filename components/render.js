export default function (article) {

  const articleNodeElem = document.createElement('article');
  const headNodeElem = document.createElement('h1');
  const imgNodeElem = document.createElement('img');
  const descriptionNodeElem = document.createElement('div');

  articleNodeElem.className = 'article';

  if (article.title) {
    headNodeElem.className = 'article__head';
    headNodeElem.innerHTML = article.title;
    articleNodeElem.appendChild(headNodeElem);
  }
  if (article.urlToImage) {
    imgNodeElem.className = 'article__img';
    imgNodeElem.src = article.urlToImage;
    articleNodeElem.appendChild(imgNodeElem);
  }
  if (article.description) {
    descriptionNodeElem.className = 'article__description';
    descriptionNodeElem.innerHTML = article.description;
    articleNodeElem.appendChild(descriptionNodeElem);
  }

  return articleNodeElem;
}