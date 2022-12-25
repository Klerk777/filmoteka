import { currentUser } from './api-service/firebase-api-auth';
import { writeQueue, writeWatched } from './api-service/firebase-api-database';
import FilmotekaApi from './api-service/filmoteka-api';

const infoFilmApi = new FilmotekaApi();
const refs = {
  backdrop: document.querySelector('.backdrop'),
  closeBtn: document.querySelector('[data-modal-close]'),
  modalWrap: document.querySelector('.modal__wrap'),
};

refs.backdrop.addEventListener('click', onBackdropHandler);
refs.closeBtn.addEventListener('click', closeModal);
window.addEventListener('keydown', closeModalEsc);
// TODO: add listener on ESC when modal is opening

function closeModal() {
  refs.backdrop.classList.remove('is-open');
  window.removeEventListener('keydown', closeModal);
  document.body.classList.remove('no-scroll');
  refs.modalWrap.innerHTML = '';
}

function onBackdropHandler(e) {
  if (e.target.classList.contains('backdrop')) {
    closeModal();
  } else if (e.target.classList.contains('js-btn-watched')) {
    write(e.target.dataset.id, writeWatched);
  } else if (e.target.classList.contains('js-btn-queue')) {
    write(e.target.dataset.id, writeQueue);
  }
  return;
}

function closeModalEsc(e) {
  if (e.code === 'Escape') closeModal();
}

async function write(filmId, callback) {
  const user = await currentUser();
  if (user) {
    const film = await infoFilmApi.fetchInfoFilm(filmId);
    callback(user.uid, film);
  } else {
    window.location.href = './signin.html';
  }
}
