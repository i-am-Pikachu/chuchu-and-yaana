const eqBars = document.querySelectorAll('#eqBars span');
const audio = document.getElementById("bgMusic");
document.getElementById("song-name").innerText = "Sailor Song - Gigi Perez";

function setEqAnimationState(state) {
  eqBars.forEach(bar => {
    bar.style.animationPlayState = state;
  });
}

// Update your play/pause handler:
function control() {
  console.log("hello")
  if (audio.paused) {
    audio.play();
    setEqAnimationState('running');
  } else {
    audio.pause();
    setEqAnimationState('paused');
  }
};
