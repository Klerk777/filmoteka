export function trailerYouTube(key) {
  const tag = document.createElement('script');

  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  console.log(firstScriptTag);

  let player;
  onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady(key) {
    player = new YT.Player('player', {
      height: '170',
      width: '350',
      videoId: key,

      playerVars: {
        autoplay: 1,
        enablejsapi: 1,
        origin: window.location.origin,
        loop: 1,
      },
      events: {
        onReady: onPlayerReady,
      },
    });
  };

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 18000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }
  // window.onYouTubePlayerAPIReady = function () {
  //     onYouTubeIframeAPIReady(key);
  // }
}
