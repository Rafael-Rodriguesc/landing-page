"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__grid" />
      <div className="hero__orb" />
      <div className="hero__content">
        <motion.p className="eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}>FERRARI</motion.p>
        <motion.h1 id="hero-title" initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .2 }}>A ESSÊNCIA<br />DA VELOCIDADE</motion.h1>
        <motion.p className="hero__copy" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }}>Design italiano. Performance absoluta. Descubra nossa linha exclusiva de supercarros.</motion.p>
        <motion.div className="hero__actions" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .72 }}>
          <a className="button button--red" href="#modelos">EXPLORAR MODELOS <ArrowRight size={17} /></a>
          <a className="button button--ghost" href="#desempenho"><Play size={14} fill="currentColor" /> ASSISTIR VÍDEO</a>
        </motion.div>
      </div>
      <motion.div className="hero__car" initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: .15 }}>
        <Image src="/images/ferrari-hero.png" alt="Supercarro vermelho em tunel noturno" fill priority sizes="(max-width: 900px) 100vw, 74vw" />
      </motion.div>
      <div className="hero__speed"><span />296 KM/H</div>
    </section>
  );
}
