"use client";

import Image from "next/image";
import { Check, Info, Save, Send } from "lucide-react";
import { useState } from "react";
import { cars } from "@/data/cars";

const wheels = [
  { name: "Forjada Diamante", price: 0 },
  { name: "Carbono Pista", price: 180_000 },
  { name: "Cinco Raios", price: 95_000 },
];

const brakes = [
  { name: "Rosso", hex: "#e02824", price: 0 },
  { name: "Giallo", hex: "#e6b51e", price: 22_000 },
  { name: "Nero", hex: "#202020", price: 18_000 },
];

const interiors = [
  { name: "Alcantara Nero", price: 0 },
  { name: "Cuoio Tradizione", price: 145_000 },
  { name: "Carbono Racing", price: 220_000 },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

export function Configurator() {
  const [modelSlug, setModelSlug] = useState(cars[0].slug);
  const [paintId, setPaintId] = useState(cars[0].configurator.paints[0].id);
  const [wheel, setWheel] = useState(wheels[0]);
  const [brake, setBrake] = useState(brakes[0]);
  const [interior, setInterior] = useState(interiors[0]);
  const [feedback, setFeedback] = useState("");

  const model = cars.find((car) => car.slug === modelSlug) ?? cars[0];
  const paint =
    model.configurator.paints.find((item) => item.id === paintId) ??
    model.configurator.paints[0];
  const price =
    model.priceValue +
    paint.price +
    wheel.price +
    brake.price +
    interior.price;

  function selectModel(slug: string) {
    const nextModel = cars.find((car) => car.slug === slug) ?? cars[0];
    setModelSlug(nextModel.slug);
    setPaintId(nextModel.configurator.paints[0].id);
    setFeedback("");
  }

  function showFeedback(message: string) {
    setFeedback(message);
    window.setTimeout(() => setFeedback(""), 3200);
  }

  return (
    <section
      className="configurator section"
      id="configurador"
      aria-labelledby="configurator-title"
    >
      <div className="section-label">
        <span>04</span> ATELIER DIGITAL
      </div>

      <div className="configurator__heading">
        <h2 id="configurator-title">
          CONFIGURE O SEU
          <br />
          FERRARI
        </h2>
        <p>
          Monte uma especificação pessoal. Modelo e pintura usam imagens
          dedicadas; acabamentos complementares compõem o resumo e o valor
          estimado.
        </p>
      </div>

      <div className="configurator__workspace">
        <div className="configurator__stage">
          <div className="configurator__stage-head">
            <span>IMAGEM REAL DA PINTURA</span>
            <strong>{model.name}</strong>
          </div>

          <div className="configurator__vehicle">
            <Image
              key={paint.image}
              className="configurator__image"
              src={paint.image}
              alt={`${model.name} com pintura ${paint.name}`}
              fill
              quality={90}
              sizes="(max-width: 1050px) calc(100vw - 4rem), 980px"
            />
          </div>

          <div
            className="configurator__model-specs"
            aria-label={`Especificações do ${model.name}`}
          >
            <span>
              <small>MOTOR</small>
              <strong>{model.engine}</strong>
            </span>
            <span>
              <small>POTÊNCIA</small>
              <strong>{model.power}</strong>
            </span>
            <span>
              <small>0–100 KM/H</small>
              <strong>{model.sprint}</strong>
            </span>
            <span>
              <small>VELOCIDADE MÁXIMA</small>
              <strong>{model.topSpeed}</strong>
            </span>
          </div>

          <div className="configurator__visual-specs">
            <span>Pintura: {paint.name}</span>
            <span>Rodas*: {wheel.name}</span>
            <span>Pinças*: {brake.name}</span>
          </div>
        </div>

        <div className="configurator__panel">
          <fieldset>
            <legend>01 / MODELO</legend>
            <select
              value={modelSlug}
              onChange={(event) => selectModel(event.target.value)}
              aria-label="Selecionar modelo"
            >
              {cars.map((car) => (
                <option key={car.slug} value={car.slug}>
                  {car.name}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset>
            <legend>02 / COR DA CARROCERIA</legend>
            <div className="configurator__swatches">
              {model.configurator.paints.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={item.name}
                  aria-pressed={paint.id === item.id}
                  onClick={() => setPaintId(item.id)}
                >
                  <i style={{ background: item.hex }} />
                  {paint.id === item.id && <Check size={12} />}
                </button>
              ))}
            </div>
            <small>
              {paint.name}{" "}
              {paint.price
                ? `· + ${formatPrice(paint.price)}`
                : "· incluída"}
            </small>
          </fieldset>

          <fieldset>
            <legend>03 / RODAS</legend>
            <div className="configurator__options">
              {wheels.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  aria-pressed={wheel.name === item.name}
                  onClick={() => setWheel(item)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>04 / PINÇAS DE FREIO</legend>
            <div className="configurator__swatches">
              {brakes.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Pinças ${item.name}`}
                  aria-pressed={brake.name === item.name}
                  onClick={() => setBrake(item)}
                >
                  <i style={{ background: item.hex }} />
                  {brake.name === item.name && <Check size={12} />}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>05 / ACABAMENTO INTERNO</legend>
            <div className="configurator__options">
              {interiors.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  aria-pressed={interior.name === item.name}
                  onClick={() => setInterior(item)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </fieldset>

          <p className="configurator__concept-note">
            <Info size={14} />
            Rodas, pinças e interior são prévias conceituais e não alteram a
            fotografia do veículo.
          </p>

          <div className="configurator__summary">
            <span>SUA CONFIGURAÇÃO</span>
            <strong>{model.name}</strong>
            <p>
              {model.engine} · {model.power} · {model.transmission}
              <br />
              {paint.name} · {wheel.name}
              <br />
              Pinças {brake.name} · {interior.name}
            </p>
            <b>{formatPrice(price)}</b>
          </div>

          <div className="configurator__actions">
            <button
              type="button"
              className="button button--ghost"
              onClick={() =>
                showFeedback("Configuração salva nesta sessão.")
              }
            >
              <Save size={15} /> SALVAR CONFIGURAÇÃO
            </button>
            <button
              type="button"
              className="button button--red"
              onClick={() =>
                showFeedback(
                  "Proposta preparada. Nossa equipe entrará em contato.",
                )
              }
            >
              <Send size={15} /> SOLICITAR PROPOSTA
            </button>
          </div>

          <p
            className="configurator__feedback"
            role="status"
            aria-live="polite"
          >
            {feedback}
          </p>
        </div>
      </div>
    </section>
  );
}
