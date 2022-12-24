import FilmotekaApi from '../api-service/filmoteka-api';
// import {trailerYouTube, onYouTubeIframeAPIReady} from './modalTrailer';
import { modalInfoCreat } from './modal-creat-element';

// const key = '1UbTnTS3rjY'
// const loc = window.location.host
const infoFilmApi = new FilmotekaApi();
let ID_FILMS = '';

let URL_POSTEER = 'https://image.tmdb.org/t/p/';

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

// let URL_IMG_POSTER = 'https://image.tmdb.org/t/p/'
function modalFunction(id) {
  infoFilmApi.fetchInfoFilm(id).then(creatRender);
}

async function openModal(e) {
  modalWrap.innerHTML = '';
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  ID_FILMS = e.target.dataset.id;
  await modalFunction(ID_FILMS);
  creatTrailerFilm(ID_FILMS);

  backdrop.classList.add('is-open');
}

function creatRender(e) {
  const res = modalInfoCreat(e, ID_FILMS);
  console.log(res);
  modalWrap.insertAdjacentHTML('beforeend', res);
}

async function creatTrailerFilm(id) {
  //   const uaTrailer = await infoFilmApi.fetchTrailreFilm(id, langTrailer.ua)
  //   const enTrailer = await infoFilmApi.fetchTrailreFilm(id, langTrailer.en)
  //   console.log(enTrailer.results[0].key)
  //   let key = enTrailer.results[0].key
  //     const  res = await trailer(key);
  //     console.log(res)
  //     trailerWrap.innerHTML = res;
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
