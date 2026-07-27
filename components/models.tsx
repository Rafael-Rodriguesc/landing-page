"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cars, type CarModel } from "@/data/cars";

function ModelCard({ car, index, active, onActivate }: { car: CarModel; index: number; active: boolean; onActivate: () => void }) {
  const cardRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  function updateTilt(event: React.PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType === "touch" || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
    cardRef.current.style.setProperty("--rotate-x", `${(0.5 - y) * 8}deg`);
    cardRef.current.style.setProperty("--rotate-y", `${(x - 0.5) * 10}deg`);
    cardRef.current.style.setProperty("--glow-x", `${x * 100}%`);
    cardRef.current.style.setProperty("--glow-y", `${y * 100}%`);
  }

  function resetTilt() {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rotate-x", "0deg");
    cardRef.current.style.setProperty("--rotate-y", "0deg");
    cardRef.current.style.setProperty("--glow-x", "50%");
    cardRef.current.style.setProperty("--glow-y", "18%");
  }

  return (
    <article
      ref={cardRef}
      className={`model-card ${active ? "model-card--active" : ""}`}
      tabIndex={0}
      onFocus={onActivate}
      onPointerEnter={onActivate}
      onPointerMove={updateTilt}
      onPointerLeave={resetTilt}
      onBlur={resetTilt}
      style={{ "--card-accent": car.accent } as React.CSSProperties}
    >
      <div className="model-card__glow" aria-hidden="true" />
      <div className="model-card__top"><span>{car.engine}</span><span>{String(index + 1).padStart(2, "0")}/06</span></div>
      <div className="model-card__visual">
        <Image src={car.image} alt={`${car.name} em cenário escuro de apresentação`} fill sizes="(max-width: 900px) 84vw, 33vw" />
      </div>
      <div className="model-card__content">
        <h3>{car.name}</h3>
        <div className="model-card__stats">
          <span><b>{car.power}</b>POTÊNCIA</span>
          <span><b>{car.torque}</b>TORQUE</span>
          <span><b>{car.sprint}</b>0–100 KM/H</span>
          <span><b>{car.topSpeed}</b>VELOCIDADE</span>
          <span><b>{car.transmission}</b>TRANSMISSÃO</span>
          <span><b>{car.weight}</b>PESO SECO</span>
        </div>
        <div className="model-card__bottom"><span>{car.price}</span><a href="#configurador" aria-label={`Explorar ${car.name}`}>EXPLORAR <ArrowRight size={16} /></a></div>
      </div>
    </article>
  );
}

export function Models() {
  const [active, setActive] = useState(1);
  return (
    <section className="models section" id="modelos" aria-labelledby="models-title">
      <div className="section-label"><span>01</span> GAMA ATUAL</div>
      <div className="models__heading">
        <h2 id="models-title">NOSSOS<br />MODELOS</h2>
        <p>Seis arquiteturas. Uma mesma obsessão por resposta, equilíbrio e emoção ao volante.</p>
      </div>
      <div className="model-grid">
        {cars.map((car, index) => <ModelCard key={car.name} car={car} index={index} active={active === index} onActivate={() => setActive(index)} />)}
      </div>
    </section>
  );
}
