function pausarControles(audio: HTMLAudioElement) {
  const controll = audio.parentElement;
  const playpause = controll?.querySelector(".playpause");
  const iconPlay = controll
    ?.closest(".audio-player")
    ?.querySelector<HTMLElement>("[data-icon-play-wave]");

  if (playpause && iconPlay) {
    playpause.innerHTML = `<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 12.84L6.25 23.6653L6.25 2.01465L25 12.84Z" fill="#181411"/>
    </svg>`;
    iconPlay.classList.remove("active");
  }
}

function pararTodosOsAudiosExcetoClicado(audioClicado: HTMLAudioElement) {
  const allAudios = document.querySelectorAll("audio");
  allAudios.forEach((audio) => {
    if (audio !== audioClicado) {
      audio.pause();
      pausarControles(audio);
    }
  });
}

function lideComFimDoAudio(event: Event) {
  const audio = event.currentTarget as HTMLAudioElement;
  if (audio) pausarControles(audio);
}

function lideClickPlay(event: Event) {
  const playpause = event.currentTarget as HTMLElement;
  const controll = playpause.parentElement;
  const audio = controll?.querySelector("audio");

  const iconPlay = controll
    ?.closest(".audio-player")
    ?.querySelector<HTMLElement>("[data-icon-play-wave]");

  if (audio) {
    pararTodosOsAudiosExcetoClicado(audio);
    if (audio.paused) {
      audio.addEventListener("ended", lideComFimDoAudio);
      audio.play();
      playpause.innerHTML = `
      <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="4" height="18" fill="#181411"/>
        <rect x="8" width="4" height="18" fill="#181411"/>
      </svg>`;
      iconPlay?.classList.add("active");
    } else {
      audio.removeEventListener("ended", lideComFimDoAudio);
      audio.pause();
      pausarControles(audio);
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
