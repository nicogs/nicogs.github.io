const toggle = document.querySelector('.theme-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
  });
}
const article = document.querySelector('#article-content');
const readingTime = document.querySelector('.reading-time');
if (article && readingTime) {
  const words = article.innerText.trim().split(/\s+/).filter(Boolean).length;
  readingTime.textContent = `${Math.max(1, Math.ceil(words / 220))} min read`;
}
