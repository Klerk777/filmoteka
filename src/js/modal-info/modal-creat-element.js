export function modalInfoCreat(results, id, keyPlayer=false) {
  let URL_POSTEER = 'https://image.tmdb.org/t/p/';
  const imgResize = {
    tabMob: 'w342',
    desk: 'w500',
  };


  const {
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
    poster_path,
  } = results;

  const player = !keyPlayer ? '' :
`  <iframe
  class="trailer"
width="350"
height="175"
src="https://www.youtube.com/embed/${keyPlayer}?autoplay=1&amp;loop=1"
title="GO-IT  #4"
frameborder="0"
allowfullscreen
></iframe> `

  return `<picture>
  <source src="${
    URL_POSTEER + imgResize.desk + poster_path
  }" media="(min-width: 1280px)" />
  <source src="${
    URL_POSTEER + imgResize.tabMob + poster_path
  }" media="(min-width: 768px)" />
  <source src="${
    URL_POSTEER + imgResize.tabMob + poster_path
  }" media="(max-width: 767px)" />
  <img class="modal__picture" src="${
    URL_POSTEER + imgResize.desk + poster_path
  }" alt="${title}" />
  </picture>
  <div class="modal__info">
  <h2 class="modal__title">${title}</h2>
  <table class="modal__statistic">
  <tbody>
      <tr>
          <td class="modal__type">Vote / Votes</td>
          <td class="modal__value"><span class="modal__value--accent">${vote_average}</span> / 
              <span class="modal__value--highlight">${vote_count}</span></td>
      </tr>
      <tr>
          <td class="modal__type">Popularity</td>
          <td class="modal__value">${popularity}</td>
      </tr>
      <tr>
          <td class="modal__type">Original Title</td>
          <td class="modal__value modal__value--uppercase">${original_title}</td>
      </tr>
      <tr>
          <td class="modal__type">Genre</td>
          <td class="modal__value">${genres.map(e => ` ${e.name}`)}</td>
      </tr>
  </tbody>
  </table>
  <p class="modal__about">About</p>
  <p class="modal__description">${overview}</p>
  
  <div id="player" class="player">
${player}
  </div>
  
  <ul class="modal__buttons">
            <li><button class="modal__button" data-id="${id}">Add to watched</button></li>
            <li><button class="modal__button" data-id="${id}">Add to queue</button></li>
          </ul>
  `;
  // loadPlayer();
  // window.onYouTubePlayerAPIReady = function () {
  //   onYouTubeIframeAPIReady();

  //           };
}
