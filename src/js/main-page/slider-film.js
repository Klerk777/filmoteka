import FilmotekaApi from '../api-service/filmoteka-api';
import filmsCardSliderTpl from '../../templates/slider-films.hbs';
import { Loading } from 'notiflix';
import { loadingSpiner } from './spiner';
import { async } from '@firebase/util';

const refs = {
  sliderContainer: document.querySelector('.slide-track'),
};
const filmotekaApi = new FilmotekaApi();

export async function renderTrendy() {
  loadingSpiner();
  try {
    for (let page = 1; page <= 5; page++) {
      filmotekaApi.fetchTrendFilm().then(renderSliderFilms);
      filmotekaApi.incrementPage();
    }
    Loading.remove();
  } catch (error) {
    refs.sliderContainer.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}" />`;
  }
}

//   filmotekaApi
//     .fetchTrendFilm()
//     .then(renderSliderFilms)
//     .catch(err => {
//       refs.sliderContainer.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}" />`;
//     });
//   Loading.remove();
// }

function renderSliderFilms(articles) {
  refs.sliderContainer.insertAdjacentHTML('beforeend', filmsCardSliderTpl(articles));
  // refs.sliderContainer.innerHTML = filmsCardSliderTpl(articles);
  console.log(refs.sliderContainer);
}
