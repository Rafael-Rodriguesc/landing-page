import { ArrowRight } from "lucide-react";

export function Legacy() {
  return (
    <section className="history section" id="historia" aria-labelledby="history-title">
      <p>DESDE 1947</p>
      <h2 id="history-title">UMA HISTÓRIA<br />MOVIDA PELA <i>paixão.</i></h2>
      <div className="history__footer">
        <span>Herança não é olhar para trás. É levar uma ideia adiante sem perder sua essência.</span>
        <a className="button button--red" href="#configurador">CONFIGURE O SEU <ArrowRight size={16} /></a>
      </div>
    </section>
  );
}
