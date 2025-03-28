const productData = {
  newType: ["YENİ! Kore", "Ramen"],
  types: [
    "Ramen",
    "Pizza",
    "Burger",
    "Kızartmalar",
    "Fast food",
    "Gazlı İçecekler",
  ],
  toppings: [
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
  ],
  size: [
    { value: "kucuk", label: "S" },
    { value: "orta", label: "M" },
    { value: "buyuk", label: "L" },
  ],
  thickness: [
    { value: "ince", label: "İnce" },
    { value: "incecik", label: "İncecik" },
    { value: "klasik", label: "Klasik" },
  ],
  initialFormData: {
    id: "",
    basePrice: 0,
    size: "",
    thickness: "",
    ingredients: [],
    amount: 1,
    name: "",
    note: "",
  },
  products: [
    {
      id: 1,
      name: "Spicy Tonkotsu Ramen",
      description:
        "Zengin tonkotsu çorbası ve baharatlı et dilimleriyle yapılan nefis ramen.",
      price: 12.99,
      rating: 4.8,
      reviewsCount: 180,
      type: "Ramen",
    },
    {
      id: 2,
      name: "Shoyu Ramen",
      description:
        "Soja bazlı hafif bir çorba ve tender et dilimleriyle servis edilen ramen.",
      price: 10.5,
      rating: 4.5,
      reviewsCount: 120,
      type: "Ramen",
    },
    {
      id: 3,
      name: "Miso Ramen",
      description:
        "Fermente miso çorbası ve taze malzemelerle zenginleştirilmiş ramen.",
      price: 11.99,
      rating: 4.7,
      reviewsCount: 150,
      type: "Ramen",
    },

    {
      id: 6,
      name: "Position Absolute Acı Pizza",
      description:
        "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.",
      price: 85.5,
      rating: 4.9,
      reviewsCount: 200,
      type: "Pizza",
    },
    {
      id: 9,
      name: "Pizza BBQ Chicken",
      description:
        "Barbekü sosu, tavuk ve cheddar peyniri ile zenginleştirilmiş nefis bir pizza.",
      price: 18.99,
      rating: 4.8,
      reviewsCount: 200,
      type: "Pizza",
    },
    {
      id: 10,
      name: "Pizza Margherita",
      description:
        "Domates, mozzarella ve taze fesleğen ile hazırlanan klasik bir İtalyan pizzası.",
      price: 15.99,
      rating: 4.6,
      reviewsCount: 120,
      type: "Pizza",
    },

    {
      id: 13,
      name: "Veggie Burger",
      description:
        "Sebze tabanlı et yerine lezzetli ve sağlıklı bir veggie burger.",
      price: 7.99,
      rating: 4.3,
      reviewsCount: 150,
      type: "Burger",
    },
    {
      id: 14,
      name: "Double Cheeseburger",
      description:
        "İki kat et ve peynir ile yapılan doyurucu bir cheeseburger.",
      price: 10.99,
      rating: 4.6,
      reviewsCount: 130,
      type: "Burger",
    },
    {
      id: 15,
      name: "Spicy Jalapeño Burger",
      description:
        "Jalapeño biberleri ile acılı burger sevenler için mükemmel bir seçenek.",
      price: 9.99,
      rating: 4.4,
      reviewsCount: 110,
      type: "Burger",
    },

    {
      id: 16,
      name: "Classic French Fries",
      description: "Klasik kızarmış patates, çıtır çıtır ve lezzetli.",
      price: 3.5,
      rating: 4.8,
      reviewsCount: 200,
      type: "Kızartmalar",
    },
    {
      id: 17,
      name: "Sweet Potato Fries",
      description:
        "Tatlı patateslerden yapılan sağlıklı ve lezzetli kızartmalar.",
      price: 4.99,
      rating: 4.6,
      reviewsCount: 140,
      type: "Fast food",
    },
    {
      id: 18,
      name: "Garlic Parmesan Fries",
      description:
        "Sarımsak ve parmesan peynir ile lezzetlendirilmiş kızarmış patates.",
      price: 5.49,
      rating: 4.7,
      reviewsCount: 160,
      type: "Fast food",
    },
    {
      id: 19,
      name: "Curly Fries",
      description: "Çıtır ve eğlenceli şekliyle curly fries.",
      price: 3.99,
      rating: 4.4,
      reviewsCount: 120,
      type: "Kızartmalar",
    },
    {
      id: 20,
      name: "Chili Cheese Fries",
      description:
        "Baharatlı chili ve cheddar peynirle zenginleştirilmiş kızarmış patates.",
      price: 6.5,
      rating: 4.8,
      reviewsCount: 200,
      type: "Kızartmalar",
    },

    {
      id: 21,
      name: "Coca-Cola",
      description: "Dünyaca ünlü klasik gazlı içecek.",
      price: 2.5,
      rating: 4.9,
      reviewsCount: 300,
      type: "Gazlı İçecekler",
    },
    {
      id: 22,
      name: "Pepsi",
      description: "Bir başka klasik gazlı içecek seçeneği, Pepsi.",
      price: 2.2,
      rating: 4.6,
      reviewsCount: 220,
      type: "Gazlı İçecekler",
    },

    {
      id: 24,
      name: "Sprite",
      description: "Limonlu ve ferahlatıcı bir gazlı içecek.",
      price: 2.3,
      rating: 4.5,
      reviewsCount: 150,
      type: "Gazlı İçecekler",
    },
    {
      id: 25,
      name: "7UP",
      description: "Limonlu gazlı içecek, ferahlatıcı ve tatlı.",
      price: 2.4,
      rating: 4.4,
      reviewsCount: 140,
      type: "Fast food",
    },
  ],
};

export default productData;
