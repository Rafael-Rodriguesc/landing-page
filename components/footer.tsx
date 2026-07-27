import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer__top"><Logo /><p>A PASSION THAT DRIVES</p></div>
      <div className="footer__middle"><div><span>EXPERIÊNCIA</span><p>Descubra uma seleção<br />exclusiva de modelos Ferrari.</p></div><div><span>FERRARI</span><a href="#modelos">Modelos</a><a href="#desempenho">Desempenho</a><a href="#tecnologia">Tecnologia</a></div><div><span>CONTATO</span><a href="#configurador">Solicitar proposta</a><a href="#configurador">Configure o seu</a></div><div><span>SOCIAL</span><div className="socials"><a href="#contato" aria-label="Instagram"><Instagram size={18} /></a><a href="#contato" aria-label="YouTube"><Youtube size={18} /></a><a href="#contato" aria-label="LinkedIn"><Linkedin size={18} /></a></div></div></div>
      <div className="footer__bottom"><span>© 2026 FERRARI S.P.A.</span><span>PRIVACIDADE</span><span>TERMOS DE USO</span><a href="#top">VOLTAR AO TOPO ↑</a></div>
    </footer>
  );
}
