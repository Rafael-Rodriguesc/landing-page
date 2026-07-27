export type CarPaint = {
  id: string;
  name: string;
  hex: string;
  image: string;
  price: number;
};

export type CarModel = {
  name: string;
  slug: string;
  engine: string;
  power: string;
  torque: string;
  topSpeed: string;
  sprint: string;
  transmission: string;
  weight: string;
  price: string;
  priceValue: number;
  accent: string;
  image: string;
  configurator: {
    paints: CarPaint[];
  };
};

export const cars: CarModel[] = [
  {
    name: "SF90 STRADALE",
    slug: "sf90",
    engine: "V8 biturbo híbrido",
    power: "1.000 cv",
    torque: "800 Nm",
    topSpeed: "340 km/h",
    sprint: "2,5 s",
    transmission: "F1 DCT 8 marchas",
    weight: "1.600 kg",
    price: "A partir de R$ 7,9 mi",
    priceValue: 7_900_000,
    accent: "#e32119",
    image: "/images/sf90-card.png",
    configurator: {
      paints: [
        { id: "rosso-corsa", name: "Rosso Corsa", hex: "#d71920", image: "/images/sf90-card.png", price: 0 },
        { id: "nero-daytona", name: "Nero Daytona", hex: "#111214", image: "/images/sf90-nero-config.png", price: 145_000 },
      ],
    },
  },
  {
    name: "812 SUPERFAST",
    slug: "812",
    engine: "V12 aspirado",
    power: "800 cv",
    torque: "718 Nm",
    topSpeed: "340 km/h",
    sprint: "2,9 s",
    transmission: "F1 DCT 7 marchas",
    weight: "1.525 kg",
    price: "A partir de R$ 6,7 mi",
    priceValue: 6_700_000,
    accent: "#f13b2f",
    image: "/images/812-card.png",
    configurator: {
      paints: [
        { id: "grigio-titanio", name: "Grigio Titanio", hex: "#85878a", image: "/images/812-card.png", price: 0 },
        { id: "rosso-corsa", name: "Rosso Corsa", hex: "#d71920", image: "/images/812-rosso-config.png", price: 120_000 },
      ],
    },
  },
  {
    name: "F8 TRIBUTO",
    slug: "f8",
    engine: "V8 biturbo",
    power: "720 cv",
    torque: "770 Nm",
    topSpeed: "340 km/h",
    sprint: "2,9 s",
    transmission: "F1 DCT 7 marchas",
    weight: "1.435 kg",
    price: "A partir de R$ 5,9 mi",
    priceValue: 5_900_000,
    accent: "#b91818",
    image: "/images/f8-card.png",
    configurator: {
      paints: [
        { id: "nero-daytona", name: "Nero Daytona", hex: "#111214", image: "/images/f8-card.png", price: 0 },
        { id: "giallo-modena", name: "Giallo Modena", hex: "#e0b300", image: "/images/f8-giallo-config.png", price: 135_000 },
      ],
    },
  },
  {
    name: "296 GTB",
    slug: "296",
    engine: "V6 biturbo híbrido",
    power: "830 cv",
    torque: "740 Nm",
    topSpeed: "330 km/h",
    sprint: "2,9 s",
    transmission: "F1 DCT 8 marchas",
    weight: "1.470 kg",
    price: "A partir de R$ 5,6 mi",
    priceValue: 5_600_000,
    accent: "#ef271f",
    image: "/images/296-gtb-card.png",
    configurator: {
      paints: [
        { id: "rosso-corsa", name: "Rosso Corsa", hex: "#d71920", image: "/images/296-gtb-card.png", price: 0 },
        { id: "blu-corsa", name: "Blu Corsa", hex: "#123fae", image: "/images/296-blu-config.png", price: 155_000 },
      ],
    },
  },
  {
    name: "ROMA",
    slug: "roma",
    engine: "V8 biturbo",
    power: "620 cv",
    torque: "760 Nm",
    topSpeed: "320 km/h",
    sprint: "3,4 s",
    transmission: "F1 DCT 8 marchas",
    weight: "1.472 kg",
    price: "A partir de R$ 4,8 mi",
    priceValue: 4_800_000,
    accent: "#8f171d",
    image: "/images/roma-card.png",
    configurator: {
      paints: [
        { id: "rosso-portofino", name: "Rosso Portofino", hex: "#64151d", image: "/images/roma-card.png", price: 0 },
        { id: "grigio-titanio", name: "Grigio Titanio", hex: "#96918d", image: "/images/roma-grigio-config.png", price: 110_000 },
      ],
    },
  },
  {
    name: "PUROSANGUE",
    slug: "purosangue",
    engine: "V12 aspirado",
    power: "725 cv",
    torque: "716 Nm",
    topSpeed: "310 km/h",
    sprint: "3,3 s",
    transmission: "F1 DCT 8 marchas",
    weight: "2.033 kg",
    price: "A partir de R$ 7,4 mi",
    priceValue: 7_400_000,
    accent: "#bd2f27",
    image: "/images/purosangue-card.png",
    configurator: {
      paints: [
        { id: "grigio-silverstone", name: "Grigio Silverstone", hex: "#3e4145", image: "/images/purosangue-card.png", price: 0 },
        { id: "rosso-portofino", name: "Rosso Portofino", hex: "#68151d", image: "/images/purosangue-rosso-config.png", price: 165_000 },
      ],
    },
  },
];
