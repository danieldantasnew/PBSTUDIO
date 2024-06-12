import { lideComAnterior, lideComPlay, lideComProximo } from "./Discos/Discos";
import { marcadorSvg, addMenuMobile, removeMenuMobile } from "./Header/Header";
import { lideMasterizacao, lideMixagem } from "./Servicos/Servicos";

function verificaTamanhoDaTela() {
  const mobile = window.matchMedia("(max-width: 767px)").matches;
  if (mobile) addMenuMobile();
  else removeMenuMobile();
}

window.addEventListener("resize", verificaTamanhoDaTela);

verificaTamanhoDaTela();
marcadorSvg();
lideMixagem();
lideMasterizacao();
setInterval(() => lideMixagem(), 4000);
setInterval(() => lideMasterizacao(), 500);
lideComPlay();
lideComAnterior();
lideComProximo();
