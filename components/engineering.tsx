"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CircuitBoard, Gauge, Layers3, Wind } from "lucide-react";

const features = [
  [Wind, "AERODINÂMICA ATIVA", "Superfícies móveis equilibram eficiência em reta e pressão nas curvas."],
  [CircuitBoard, "CONTROLE INTELIGENTE", "Sensores interpretam aderência e intenção sem afastar o piloto da máquina."],
  [Layers3, "MATERIAIS PREMIUM", "Carbono, alumínio e couro técnico reduzem massa e elevam a percepção tátil."],
  [Gauge, "DESEMPENHO EXTREMO", "Software e mecânica trabalham juntos para preservar resposta e consistência."],
];

export function Engineering() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="technology section" id="tecnologia" aria-labelledby="technology-title">
      <div className="technology__image">
        <Image src="/images/technology-cockpit.png" alt="Cockpit técnico em fibra de carbono com iluminação vermelha" fill sizes="(max-width: 900px) 100vw, 52vw" />
        <span>INTERFACE ORIENTADA AO PILOTO</span>
      </div>
      <div className="technology__content">
        <div className="section-label"><span>03</span> TECNOLOGIA</div>
        <h2 id="technology-title">INOVAÇÃO QUE<br />AMPLIA O INSTINTO</h2>
        <p className="technology__lead">Cada camada de tecnologia existe para tornar a informação mais clara, a resposta mais rápida e o comando mais natural.</p>
        <div className="technology__grid">
          {features.map(([Icon, title, copy], index) => {
            const FeatureIcon = Icon as typeof Wind;
            return (
              <motion.article key={title as string} initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
                <FeatureIcon size={21} />
                <h3>{title as string}</h3>
                <p>{copy as string}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
