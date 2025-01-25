const stickyTop = document.querySelector('.sticky-top');
const offcanvas = document.querySelector('.offcanvas');

offcanvas.addEventListener('show.bs.offcanvas', function () {
  stickyTop.style.overflow = 'visible';
});

offcanvas.addEventListener('hidden.bs.offcanvas', function () {
  stickyTop.style.overflow = 'hidden';
});

// disableScroll
const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i')
const song = document.querySelector('#song');
let isPlaying = false;


function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    window.onscroll = function () {
        window.scrollTo(scrollTop, scrollLeft);
    }
    
    rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
    window.onscroll = function () { }
    rootElement.style.scrollBehavior = 'smooth';

    // localStorage.setItem('opened', 'true');

    playAudio();
}

function playAudio() {
    audioIconWrapper.style.display = 'flex';
    song.play();
    isPlaying = true;
}

audioIconWrapper.onclick = function () {
    if (isPlaying) {
        song.pause();
        audioIcon.classList.remove('bi-disc');
        audioIcon.classList.add('bi-pause-circle');
    } else {
        song.play();
        audioIcon.classList.add('bi-disc');
        audioIcon.classList.remove('bi-pause-circle');
    }

    isPlaying = !isPlaying;
}

// if (!localStorage.getItem('opened')) {
//     disableScroll();
// }
disableScroll();

// Kehadiran
window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Konfirmasi kehadiran berhasil terkirim!");
      })
    });
  });

