import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  pizzaToppings,
  thickness,
  size,
  initialFormData,
} from "../src/constants/pizzaData";
import Header from "./Header";
import PizzaOrderForm from "./PizzaOrderForm";

const sizeOptions = { ...size };
const thicknessOptions = { ...thickness };
const selection = [...pizzaToppings];
const initial = { ...initialFormData };
const OrderPizza = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initial);

  const [errors, setErrors] = useState({
    size: "Pizza boyutu seçilmelidir.",
    thickness: "Hamur kalinliği seçilmelidir.",
    name: "Isim alani bos birakilamaz",
  });

  const [isValid, setIsValid] = useState(false);

  const validateField = (name, value) => {
    setErrors((prevErrors) => {
      if (value === "") {
        return { ...prevErrors, [name]: `${name} alanı boş bırakılamaz.` };
      } else {
        const { [name]: _, ...rest } = prevErrors;
        return rest;
      }
    });
  };

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

    if (name === "name") {
      validateName(value);
    } else {
      validateField(name, value);
    }
  };

  const validateName = (name) => {
    let trimmedName = name.trim();
    let errorMessage = "";

    if (trimmedName === "") {
      errorMessage = "İsim boş bırakılamaz.";
    } else if (trimmedName.length < 3 || trimmedName.length > 40) {
      errorMessage = "İsim 3-40 karakter arasında olmalıdır.";
    } else if (!/^[a-zA-ZğüşöçİĞÜŞÖÇ\s]+$/.test(trimmedName)) {
      errorMessage = "İsim yalnızca harf ve boşluk içermelidir.";
    } else if (/\s{2,}/.test(trimmedName)) {
      errorMessage = "İsimde ardışık birden fazla boşluk olamaz.";
    }

    if (errorMessage) {
      setErrors((prev) => ({ ...prev, name: errorMessage }));
    } else {
      setErrors((prev) => {
        const { name, ...rest } = prev;
        return rest;
      });
    }

    return trimmedName;
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

  const cleanName = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const currentPrice = calculateTotalPrice();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid) {
      axios
        .post("https://reqres.in/api/pizza", {
          ...formData,
          totalPrice: calculateTotalPrice(),
          name: cleanName(formData.name),
        })
        .then(function (response) {
          console.log(response.data);
          navigate("/Success");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    const isFormValid =
      formData.name !== "" &&
      formData.size !== "" &&
      formData.thickness !== "" &&
      Object.keys(errors).length === 0;
    setIsValid(isFormValid);
  }, [formData, errors]);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center ">
      <Header></Header>
      <div className="flex flex-col max-w-xs sm:max-w-md md:max-w-l lg:max-w-xl mx-[60px] gap-4 mt-5">
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
        <PizzaOrderForm
          formData={formData}
          handleChange={handleChange}
          handleIngredientChange={handleIngredientChange}
          handleAmountChange={handleAmountChange}
          sizeOptions={sizeOptions}
          thicknessOptions={thicknessOptions}
          selection={selection}
          errors={errors}
          isValid={isValid}
          currentPrice={currentPrice}
          handleSubmit={handleSubmit}
        ></PizzaOrderForm>
      </div>
    </div>
  );
};

export default OrderPizza;
