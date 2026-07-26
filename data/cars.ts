export type CarModel = {
  name: string;
  power: string;
  topSpeed: string;
  sprint: string;
  price: string;
  accent: string;
  image: string;
};

export const cars: CarModel[] = [
  {
    name: "SF90 STRADALE",
    power: "1.000 CV",
    topSpeed: "340 KM/H",
    sprint: "2,5 S",
    price: "A PARTIR DE R$ 7,9 MI",
    accent: "#d82020",
    image: "/images/sf90-card.png",
  },
  {
    name: "812 SUPERFAST",
    power: "800 CV",
    topSpeed: "340 KM/H",
    sprint: "2,9 S",
    price: "A PARTIR DE R$ 6,7 MI",
    accent: "#e52323",
    image: "/images/812-card.png",
  },
  {
    name: "F8 TRIBUTO",
    power: "720 CV",
    topSpeed: "340 KM/H",
    sprint: "2,9 S",
    price: "A PARTIR DE R$ 5,9 MI",
    accent: "#c51d1d",
    image: "/images/f8-card.png",
  },
];
