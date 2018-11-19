import getArticles from './getArticles.js';

const API_KEY = 'e83ca29c89f04841b88326345f4922d0';
const APP_LANGUAGE = 'ru';

document.addEventListener('click', (e) => {
  const targetEl = e.target;
  const sources = targetEl.dataset.category;
  if (targetEl.classList.contains('tab--active')) {
    return;
  }
  if (targetEl.classList.contains('tab')) {
    const tabs = Array.from(document.querySelectorAll('.tab'));
    tabs.forEach((tab) => {
      tab.className = 'tab';
    });
    document.querySelector('.preloader').style.display = 'block';
    targetEl.classList.add('tab--active');
    getArticles(`https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${API_KEY}`);
  }
});
