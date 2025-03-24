import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const OrderPizza = () => {
  const selection = [
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

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    size: "",
    thickness: "",
    ingredients: [],
    note: "",
    basePrice: 85.5,
    amount: 1,
  });

  const [errors, setErrors] = useState({
    size: "Pizza boyutu seçilmelidir.",
    thickness: "Hamur kalinliği seçilmelidir.",
  });

  const [isValid, setIsValid] = useState(false);

  const calculateTotalPrice = () => {
    const ingredientsPrice = formData.ingredients.length * 5;
    const totalPrice =
      (formData.basePrice + ingredientsPrice) * formData.amount;
    return totalPrice;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "size") {
      if (value === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          size: "Pizza boyutu seçilmelidir.",
        }));
      } else {
        setErrors((prevErrors) => {
          const { size, ...rest } = prevErrors;
          return rest;
        });
      }
    } else if (name === "thickness") {
      if (value === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          thickness: "Hamur kalinliği seçilmelidir.",
        }));
      } else {
        setErrors((prevErrors) => {
          const { thickness, ...rest } = prevErrors;
          return rest;
        });
      }
    }
  };

  const handleIngredientChange = (ingredient) => {
    setFormData((prevData) => {
      const newIngredients = prevData.ingredients.includes(ingredient)
        ? prevData.ingredients.filter((item) => item !== ingredient)
        : [...prevData.ingredients, ingredient];
      if (newIngredients.length > 10) {
        alert("En fazla 10 malzeme seçebilirsiniz!");
        return prevData;
      }
      return { ...prevData, ingredients: newIngredients };
    });
  };

  const handleAmountChange = (operation) => {
    setFormData((prevData) => ({
      ...prevData,
      amount:
        operation === "increase"
          ? prevData.amount + 1
          : Math.max(1, prevData.amount - 1),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...formData,
      totalPrice: calculateTotalPrice(),
    });
    navigate("/Success");
  };

  useEffect(() => {
    const isFormValid =
      formData.size !== "" &&
      formData.thickness !== "" &&
      Object.keys(errors).length === 0;
    setIsValid(isFormValid);
  }, [formData, errors]);

  const currentPrice = calculateTotalPrice();

  return (
    <div className="bg-white min-h-screen flex flex-col items-center w-full">
      <header className="bg-red-600 text-white w-full h-[207px] flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <img
            className="aspect-8/1 max-w-[362px]"
            src="../images/iteration-1-images/logo.svg"
            alt="Teknolojik Yemekler Logo"
          />
        </div>

        <div className="w-full flex justify-center">
          <div className="max-w-md sm:max-w-md md:max-w-xl lg:max-w-xl w-full mx-[60px] pb-4">
            <div className="text-[20px] sm:text-[16px] font-barlow flex items-center">
              <Link to="/">Anasayfa</Link>
              <span className="mx-1">-</span>
              <span className="font-bold">Sipariş Oluştur</span>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col max-w-md sm:max-w-md md:max-w-xl lg:max-w-xl mx-[60px] gap-4 mt-5">
        <h2 className="text-[27px] sm:text-[22px] font-barlow font-semibold">
          Position Absolute Acı Pizza
        </h2>
        <div className="flex items-center font-barlow justify-between">
          <span className="text-[28px] font-bold">
            {formData.basePrice.toFixed(2)}₺
          </span>
          <span className="text-gray-500">4.9 ⭐ (200)</span>
        </div>
        <p className="text-[#5F5F5F] font-barlow mt-4 text-[20px] sm:text-[16px] ">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <form className="font-barlow" onSubmit={handleSubmit}>
          <div className="flex my-10">
            <div className="flex flex-col w-1/2 gap-3">
              <p
                className="text-[22px] sm:text-[20px] font-semibold"
                htmlFor="size"
              >
                Boyut Seç
                {errors.size && <span className="text-[#D80027]"> *</span>}
              </p>
              <label htmlFor="kucuk">
                <input
                  id="kucuk"
                  type="radio"
                  name="size"
                  value="kucuk"
                  checked={formData.size === "kucuk"}
                  onChange={handleChange}
                />
                <span className="ml-3 text-[20px] sm:text-[16px] text-[#5F5F5F]">
                  Küçük
                </span>
              </label>
              <label htmlFor="orta">
                <input
                  id="orta"
                  type="radio"
                  name="size"
                  value="orta"
                  checked={formData.size === "orta"}
                  onChange={handleChange}
                />
                <span className="ml-3 text-[20px] sm:text-[16px] text-[#5F5F5F]">
                  Orta
                </span>
              </label>
              <label htmlFor="buyuk">
                <input
                  id="buyuk"
                  type="radio"
                  name="size"
                  value="buyuk"
                  checked={formData.size === "buyuk"}
                  onChange={handleChange}
                />
                <span className="ml-3 text-[20px] sm:text-[16px] text-[#5F5F5F]">
                  Büyük
                </span>
              </label>
            </div>
            <div className="flex flex-col w-1/2 gap-3">
              <label
                className="text-[22px] sm:text-[20px] font-semibold"
                htmlFor="thickness"
              >
                Hamur Seç
                {errors.thickness && <span className="text-[#CE2829]"> *</span>}
              </label>
              <select
                id="thickness"
                name="thickness"
                value={formData.thickness}
                onChange={handleChange}
                className="text-[20px] sm:text-[16px] text-[#5F5F5F] "
              >
                <option value="">Hamur kalınlığı</option>
                <option value="ince">İnce</option>
                <option value="incecik">İncecik</option>
                <option value="klasik">Klasik</option>
              </select>
            </div>
          </div>

          <div className="mb-10">
            <p className="font-semibold text-[22px] sm:text-[20px]">
              Ek Malzemeler
            </p>
            <p className="my-4 text-[20px] sm:text-[16px] text-[#5F5F5F]">
              En Fazla 10 malzeme seçebilirsiniz. 5₺
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {selection.map((ingredient) => (
                <label key={ingredient}>
                  <input
                    type="checkbox"
                    id={`ingredient-${ingredient}`}
                    name="ingredients"
                    checked={formData.ingredients.includes(ingredient)}
                    onChange={() => handleIngredientChange(ingredient)}
                  />
                  <span className="ml-3 font-bold text-[20px] sm:text-[16px] text-[#5F5F5F]">
                    {ingredient}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="pb-10 border-b">
            <label
              htmlFor="note"
              className="font-semibold text-[22px] sm:text-[20px]"
            >
              Sipariş Notu
            </label>
            <textarea
              rows="1"
              className="w-full p-4 mt-4 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={formData.note}
              onChange={handleChange}
              name="note"
              id="note"
            ></textarea>
          </div>

          <div className="mt-4 py-4 flex flex-col items-center gap-5">
            <div className="flex flex-col justify-center w-full p-4 border rounded-[6px] gap-3">
              <div className="flex justify-between">
                <p className="text-[20px] font-semibold">Sipariş Toplamı</p>
              </div>
              <div className="flex justify-between text-[18px] font-semibold">
                <p>Seçimler</p>
                <span className="ml-auto">
                  {formData.ingredients.length * 5}₺
                </span>
              </div>
              <div className="flex justify-between text-[18px] text-[#CE2829] font-semibold">
                <p>Toplam</p>
                <span className="ml-auto">{currentPrice.toFixed(2)}₺</span>
              </div>
            </div>

            <div className="flex w-full justify-center gap-5">
              <button
                type="submit"
                className="bg-[#FDC913] rounded px-4 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={!isValid}
              >
                Siparişi Ver
              </button>
              <div className="flex border rounded-[6px] items-center overflow-hidden">
                <button
                  type="button"
                  className="px-4 py-3 bg-[#FDC913] text-black font-bold  hover:bg-red-600 transition duration-200"
                  onClick={() => handleAmountChange("decrease")}
                >
                  -
                </button>

                <div className="text-[22px] font-barlow font-semibold mx-4">
                  {formData.amount}
                </div>

                <button
                  type="button"
                  className="px-4 py-3 bg-[#FDC913] text-black font-bold hover:bg-red-600 transition duration-200"
                  onClick={() => handleAmountChange("increase")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderPizza;
