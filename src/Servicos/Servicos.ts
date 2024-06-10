function numeroAleatorio(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function lideMixagem() {
  const ajustes = document.querySelectorAll<HTMLElement>(".ajuste");

  if (ajustes) {
    ajustes.forEach(
      (ajuste) => (ajuste.style.top = `${numeroAleatorio(2, 85)}%`)
    );
  }
}

export function lideMasterizacao() {
  const ondas = document.querySelectorAll<HTMLElement>(".onda");

  if (ondas) {
    ondas.forEach(
      (onda) => (onda.style.height = `${numeroAleatorio(10, 80)}%`)
    );
  }
}
