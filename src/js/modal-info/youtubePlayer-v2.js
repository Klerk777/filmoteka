export function trailer(id) {
  return `

<iframe
  class="trailer"
width="350"
height="175"
src="https://www.youtube.com/embed/${id}?autoplay=1"
title="YouTube video player"
frameborder="0"
allowfullscreen
></iframe>`;
}
