import { scrollAtivoDesktop, scrollAtivoMobile } from "./Animations/Animations";
import { lideComAnterior, lideComPlay, lideComProximo } from "./Discos/Discos";
import {
  marcadorSvg,
  addMenuMobile,
  removeMenuMobile,
  removeActiveIfClickLink,
} from "./Header/Header";
import { lideMasterizacao, lideMixagem } from "./Servicos/Servicos";

let stopAnimationOnScroll = false;
function verificaTamanhoDaTela() {
  const mobile = window.matchMedia("(max-width: 767px)").matches;
  if (mobile) addMenuMobile();
  else removeMenuMobile();

  !stopAnimationOnScroll && mobile ? scrollAtivoMobile() : scrollAtivoDesktop();
  stopAnimationOnScroll = true;
}

window.addEventListener("resize", verificaTamanhoDaTela);

verificaTamanhoDaTela();
removeActiveIfClickLink();
marcadorSvg();
lideMixagem();
lideMasterizacao();
setInterval(() => lideMixagem(), 4000);
setInterval(() => lideMasterizacao(), 500);
lideComPlay();
lideComAnterior();
lideComProximo();
