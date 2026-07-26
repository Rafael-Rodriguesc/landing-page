import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Configurator() {
  return <section className="configurator" id="configurador" aria-labelledby="configurator-title">
    <div className="configurator__image"><Image src="/images/ferrari-hero.png" alt="Supercarro vermelho para configuracao" fill sizes="(max-width: 800px) 100vw, 56vw" /></div>
    <div className="configurator__content"><p className="eyebrow">CONFIGURE</p><h2 id="configurator-title">O SEU<br />FERRARI</h2><p>Escolha os detalhes que tornam a sua Ferrari uma extensão da sua própria visão.</p><a className="button button--red" href="mailto:contato@ferrari.example">CONFIGURAR AGORA <ArrowRight size={17} /></a></div>
  </section>;
}
