import FilmotekaApi from '../api-service/filmoteka-api';
import filmsCardSliderTpl from '../../templates/slider-films.hbs';

const refs = {
  sliderContainer: document.querySelector('.slide-track'),
};
const filmotekaApi = new FilmotekaApi();
renderTrendy();

export function renderTrendy() {
  filmotekaApi
    .fetchTrendFilm()
    .then(renderSliderFilms)
    .catch(err => {
      refs.sliderContainer.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}" />`;
    });
}



function renderSliderFilms(articles) {
  refs.sliderContainer.innerHTML = filmsCardSliderTpl(articles);
 
}