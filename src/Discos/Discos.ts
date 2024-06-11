function lideClickPlay(event: Event) {
  const playpause = event.currentTarget as HTMLElement;
  const controll = playpause.parentElement;
  const audio = controll?.querySelector("audio");
  const allAudios = document.querySelectorAll("audio");

  allAudios.forEach((audioF) => {
    if (audioF !== audio) {
      audioF.pause();
      const controll = audioF.parentElement;
      const playpauseToMute =
        controll?.querySelector<HTMLElement>(".playpause");
      if (playpauseToMute) {
        playpauseToMute.innerHTML = `<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 12.84L6.25 23.6653L6.25 2.01465L25 12.84Z" fill="white" fill-opacity="0.47" />
        </svg>`;
      }
    }
  });

  if (audio) {
    if (audio.paused) {
      audio.play();
      playpause.innerHTML = `<svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="4" height="18" fill="white" fill-opacity="0.47"/>
      <rect x="8" width="4" height="18" fill="white" fill-opacity="0.47"/>
      </svg>`;
    } else {
      audio.pause();
      playpause.innerHTML = `<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 12.84L6.25 23.6653L6.25 2.01465L25 12.84Z" fill="white" fill-opacity="0.47" />
        </svg>`;
    }
  }
}

function lideClickAnterior(event: Event) {
  const prev = event.currentTarget as HTMLElement;
  const controll = prev.parentElement;

  if (controll) {
    const audio = controll.querySelector("audio");
    if (audio) {
      audio.currentTime <= 2
        ? (audio.currentTime = 0)
        : (audio.currentTime -= 2);
    }
  }
}

function lideClickProximo(event: Event) {
  const next = event.currentTarget as HTMLElement;
  const controll = next.parentElement;

  if (controll) {
    const audio = controll.querySelector("audio");
    if (audio) {
      audio.currentTime += 2;
    }
  }
}

export function lideComPlay() {
  const playpause = document.querySelectorAll<HTMLElement>(".playpause");
  if (playpause) {
    playpause.forEach((audio) =>
      audio.addEventListener("click", lideClickPlay)
    );
  }
}

export function lideComAnterior() {
  const prev = document.querySelectorAll<HTMLElement>(".prev");
  if (prev)
    prev.forEach((ant) => ant.addEventListener("click", lideClickAnterior));
}

export function lideComProximo() {
  const next = document.querySelectorAll<HTMLElement>(".next");
  if (next)
    next.forEach((prox) => prox.addEventListener("click", lideClickProximo));
}
