"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Gauge, Timer, Zap } from "lucide-react";

const stats = [["800 CV", "POTÊNCIA", Zap], ["2.9 S", "0-100 KM/H", Timer], ["340 KM/H", "VELOCIDADE MÁXIMA", Gauge]];

export function Performance() {
  const reduceMotion = useReducedMotion();
  return <section className="performance section" id="desempenho" aria-labelledby="performance-title">
    <Image className="performance__image" src="/images/ferrari-hero.png" alt="Traseira de um supercarro vermelho sob luzes vermelhas" fill sizes="100vw" />
    <div className="performance__shade" />
    <div className="performance__stats" aria-label="Dados de desempenho">
      {stats.map(([value, label, Icon]) => { const StatIcon = Icon as typeof Zap; return <div key={label as string}><StatIcon size={16} /><strong>{value as string}</strong><span>{label as string}</span></div>; })}
    </div>
    <motion.div className="performance__content" initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="eyebrow">DESEMPENHO</p>
      <h2 id="performance-title">FEITA PARA<br />SUPERAR LIMITES</h2>
      <p>Resposta instantânea, dinâmica precisa e uma potência que transforma cada reta em um novo ponto de partida.</p>
      <a className="button button--red" href="#tecnologia">SAIBA MAIS <ArrowRight size={17} /></a>
    </motion.div>
  </section>;
}
