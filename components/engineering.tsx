"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CircuitBoard, Gauge, Layers3, Wind } from "lucide-react";

const features = [
  [Wind, "AERODINÂMICA ATIVA", "Superfícies que se adaptam a cada decisão do piloto."],
  [CircuitBoard, "CONTROLE INTELIGENTE", "Sistemas de precisão que ampliam o controle sem reduzir a emoção."],
  [Layers3, "MATERIAIS PREMIUM", "Carbono, alumínio e acabamento italiano executados sem compromisso."],
  [Gauge, "DESEMPENHO EXTREMO", "Potência entregue com equilíbrio, leitura e absoluta confiança."],
];

export function Engineering() {
  const reduceMotion = useReducedMotion();
  return <section className="technology section" id="tecnologia" aria-labelledby="technology-title">
    <div className="section-label"><span>03</span> TECNOLOGIA</div>
    <div className="technology__header"><h2 id="technology-title">INOVAÇÃO QUE<br />MOVIMENTA O FUTURO</h2><div><p>Do túnel de vento ao cockpit, cada sistema existe para tornar a sensação de dirigir ainda mais intensa.</p><a href="#configurador">CONHEÇA A TECNOLOGIA <ArrowRight size={15} /></a></div></div>
    <div className="technology__grid">
      {features.map(([Icon, title, copy], index) => { const FeatureIcon = Icon as typeof Wind; return <motion.article key={title as string} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }}><FeatureIcon size={23} /><h3>{title as string}</h3><p>{copy as string}</p></motion.article>; })}
    </div>
    <div className="technology__car" aria-hidden="true" />
  </section>;
}
