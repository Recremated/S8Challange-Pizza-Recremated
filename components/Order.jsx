import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  pizzaToppings,
  thickness,
  size,
  initialFormData,
  products,
} from "../src/constants/productData";
import Header from "./Header";
import OrderForm from "./OrderForm";

//ID bilgisi ana sayfada secilen urunden gelecek !
const productId = 1;
//Find ile datadan istedigimiz id'ye sahip urunun verilerini aliyor
const selectedProduct = {
  ...products.find((product) => product.id === productId),
};
// Boyut,kalinlik,ek malzemeler dinamik olarak siteye ekleniyor ve veri degistiginde guncelleniyor.
const sizeOptions = { ...size };
const thicknessOptions = { ...thickness };
const selection = [...pizzaToppings];
const initial = { ...initialFormData };

const Order = () => {
  const navigate = useNavigate();
  //Urun ID'sini ve baz fiyatini form verisine ekliyor
  const [formData, setFormData] = useState({
    ...initial,
    basePrice: selectedProduct.price,
    id: productId,
  });
  //Product ID degistignde formDatayi guncelliyor
  useEffect(() => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    setFormData((prevState) => ({
      ...prevState,
      basePrice: selectedProduct.price,
      id: selectedProduct.id,
    }));
  }, [productId]);

  // Hatalari tutan state. Basta sayfa bos olacagindan bununla ilgili errorler baslangicta ekleniyor.
  const [errors, setErrors] = useState({
    size: "size alanı boş bırakılamaz",
    thickness: "thickness alanı boş bırakılamaz.",
    name: "Isim alani bos birakilamaz",
  });

  // Submitlemek icin gerekli olan isValid stateini baslangic degeri false olarak ekliyor
  const [isValid, setIsValid] = useState(false);

  // Secilmesi gereken alanlar secilmediginde (size ve thickness gibi) error ekliyor. Gerekli alan secildiginde onun errorunu siliyor.
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

  //Toplam fiyati hesaplayan bir fonksiyon
  const calculateTotalPrice = () => {
    const ingredientsPrice = formData.ingredients.length * 5;
    const totalPrice =
      (formData.basePrice + ingredientsPrice) * formData.amount;
    return totalPrice;
  };

  //handleChange fonksiyonu. Once inputlara gore formData'yi updateliyor. Sonrasinda secili olmasi gereken inputlarla ilgili gereklli validasyonlari yapiyor.
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
  /* Oncelikle isim inputun basindaki ve sonundaki bosluklari siliyor. Sonra validasyonlarini yapiyor ve 
  bir problem olmasi durumunda ilgili hatayi errorlerin icine ekliyor. Hatalar ortadan kalktiginda ise errorler icerisinden siliyor.*/
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
  };
  // Eklenen malzeme varsa filtreleyerek cikartiyor,yoksa ekliyor. 10'un uzerinde malzeme secilmeye calisildiginda alert veriyor ve onceki dataya dokunmadan returnluyor.
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
  // Miktari ayarlamaya yarayan butonlarin fonksiyonu. Button increase ise amountu 1 arttirip kaydediyor. Degil ise bir azaltip kaydediyor. 0 secilmesini engelliyor.
  const handleAmountChange = (operation) => {
    setFormData((prevData) => ({
      ...prevData,
      amount:
        operation === "increase"
          ? prevData.amount + 1
          : Math.max(1, prevData.amount - 1),
    }));
  };
  // Verilen stringdeki her kelimenin ilk harfini buyuk geri kalanini kucuk yaparak duzenleyen fonksiyon.
  const cleanName = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  // Suanki fiyati gosteren degisken. (Olmasi gerektigi gibi calisyor ama burda bir hata olabilir, cok dusunemedim uzerine :) ).
  const currentPrice = calculateTotalPrice();

  /* Eger isValid true ise reqres.in post request yapiyor. Gonderirken ismi duzenleyip toplam fiyati tekrardan hesaplayarak gonderiyor.
     Istek basarili olursa gelen response.data'sini konsola yazdiriyor ve /Success'e gidiyor.Hata olmasi durumunda ise konsola hatayi yazdiriyor.
  */
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
  // FormData ve errors'u dependency olarak aliyor ve onlar her degistiginde isValid state'i guncelleniyor.
  useEffect(() => {
    const isFormValid =
      formData.name !== "" &&
      formData.size !== "" &&
      formData.thickness !== "" &&
      formData.ingredients.length <= 10 &&
      Object.keys(errors).length === 0;
    setIsValid(isFormValid);
  }, [formData, errors]);

  return (
    <main className="bg-white flex flex-col items-center min-w-[390px] ">
      <Header></Header>
      <div className="flex flex-col max-w-xs xs:max-w-sm sm:max-w-md md:max-w-l lg:max-w-xl mx-[60px] gap-4 mt-5">
        <h2 className="text-[27px] sm:text-[22px] font-barlow font-semibold">
          {selectedProduct.name}
        </h2>
        <div className="flex items-center font-barlow justify-between">
          <span className="text-[28px] font-bold">
            {formData.basePrice.toFixed(2)}₺
          </span>
          <span className="text-gray-500">
            {selectedProduct.rating} ⭐ ({selectedProduct.reviewsCount})
          </span>
        </div>
        <p className="text-[#5F5F5F] font-barlow mt-4 text-[20px] sm:text-[16px] ">
          {selectedProduct.description}
        </p>
        <OrderForm
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
        ></OrderForm>
      </div>
    </main>
  );
};

export default Order;
