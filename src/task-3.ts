const usernames: string[] = ["Andy", "Andruxa", "Druce"];
const ratings: number[] = [9, 8, 6];
const products: Product[] = [
  {
    id: 121,
    name: "Tablet Samsung",
    description: "This Tablet is reealy coool!!!!!!!!!11",
  },
  {
    id: 151,
    name: "IPhone",
  },
  {
    id: 1488,
    name: "Kompuxter",
  },
];

interface Product {
  readonly id: number;
  name: string;
  description?: string;
}
