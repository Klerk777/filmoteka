import { async } from '@firebase/util';
import { currentUser } from './api-service/firebase-api-auth';

const currentUrl = window.location.href;

status();

// if (currentUrl.includes('my-library')) {
//   if (!getUid()) {
//     //window.location.href = '../auth/signin.html';
//   }
// }

async function status() {
  const user = await currentUser();
  console.log(user);
  if (currentUrl.includes('my-library')) {
    if (!user) {
      window.location.href = '../auth/signin.html';
    }
  }
}
