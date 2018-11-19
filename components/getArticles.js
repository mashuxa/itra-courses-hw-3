import render from './render.js';

export default function (url) {
  fetch(url).then((response) => {
    if (response.status !== 200) {
      alert(`Error: ${response.status}`);
    } else {
      response.json().then((data) => {
        if (data.status === 'ok') {
          let articlesCount = Math.min(3, data.totalResults);
          let wrapper = document.querySelector('.news-wrapper');
          wrapper.innerHTML = '';
          for (let i = 0; i < articlesCount; i++) {
            wrapper.appendChild(render(data.articles[i]));
            document.querySelector('.preloader').style.display = 'none';
          }
        }
      });
    }

  });
}
