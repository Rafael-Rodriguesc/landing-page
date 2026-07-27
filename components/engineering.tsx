"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Crosshair } from "lucide-react";
import { useState } from "react";
import { engineeringHotspots } from "@/data/ferrari-experience";

export function Engineering() {
  const [selectedId, setSelectedId] = useState(engineeringHotspots[0].id);
  const reduceMotion = useReducedMotion();
  const selected = engineeringHotspots.find((item) => item.id === selectedId) ?? engineeringHotspots[0];

  return (
    <section className="engineering section" id="tecnologia" aria-labelledby="engineering-title">
      <div className="engineering__header">
        <div>
          <div className="section-label"><span>03</span> ARQUITETURA TÉCNICA</div>
          <h2 id="engineering-title">ENGENHARIA<br />EM CAMADAS.</h2>
        </div>
        <p>Selecione um ponto para revelar os materiais, a função e a textura que definem a Ferrari 12Cilindri.</p>
      </div>

      <div className="engineering__layout">
        <div className="engineering__main">
          <Image
            src="/images/engineering-hotspots-main.png"
            alt="Ferrari 12Cilindri vermelho em estúdio técnico com detalhes de engenharia destacados"
            fill
            quality={90}
            sizes="(max-width: 900px) calc(100vw - 2.4rem), 66vw"
          />
          <div className="engineering__main-shade" />
          <p className="engineering__instruction"><Crosshair size={14} /> SELECIONE UM PONTO TÉCNICO</p>
          <div className="engineering__hotspots" aria-label="Detalhes técnicos da Ferrari 12Cilindri">
            {engineeringHotspots.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`engineering__hotspot ${selectedId === item.id ? "engineering__hotspot--active" : ""}`}
                style={item.position}
                aria-label={`Ver detalhe: ${item.label}`}
                aria-controls="engineering-detail"
                aria-pressed={selectedId === item.id}
                onClick={() => setSelectedId(item.id)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </div>

        <aside className="engineering__detail" id="engineering-detail" aria-live="polite">
          <div className="engineering__detail-count">{selected.eyebrow}</div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="engineering__detail-image"
              key={selected.id}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.28 }}
            >
              <Image src={selected.image} alt={`Detalhe técnico: ${selected.label}`} fill quality={88} sizes="(max-width: 900px) calc(100vw - 2.4rem), 34vw" />
            </motion.div>
          </AnimatePresence>
          <h3>{selected.title}</h3>
          <p>{selected.copy}</p>
          <button type="button" className="engineering__next" onClick={() => {
            const current = engineeringHotspots.findIndex((item) => item.id === selected.id);
            setSelectedId(engineeringHotspots[(current + 1) % engineeringHotspots.length].id);
          }}>
            PRÓXIMO DETALHE <ArrowUpRight size={16} />
          </button>
        </aside>
      </div>
    </section>
  );
}
