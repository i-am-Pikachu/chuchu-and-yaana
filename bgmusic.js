const eqBars = document.querySelectorAll('#eqBars span');
const audio = document.getElementById("bgMusic");

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
