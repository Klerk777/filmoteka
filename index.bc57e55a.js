function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired76b;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired76b=r);const o="431ab85139813dba3796c445694ce723",i="https://api.themoviedb.org/3";class s{globalFetch(e){return fetch(e).then((e=>e.json())).then((e=>(this.incrementPage(),e.results)))}fetchGenres(){return fetch(`${i}/genre/movie/list?api_key=${o}`).then((e=>e.json())).then((e=>e.genres))}fetchInTrendFilmWithGenres(){return this.fetchTrendFilm().then((e=>this.fetchGenres().then((t=>e.map((e=>({...e,release_date:e.release_date.split("-")[0],genres:e.genre_ids.map((e=>t.filter((t=>t.id===e)))).flat()})))))))}fetchSearchFilmWithGenres(){return this.fetchSearchFilm().then((e=>this.fetchGenres().then((t=>e.map((e=>({...e,release_date:e.release_date.split("-")[0],genres:e.genre_ids.map((e=>t.filter((t=>t.id===e)))).flat()})))))))}fetchTrendFilm(){const e=`${i}/movie/popular?api_key=${o}&language=en-US&page=${this.page}`;return this.globalFetch(e)}fetchSearchFilm(){const e=`${i}/search/movie?api_key=${o}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;return this.globalFetch(e)}fetchSearchTotalFilm(){const e=`${i}/search/movie?api_key=${o}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;return fetch(e).then((e=>e.json())).then((e=>(this.incrementPage(),e)))}fetchInfoFilm(e){return fetch(` https://api.themoviedb.org/3/movie/${e}?api_key=${o}&language=en-US`).then((e=>e.json())).then((e=>e))}fetchTrailreFilm(e,t){return fetch(` https://api.themoviedb.org/3/movie/${e}/videos?api_key=${o}&language=${t}`).then((e=>e.json())).then((e=>e))}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get pageNum(){return this.page}set pageNum(e){this.page=e}constructor(){this.searchQuery="",this.page=1}}var l=e(r("amrNH")).template({1:function(e,t,n,a,r){var o,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,l="function",c=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'   <div class="slider-element">\n        <img class="slider-image" src="https://image.tmdb.org/t/p/w500'+c(typeof(o=null!=(o=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?o:s)===l?o.call(i,{name:"poster_path",hash:{},data:r,loc:{start:{line:3,column:70},end:{line:3,column:85}}}):o)+'" alt="'+c(typeof(o=null!=(o=d(n,"title")||(null!=t?d(t,"title"):t))?o:s)===l?o.call(i,{name:"title",hash:{},data:r,loc:{start:{line:3,column:92},end:{line:3,column:101}}}):o)+" "+c(typeof(o=null!=(o=d(n,"name")||(null!=t?d(t,"name"):t))?o:s)===l?o.call(i,{name:"name",hash:{},data:r,loc:{start:{line:3,column:102},end:{line:3,column:110}}}):o)+' "\n            data-id="'+c(typeof(o=null!=(o=d(n,"id")||(null!=t?d(t,"id"):t))?o:s)===l?o.call(i,{name:"id",hash:{},data:r,loc:{start:{line:4,column:21},end:{line:4,column:27}}}):o)+'"\n            onerror="this.onerror=null;this.src=\'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-\';" />\n    </div>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:7,column:9}}}))?o:""},useData:!0}),c=r("eWCmQ");c=r("eWCmQ");function d(){c.Loading.standard("Loading...",{backgroundColor:"rgba(0,0,0,0.8)",svgColor:"#FF6B08",messageColor:"#FF6B08"})}const u={sliderContainer:document.querySelector(".slide-track")},h=new s;function m(){d(),h.fetchTrendFilm().then(p).catch((e=>{u.sliderContainer.innerHTML=`<img class="catch-error-pagination" src="${errorUrl}" />`})),c.Loading.remove()}function p(e){u.sliderContainer.innerHTML=l(e)}m();var g=r("8d3Od");const f={containerList:document.querySelector(".js-card")},y=new s;function _(){y.fetchInTrendFilmWithGenres().then(v)}function v(e){f.containerList.innerHTML=(0,g.default)(e)}_();g=r("8d3Od"),c=r("eWCmQ");const b={searchForm:document.querySelector(".js-search-form"),containerList:document.querySelector(".js-card"),containerWarning:document.querySelector(".js-warning"),containerWarningResults:document.querySelector(".js-search-results")};m(),_();const w=new s;function $(e){b.containerList.innerHTML=(0,g.default)(e)}b.searchForm.addEventListener("submit",(function(e){if(e.preventDefault(),d(),function(){b.containerList.innerHTML=""}(),""===e.currentTarget.query.value)return _(),c.Loading.remove(),void(b.containerWarning.textContent="Please write something ...");b.containerWarning.textContent="";console.log(e.currentTarget.query.value),c.Loading.remove(),w.query=e.currentTarget.query.value,w.resetPage(),w.fetchSearchTotalFilm().then((e=>{0===e.total_pages?(_(),b.containerWarningResults.textContent="Sorry, there no results found. Try searching for something else! "):(b.containerWarningResults.textContent="",w.fetchSearchFilmWithGenres().then($).catch((e=>{b.containerList.innerHTML=`<img class="catch-error-pagination" src="${errorUrl}"/>`})))})),e.currentTarget.query.value=""}));var L=r("5Lk9D"),k=r("1DACH");const T=new s,q={backdrop:document.querySelector(".backdrop"),closeBtn:document.querySelector("[data-modal-close]")};function F(){q.backdrop.classList.remove("is-open"),window.removeEventListener("keydown",F)}async function S(e,t){const n=await(0,L.currentUser)();if(n){const a=await T.fetchInfoFilm(e);t(n.uid,a)}else window.location.href="./signin.html"}function j(e,t,n=!1){let a="https://image.tmdb.org/t/p/";const r="w342",o="w500",{title:i,vote_average:s,vote_count:l,popularity:c,original_title:d,genres:u,overview:h,poster_path:m}=e,p=n?`  <iframe\n  class="trailer"\nwidth="350"\nheight="175"\nsrc="https://www.youtube.com/embed/${n}?autoplay=1&amp;loop=1"\ntitle="GO-IT  #4"\nframeborder="0"\nallowfullscreen\n></iframe> `:"";return`<picture>\n  <source src="${a+o+m}" media="(min-width: 1280px)" />\n  <source src="${a+r+m}" media="(min-width: 768px)" />\n  <source src="${a+r+m}" media="(max-width: 767px)" />\n  <img class="modal__picture" src="${a+o+m}" alt="${i}" />\n  </picture>\n  <div class="modal__info">\n  <h2 class="modal__title">${i}</h2>\n  <table class="modal__statistic">\n  <tbody>\n      <tr>\n          <td class="modal__type">Vote / Votes</td>\n          <td class="modal__value"><span class="modal__value--accent">${s}</span> / \n              <span class="modal__value--highlight">${l}</span></td>\n      </tr>\n      <tr>\n          <td class="modal__type">Popularity</td>\n          <td class="modal__value">${c}</td>\n      </tr>\n      <tr>\n          <td class="modal__type">Original Title</td>\n          <td class="modal__value modal__value--uppercase">${d}</td>\n      </tr>\n      <tr>\n          <td class="modal__type">Genre</td>\n          <td class="modal__value">${u.map((e=>` ${e.name}`))}</td>\n      </tr>\n  </tbody>\n  </table>\n  <p class="modal__about">About</p>\n  <p class="modal__description">${h}</p>\n  \n  <div id="player" class="player">\n${p}\n  </div>\n  \n  <ul class="modal__buttons">\n            <li><button type="button" class="modal__button js-btn-watched" data-id="${t}">Add to watched</button></li>\n            <li><button type="button" class="modal__button js-btn-queue" data-id="${t}">Add to queue</button></li>\n          </ul>\n  `}q.backdrop.addEventListener("click",(function(e){e.target.classList.contains("backdrop")?F():e.target.classList.contains("js-btn-watched")?S(e.target.dataset.id,k.writeWatched):e.target.classList.contains("js-btn-queue")&&S(e.target.dataset.id,k.writeQueue);return})),q.closeBtn.addEventListener("click",F),window.addEventListener("keydown",(function(e){"Escape"===e.code&&F()}));const x=new s;let C="";const W=document.querySelector(".slide-track"),E=document.querySelector(".backdrop"),M=document.querySelector(".modal__wrap"),P=document.querySelector(".js-card");document.querySelector(".player");W.addEventListener("click",U),P.addEventListener("click",U);const O="en-US";async function U(e){"IMG"===e.target.nodeName&&(M.innerHTML="",E.classList.add("is-open"),C=e.target.dataset.id,async function(e){await x.fetchInfoFilm(e).then(G)}(C))}async function G(e){const t=await H(C),n=j(e,C,t);M.insertAdjacentHTML("beforeend",n),H(C)}async function H(e){const t=await x.fetchTrailreFilm(e,O);if(console.log(t.results),0!=t.results.length)return t.results[0].key}
//# sourceMappingURL=index.bc57e55a.js.map
