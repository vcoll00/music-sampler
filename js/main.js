let allSongs =
  document.querySelectorAll('.song');

let allCovers =
  document.querySelectorAll('.cover');

let players =
  document.querySelectorAll('audio');

function hideAll() {
  allSongs.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();


allCovers.forEach(function(el) {
  el.onclick = (e) => {
    hideAll();

    switch (e.target.getAttribute('id')) {

      case 'catalinaAlbum':
        document.querySelector('#catalina')
          .style.display = 'block';
        players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
          });
        break;

      case 'juroQueAlbum':
        document.querySelector('#juroQue')
          .style.display = 'block';
        players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
          });
        break;

      case 'malamenteAlbum':
        document.querySelector('#malamente')
          .style.display = 'block';
        players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
          });
        break;

      case 'yoTiAlbum':
        document.querySelector('#yoTi')
          .style.display = 'block';
        players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
          });
        break;
    }
  }
});
