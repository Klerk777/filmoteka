import FilmotekaApi from '../api-service/filmoteka-api';
// import {trailerYouTube, onYouTubeIframeAPIReady} from './modalTrailer';
import { modalInfoCreat } from './modal-creat-element';
import { trailer } from './youtubePlayer';

const infoFilmApi = new FilmotekaApi();
let ID_FILMS = '';

const slideTrack = document.querySelector('.slide-track');
const backdrop = document.querySelector('.backdrop');
const modalWrap = document.querySelector('.modal__wrap');
const modalJsCard = document.querySelector('.js-card');
const trailerWrap = document.querySelector('.player');

slideTrack.addEventListener('click', openModal);
modalJsCard.addEventListener('click', openModal);

const langTrailer = {
  ua: 'uk-UA',
  en: 'en-US',
};

// let URL_IMG_POSTER = 'https://image.tmdb.org/t/p/'a
async function modalFunction(id) {
  await infoFilmApi.fetchInfoFilm(id).then(creatRender);
}

async function openModal(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  modalWrap.innerHTML = '';
  backdrop.classList.add('is-open');
  ID_FILMS = e.target.dataset.id;
  modalFunction(ID_FILMS);

  // console.log(e.target);
}

async function creatRender(e) {
  const trailerKey = await creatTrailerFilm(ID_FILMS);
  const res = modalInfoCreat(e, ID_FILMS, trailerKey);
  // console.log(res);

  modalWrap.insertAdjacentHTML('beforeend', res);
  creatTrailerFilm(ID_FILMS);
}

async function creatTrailerFilm(id) {
  const enTrailer = await infoFilmApi.fetchTrailreFilm(id, langTrailer.en);
  console.log(enTrailer.results);

  if (enTrailer.results.length == 0) return;
  return enTrailer.results[0].key;

  // console.log(enTrailer.results[0].key)

  // let key = enTrailer.results[0].key
  //   const  res =  trailer(key);
  //   console.log(res)
  // trailerWrap.innerHTML = res;
  //   // const ruTrailer = await infoFilmApi.fetchTrailreFilm(id, langTrailer.ru)
  // //   console.log(uaTrailer)
  //   console.log(enTrailer)
  //   const  testArray = [uaTrailer, enTrailer]
  // //   console.log(testArray)
  //   const t =  testArray.map(e => e.results.length > 0)
  // //   console.log(t)
  //   const dataLanghKeyTrailer = []
  //   const y =  testArray.forEach(e => {
  //     if(!e.results.length) return;
  //     const x =  {
  // key: e.results[0].key,
  // lang: e.results[0].iso_639_1,
  //     }
  //     console.log(x)
  //     dataLanghKeyTrailer.push(x)
  //   })
  //   console.log(dataLanghKeyTrailer)
  // if(dataLanghKeyTrailer)  {
  //  const keyFind =  dataLanghKeyTrailer.find(e => e.lang === 'ua')
  //  const key = keyFind ? keyFind.key : dataLanghKeyTrailer.key
  // }
  // await trailerYouTube()
  //   window.onYouTubePlayerAPIReady = function () {
  //    await onYouTubeIframeAPIReady(key);
  //
  // };
}
