
import { renderTrendy } from './slider-film';
import FilmotekaApi from '../api-service/filmoteka-api';
import { renderHomepage } from './gallery';
import filmsCardTpl from '../../templates/card-films.hbs';
import { Loading } from 'notiflix';
import { loadingSpiner } from './spiner';

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    containerList: document.querySelector('.js-card'),
    containerWarning: document.querySelector('.js-warning'),
    containerWarningResults: document.querySelector('.js-search-results'),
    
}

renderTrendy();
renderHomepage();

const filmotekaApi = new FilmotekaApi();

refs.searchForm.addEventListener('submit', onSearch);

 function onSearch(evt) {
    evt.preventDefault();
     loadingSpiner();
     clearHomePage();
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
    filmotekaApi.query = evt.currentTarget.query.value;
  
     filmotekaApi.resetPage();
     filmotekaApi.fetchSearchTotalFilm().then(data => {
         if (data.total_pages === 0) {
             renderHomepage();
             refs.containerWarningResults.textContent = `Sorry, there no results found. Try searching for something else! `;
         } else {
             refs.containerWarningResults.textContent = '';
             filmotekaApi.fetchSearchFilmWithGenres().then(appendResultsMarkup).catch(err => {
                 refs.containerList.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}"/>`
             });
             
         }
     })
      evt.currentTarget.query.value = '';
   
}


function appendResultsMarkup(results) {
  refs.containerList.innerHTML = filmsCardTpl(results);
  
}
function clearHomePage() {
    refs.containerList.innerHTML = '';
}