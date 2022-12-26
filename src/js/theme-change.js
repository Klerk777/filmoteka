const bodyRef = document.querySelector('body');
const toggleRef = document.querySelector('#theme-switch-toggle');
const footerDarktheme = document.querySelector('.footer');
const LOCALSTORAGE_THEME_KEY = 'theme';
toggleRef.addEventListener('change', event => {
  if (!bodyRef.classList.contains('dark-theme')) {
    bodyRef.classList.add('dark-theme');
    footerDarktheme.classList.add('dark-theme');
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, 'dark-theme');
  } else {
    bodyRef.classList.remove('dark-theme');
    footerDarktheme.classList.remove('dark-theme');
    localStorage.removeItem(LOCALSTORAGE_THEME_KEY, 'dark-theme');
  }
});

export { bodyRef, toggleRef, footerDarktheme };

function setThemeFromLocalStorage() {
  if (localStorage.getItem(LOCALSTORAGE_THEME_KEY)) {
    bodyRef.classList.add('dark-theme');
  }
  console.log('Theme is: '), bodyRef.classList;
}
setThemeFromLocalStorage();
