import { marcadorSvg } from "./Header/Header";
import { lideMasterizacao, lideMixagem } from "./Servicos/Servicos";

marcadorSvg();
lideMixagem();
lideMasterizacao();
setInterval(() => lideMixagem(), 4000);
setInterval(() => lideMasterizacao(), 800);
