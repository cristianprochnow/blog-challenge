import { data } from './services/server.js';

const contentSection = document.querySelector('.blog-content .page-wrapper');
const htmlContent = data.map(post => getPost(post));
const htmlText = htmlContent.join('\n');

contentSection.innerHTML = htmlText;

/**
 * @param {typeof data[0]} data
 * @returns string
 */
function getPost(data) {
  return `
    <article class="post">
      <header>
        <span>${data.date}</span>
        <img src="./assets/heart.svg" alt="Favorite icon">
      </header>

      <main>
        <h1>${data.title}</h1>
        <p>${data.text}</p>
      </main>
    </article>
  `;
}
