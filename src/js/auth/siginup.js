import { createNewUser } from '../api-service/firebase-api-auth';
import formAuth from './form-auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

formAuth.authForm.addEventListener('submit', onLogin);

async function onLogin(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const pass = e.target.pass.value;
  const isSignUser = await createNewUser(email, pass);
  e.target.reset();
  if (!isSignUser) {
    error();
    return;
  }

  window.location.href = '../../my-library.html';

  //
}

function error() {
  Notify.failure('invalid username or password');
}
