"use client";

import Image from "next/image";
import { MoveHorizontal, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { twelveCilindriFrames } from "@/data/ferrari-experience";

const FRAME_STEP = 52;

function wrapFrame(value: number) {
  return ((value % twelveCilindriFrames.length) + twelveCilindriFrames.length) % twelveCilindriFrames.length;
}

export function TwelveCilindriViewer() {
  const reduceMotion = useReducedMotion() ?? false;
  const [frame, setFrame] = useState(0);
  const [fallback, setFallback] = useState(false);
  const drag = useRef<{ startX: number; startFrame: number } | null>(null);

  function moveFrame(amount: number) {
    if (!reduceMotion) setFrame((current) => wrapFrame(current + amount));
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType === "mouse" && event.button !== 0) return;
    drag.current = { startX: event.clientX, startFrame: frame };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!drag.current || reduceMotion) return;
    const moved = Math.round((drag.current.startX - event.clientX) / FRAME_STEP);
    setFrame(wrapFrame(drag.current.startFrame + moved));
  }

  function endDrag(event: React.PointerEvent<HTMLDivElement>) {
    drag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <section className="viewer section" id="ferrari-12cilindri" aria-labelledby="viewer-title">
      <div className="viewer__header">
        <div>
          <div className="section-label"><span>01A</span> EXPERIÊNCIA 12CILINDRI</div>
          <h2 id="viewer-title">FORMA EM<br />MOVIMENTO.</h2>
        </div>
        <p>Uma leitura tátil da silhueta. Arraste horizontalmente para percorrer os oito ângulos fotográficos da Ferrari 12Cilindri.</p>
      </div>

      <div
        className={`viewer__stage ${drag.current ? "viewer__stage--dragging" : ""}`}
        tabIndex={0}
        role="group"
        aria-label="Visualizador da Ferrari 12Cilindri"
        aria-describedby="viewer-instruction"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            moveFrame(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            moveFrame(1);
          }
        }}
      >
        {fallback ? (
          <div className="viewer__fallback" role="status">Visualização indisponível. Imagem estática da Ferrari 12Cilindri.</div>
        ) : (
          <Image
            key={twelveCilindriFrames[frame]}
            src={twelveCilindriFrames[frame]}
            alt={`Ferrari 12Cilindri, ângulo ${frame + 1} de ${twelveCilindriFrames.length}`}
            fill
            priority={frame === 0}
            quality={90}
            sizes="(max-width: 760px) calc(100vw - 2.4rem), min(90vw, 1180px)"
            onError={() => {
              if (frame === 0) setFallback(true);
              else setFrame(0);
            }}
          />
        )}
        <div className="viewer__stage-shade" />
        <div className="viewer__caption">
          <span>FERRARI 12CILINDRI / 01</span>
          <strong>{String(frame + 1).padStart(2, "0")} / {String(twelveCilindriFrames.length).padStart(2, "0")}</strong>
        </div>
        <p className="viewer__instruction" id="viewer-instruction"><MoveHorizontal size={17} /> {reduceMotion ? "VISUALIZAÇÃO ESTÁTICA" : "ARRASTE PARA EXPLORAR"}</p>
      </div>

      <div className="viewer__controls" aria-label="Selecionar ângulo do veículo">
        <button type="button" onClick={() => setFrame(0)} aria-label="Voltar ao primeiro ângulo" disabled={reduceMotion}><RotateCcw size={15} /></button>
        <div className="viewer__frames">
          {twelveCilindriFrames.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ver ângulo ${index + 1}`}
              aria-pressed={frame === index}
              onClick={() => !reduceMotion && setFrame(index)}
              disabled={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
