export const twelveCilindriFrames = Array.from(
  { length: 8 },
  (_, index) => `/images/360/12cilindri-${String(index).padStart(2, "0")}.png`,
);

export type EngineeringHotspot = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  position: { left: string; top: string };
};

export const engineeringHotspots: EngineeringHotspot[] = [
  {
    id: "aero",
    label: "Aerodinâmica ativa",
    eyebrow: "01 / FLUXO CONTROLADO",
    title: "SUPERFÍCIES QUE RESPONDEM AO AR",
    copy: "Aerodinâmica ativa integrada administra os fluxos de ar para equilibrar estabilidade em alta velocidade e eficiência em reta.",
    image: "/images/engineering-aero.png",
    position: { left: "69%", top: "28%" },
  },
  {
    id: "carbon",
    label: "Materiais compostos",
    eyebrow: "02 / MASSA OTIMIZADA",
    title: "CARBONO SEM CONCESSÕES",
    copy: "Texturas técnicas e materiais leves compõem uma superfície pensada para unir precisão visual e foco funcional.",
    image: "/images/engineering-carbon.png",
    position: { left: "44%", top: "71%" },
  },
  {
    id: "brakes",
    label: "Freios de alto desempenho",
    eyebrow: "03 / FRENAGEM REPETÍVEL",
    title: "PRECISÃO SOB TEMPERATURA",
    copy: "O conjunto foi dimensionado para manter controle e consistência de resposta nas demandas mais intensas de condução.",
    image: "/images/engineering-brakes.png",
    position: { left: "19%", top: "73%" },
  },
  {
    id: "engine",
    label: "V12 aspirado",
    eyebrow: "04 / CORAÇÃO MECÂNICO",
    title: "DOZE CILINDROS, 830 CV",
    copy: "O V12 aspirado de 6.496 cm³ entrega 830 cv a 9.250 rpm e alcança 9.500 rpm de rotação máxima.",
    image: "/images/engineering-v12.png",
    position: { left: "61%", top: "35%" },
  },
  {
    id: "exhaust",
    label: "Sistema de escape",
    eyebrow: "05 / ASSINATURA ACÚSTICA",
    title: "A ASSINATURA DO V12",
    copy: "A arquitetura aspirada de doze cilindros preserva uma resposta linear e uma assinatura sonora própria da Ferrari 12Cilindri.",
    image: "/images/engineering-exhaust.png",
    position: { left: "86%", top: "69%" },
  },
  {
    id: "cockpit",
    label: "Cockpit focado",
    eyebrow: "06 / PILOTO NO CENTRO",
    title: "INFORMAÇÃO NA LINHA DE VISÃO",
    copy: "Volante, telemetria e comandos concentram decisões sem diluir a conexão tátil entre piloto e máquina.",
    image: "/images/technology-cockpit.png",
    position: { left: "52%", top: "18%" },
  },
];
