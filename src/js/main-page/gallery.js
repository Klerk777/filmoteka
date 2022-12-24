import FilmotekaApi from '../api-service/filmoteka-api';
import filmsCardTpl from '../../templates/card-films.hbs';



const refs = {
   containerList: document.querySelector('.js-card'),
}
const filmotekaApi = new FilmotekaApi();
renderHomepage();

export function renderHomepage() {
  filmotekaApi.fetchInTrendFilmWithGenres().then(appendResultsMarkup);   
}

function appendResultsMarkup(results) {
  refs.containerList.innerHTML = filmsCardTpl(results);
}
