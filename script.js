const button = document.querySelector('.lang-toggle');
const translatable = document.querySelectorAll('[data-en][data-zh]');
let language = 'en';

button.addEventListener('click', () => {
  language = language === 'en' ? 'zh' : 'en';
  document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  translatable.forEach((element) => {
    element.textContent = element.dataset[language];
  });
  button.textContent = language === 'en' ? '中' : 'EN';
  button.setAttribute('aria-label', language === 'en' ? '切换至中文' : 'Switch to English');
});

document.querySelector('#year').textContent = new Date().getFullYear();


