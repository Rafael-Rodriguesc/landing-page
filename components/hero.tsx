"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play, X } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <motion.div
        className="hero__car hero__car--desktop"
        initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.15, delay: 0.12 }}
      >
        <Image
          src="/images/hero-editorial-desktop.png"
          alt="Ferrari 12Cilindri vermelho visto de traseira em estúdio noturno"
          fill
          priority
          quality={90}
          sizes="100vw"
        />
      </motion.div>
      <div className="hero__car hero__car--mobile" aria-hidden="true">
        <Image
          src="/images/hero-editorial-mobile.png"
          alt=""
          fill
          quality={90}
          sizes="100vw"
        />
      </div>
      <div className="hero__grid" />

      <div className="hero__content">
        <motion.p className="eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          FERRARI / 12CILINDRI
        </motion.p>
        <motion.h1 id="hero-title" initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2 }}>
          A ESSÊNCIA<br />DA VELOCIDADE
        </motion.h1>
        <motion.p className="hero__copy" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Uma máquina de alto giro, desenhada para tornar cada comando uma resposta física.
        </motion.p>
        <motion.div className="hero__actions" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72 }}>
          <a className="button button--red" href="#ferrari-12cilindri">EXPLORAR 12CILINDRI <ArrowRight size={17} /></a>
          <button className="button button--ghost" type="button" aria-expanded={videoOpen} aria-controls="hero-video" onClick={() => setVideoOpen((open) => !open)}>
            {videoOpen ? <X size={15} /> : <Play size={14} fill="currentColor" />}
            {videoOpen ? "FECHAR VÍDEO" : "ASSISTIR VÍDEO"}
          </button>
        </motion.div>
        <AnimatePresence initial={false}>
          {videoOpen && (
            <motion.div
              className="hero__video"
              id="hero-video"
              initial={reduceMotion ? { opacity: 1 } : { height: 0, opacity: 0, y: 12 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0, y: 8 }}
              transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="hero__video-frame">
                <iframe
                  src="https://www.youtube.com/embed/JIWMZdKQJz8?rel=0"
                  title="Ferrari: experiência de condução"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="hero__speed"><span />9.500 RPM</div>
      <div className="hero__edition">V12 6,5 L / 830 CV</div>
    </section>
  );
}
