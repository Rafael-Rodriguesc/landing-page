"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const modes = {
  ESTRADA: {
    label: "Controle progressivo",
    copy: "Entrega linear, amortecimento mais complacente e intervenção eletrônica antecipada para longas distâncias.",
    throttle: "68%",
    shift: "120 ms",
    traction: "Alta",
    accent: "#a5a09a",
    curve: "M12 118 C58 110 78 94 116 82 S188 70 222 54 S286 24 338 18",
  },
  SPORT: {
    label: "Resposta imediata",
    copy: "Acelerador mais direto, câmbio em prontidão e controle de tração permissivo para estradas rápidas.",
    throttle: "86%",
    shift: "90 ms",
    traction: "Média",
    accent: "#e44731",
    curve: "M12 120 C52 116 80 96 118 78 S180 56 224 42 S286 20 338 12",
  },
  RACE: {
    label: "Máxima conexão",
    copy: "Os 800 cv chegam sem hesitação. Trocas mínimas e eletrônica calibrada para a precisão de circuito.",
    throttle: "100%",
    shift: "60 ms",
    traction: "Baixa",
    accent: "#ff2418",
    curve: "M12 122 C48 120 74 100 112 74 S178 46 222 31 S288 10 338 6",
  },
} as const;

type ModeName = keyof typeof modes;

const specifications = [
  ["800 cv", "POTÊNCIA"],
  ["718 Nm", "TORQUE"],
  ["2,9 s", "0–100 KM/H"],
  ["340 km/h", "VELOCIDADE MÁXIMA"],
  ["1.525 kg", "PESO SECO"],
  ["1,91 kg/cv", "RELAÇÃO PESO–POTÊNCIA"],
];

export function Performance() {
  const [modeName, setModeName] = useState<ModeName>("SPORT");
  const reduceMotion = useReducedMotion();
  const mode = modes[modeName];

  return (
    <section className="performance section" id="desempenho" aria-labelledby="performance-title" style={{ "--performance-accent": mode.accent } as React.CSSProperties}>
      <Image className="performance__image" src="/images/performance-track.png" alt="Supercarro V12 vermelho acelerando em uma pista molhada à noite" fill sizes="100vw" />
      <div className="performance__shade" />
      <div className="performance__story">
        <div className="section-label"><span>02</span> DESEMPENHO / 812 SUPERFAST</div>
        <h2 id="performance-title">V12. 800 CV.<br />8.900 RPM.</h2>
        <p>Um V12 aspirado transforma cada milímetro do acelerador em resposta. Aerodinâmica ativa, eixo traseiro direcional e massa concentrada entre os eixos fazem a potência parecer precisão.</p>
        <div className="performance__specs">
          {specifications.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </div>
      <div className="performance__telemetry">
        <div className="performance__mode-tabs" role="tablist" aria-label="Modos de condução">
          {(Object.keys(modes) as ModeName[]).map((name) => (
            <button key={name} type="button" role="tab" aria-selected={name === modeName} onClick={() => setModeName(name)}>{name}</button>
          ))}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div className="performance__mode-detail" key={modeName} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -6 }} transition={{ duration: 0.24 }}>
            <p>{mode.label}</p>
            <span>{mode.copy}</span>
            <div className="performance__live-data">
              <div><small>ACELERADOR</small><strong>{mode.throttle}</strong></div>
              <div><small>TROCA</small><strong>{mode.shift}</strong></div>
              <div><small>TRAÇÃO</small><strong>{mode.traction}</strong></div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="power-chart" aria-label={`Curva visual de potência no modo ${modeName}`}>
          <div className="power-chart__labels"><span>800 CV</span><span>8.900 RPM</span></div>
          <svg viewBox="0 0 350 130" role="img" aria-hidden="true">
            <path className="power-chart__grid" d="M10 18H340M10 52H340M10 86H340M10 120H340" />
            <motion.path className="power-chart__line" d={mode.curve} fill="none" initial={false} animate={{ d: mode.curve }} transition={{ duration: reduceMotion ? 0 : 0.45 }} />
          </svg>
        </div>
      </div>
    </section>
  );
}
