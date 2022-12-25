import { renderTrendy } from './slider-film';
import FilmotekaApi from '../api-service/filmoteka-api';
import { renderHomepage } from './gallery';
import filmsCardTpl from '../../templates/card-films.hbs';
import { Loading } from 'notiflix';
import { loadingSpiner } from './spiner';
import Pagination from 'tui-pagination';
import { query } from 'firebase/database';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  containerList: document.querySelector('.js-card'),
  containerWarning: document.querySelector('.js-warning'),
  containerWarningResults: document.querySelector('.js-search-results'),
};

renderTrendy();
renderHomepage();

const options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const filmotekaApi = new FilmotekaApi();
const pagination = new Pagination('pagination', options);

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();
  loadingSpiner();
  clearHomePage();
  filmotekaApi.query = evt.currentTarget.query.value;
  if (evt.currentTarget.query.value === '') {
    renderHomepage();
    Loading.remove();
    refs.containerWarningResults.textContent = '';
    refs.containerWarning.textContent = `Please write something ...`;
    return;
  } else {
    refs.containerWarning.textContent = '';
  }
  console.log(evt.currentTarget.query.value);
  Loading.remove();

  filmotekaApi.resetPage();
  filmotekaApi.fetchSearchTotalFilm().then(data => {
    if (data.total_pages === 0) {
      renderHomepage();
      refs.containerWarningResults.textContent = `Sorry, there no results found. Try searching for something else! `;
    } else {
      refs.containerWarningResults.textContent = '';
      filmotekaApi
        .fetchSearchFilmWithGenres()
        .then(appendResultsMarkup)
        .catch(err => {
          refs.containerList.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}"/>`;
        });
    }
  });
}

function appendResultsMarkup(results) {
  refs.containerList.innerHTML = filmsCardTpl(results);
}
function clearHomePage() {
  refs.containerList.innerHTML = '';
}

console.dir(pagination);

pagination.on('beforeMove', function (eventData) {
  filmotekaApi.pageNum = Number.parseInt(eventData.page);
  paginationSearch();
});

pagination.on('afterMove', function (eventData) {
  filmotekaApi.pageNum = Number.parseInt(eventData.page);
  paginationSearch();
});

function paginationSearch() {
  if (filmotekaApi.query === '') {
    filmotekaApi
      .fetchTrendFilm()
      .then(appendResultsMarkup)
      .catch(err => {
        refs.containerList.innerHTML = `<img class="catch-error-pagination" src="}"/>`;
      });
  } else {
    filmotekaApi
      .fetchSearchFilm()
      .then(appendResultsMarkup)
      .catch(err => {
        refs.containerList.innerHTML = `<img class="catch-error-pagination" src="}"/>`;
      });
  }
}
