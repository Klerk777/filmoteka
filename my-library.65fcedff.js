!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired76b;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var c={id:e,exports:{}};return t[e]=c,i.call(c.exports,c,c.exports),c.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired76b=i),i("jcFG7");var c=i("bZgM4"),o=i("cqQ1z"),r=i("2qgW3");i("dmm8t"),i("4Ib9m");const a=window.location.href;let u=null;const l={btnWatched:document.querySelector("#btn__watched"),btnQueue:document.querySelector("#btn__queue"),containerList:document.querySelector(".js-card"),logOut:document.querySelector(".js-log-out"),nickname:document.querySelector(".js-nickname")};async function d(){f(l.btnWatched),s(l.btnQueue);const e=await(0,o.getWatchedByUserId)(u.uid);b(Object.values(e).map((e=>e.film)))}function s(e){e.classList.remove("btn__library--active")}function f(e){e.classList.add("btn__library--active")}function b(e){l.containerList.innerHTML=(0,r.default)(e)}!async function(){u=await(0,c.currentUser)(),a.includes("my-library")&&(u||(window.location.href="./signin.html"),e=u,l.nickname.textContent=e.email,d());var e}(),l.btnWatched.addEventListener("click",d),l.btnQueue.addEventListener("click",(async function(){f(l.btnQueue),s(l.btnWatched);const e=await(0,o.getQueueByUserId)(u.uid);b(Object.values(e).map((e=>e.film)))})),l.logOut.addEventListener("click",c.signOutUser)}();
//# sourceMappingURL=my-library.65fcedff.js.map