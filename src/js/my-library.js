import { async } from '@firebase/util';
import { currentUser } from './api-service/firebase-api-auth';
import {
  getWatchedByUserId,
  getQueueByUserId,
} from './api-service/firebase-api-database';

const currentUrl = window.location.href;

let user = null;

const refs = {
  btnWatched: document.querySelector('#btn__watched'),
  btnQueue: document.querySelector('#btn__queue'),
};

status();

refs.btnWatched.addEventListener('click', onWatched);
refs.btnQueue.addEventListener('click', onQueue);

// if (currentUrl.includes('my-library')) {
//   if (!getUid()) {
//     //window.location.href = '../auth/signin.html';
//   }
// }

async function status() {
  user = await currentUser();
  if (currentUrl.includes('my-library')) {
    if (!user) {
      window.location.href = '../auth/signin.html';
      return;
    }

    onWatched();
  }
}

async function onWatched() {
  console.log('watch');
  activeBtn(refs.btnWatched);
  inactiveBtn(refs.btnQueue);
  const watches = await getWatchedByUserId(user.uid);
}

async function onQueue() {
  activeBtn(refs.btnQueue);
  inactiveBtn(refs.btnWatched);
  console.log('queue');
  const queues = await getQueueByUserId(user.uid);
}

function inactiveBtn(bt) {
  bt.classList.remove('btn__library--active');
}

function activeBtn(bt) {
  bt.classList.add('btn__library--active');
}
