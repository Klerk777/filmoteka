import './js/main-page/slider-film';
import './js/main-page/gallery';
import './js/main-page/search';
import './js/main-page/spiner';
import './js/my-library';
import './js/closeModal';
import {
  getDatabase,
  ref,
  push,
  query,
  equalTo,
  get,
  orderByChild,
} from 'firebase/database';

async function writeWatched(userId, film) {
  const db = getDatabase();
  push(ref(db, 'watched/'), {
    userId: userId,
    film: film,
  });
}

async function writeQueue(userId, film) {
  const db = getDatabase();
  push(ref(db, 'watched/'), {
    userId: userId,
    film: film,
  });
}

async function getWatchedByUserId(userId) {
  const db = getDatabase();
  const recentPostsRef = await get(
    query(ref(db, 'watched/'), orderByChild('userId'), equalTo(userId))
  );
  return recentPostsRef.val();
}

async function getQueueByUserId(userId) {
  const db = getDatabase();
  const recentPostsRef = await get(
    query(ref(db, 'watched/'), orderByChild('userId'), equalTo(userId))
  );
  return recentPostsRef.val();
}
