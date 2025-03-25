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
  id: "",
  basePrice: 0,
  size: "",
  thickness: "",
  ingredients: [],
  amount: 1,
  name: "",
  note: "",
};

const products = [
  {
    id: 1,
    name: "Position Absolute Acı Pizza",
    description:
      "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.",
    price: 85.5,
    rating: 4.9,
    reviewsCount: 200,
  },
  {
    id: 2,
    name: "Pizza Pepperoni",
    description:
      "Zengin pepperoni dilimleri, mozzarella ve domates sosuyla zenginleştirilmiş lezzetli bir pizza.",
    price: 17.99,
    rating: 4.7,
    reviewsCount: 150,
  },
  {
    id: 3,
    name: "Pizza Vegetariana",
    description: "Sebzelerle dolu ve zeytinyağlı lezzetli bir pizza.",
    price: 16.5,
    rating: 4.2,
    reviewsCount: 80,
  },
  {
    id: 4,
    name: "Pizza BBQ Chicken",
    description:
      "Barbekü sosu, tavuk ve cheddar peyniri ile zenginleştirilmiş nefis bir pizza.",
    price: 18.99,
    rating: 4.8,
    reviewsCount: 200,
  },
];

export { pizzaToppings, size, thickness, initialFormData, products };
