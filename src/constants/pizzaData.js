const pizzaToppings = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Sogan",
  "Domates",
  "Misir",
  "Sucuk",
  "Jalepeno",
  "Sarimsak",
  "Biber",
  "Ananas",
  "Kabak",
];

const size = {
  items: [
    { value: "kucuk", label: "S" },
    { value: "orta", label: "M" },
    { value: "buyuk", label: "L" },
  ],
};
const thickness = {
  items: [
    { value: "ince", label: "İnce" },
    { value: "incecik", label: "İncecik" },
    { value: "klasik", label: "Klasik" },
  ],
};

const initialFormData = {
  size: "",
  thickness: "",
  ingredients: [],
  note: "",
  basePrice: 85.5,
  amount: 1,
  name: "",
};

export { pizzaToppings, size, thickness, initialFormData };
