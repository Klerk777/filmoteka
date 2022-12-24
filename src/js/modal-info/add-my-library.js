import { currentUser } from '../api-service/firebase-api-auth';

import { writeQueue, writeWatched } from '../api-service/firebase-api-database';
const refs = {
  btnWatched: document.querySelector('.js-btn-watched'),
  btnQueue: document.querySelector('.js-btn-queue'),
};

refs.btnWatched.addEventListener('click', onWatched);

function onWatched(e) {
  console.log(e.target.dataset.id);
  console.log('film', film);
  const user = currentUser();
  //const film = await infoFilmApi.fetchInfoFilm(id);
  console.log('film', film);
  //writeWatched(user.uid);
}
