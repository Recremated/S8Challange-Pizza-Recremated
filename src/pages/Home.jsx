import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import Header from "../components/Header";

const Home = ({ productData }) => {
  const navigate = useNavigate();
  //Destructuring
  const { products, newType, types } = productData;
  //filtreledigim array
  const [filteredArray, setFilteredArray] = useState([]);
  //sectigim urun cesidi
  const [selectedOption, setSelectedOption] = useState(types[0]);
  //tiklaninca orderda o urunun siparis sayfasini aciyor
  const handleOrderClick = (itemId) => {
    const updatedProduct = products.find((product) => product.id === itemId);
    navigate("/Order", { state: { selectedProduct: updatedProduct } });
  };
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.type === selectedOption
    );
    setFilteredArray(filteredProducts);
  }, [selectedOption, products]);

  const toKebabCase = (item) =>
    item
      .toLowerCase()
      .replace(/ı/g, "i")
      .replace(/ğ/g, "g")
      .replace(/ş/g, "s")
      .replace(/ç/g, "c")
      .replace(/ö/g, "o")
      .replace(/ü/g, "u")
      .replace(/ö/g, "o")
      .replace(/ı/g, "i")
      .replace(/ /g, "-");
  return (
    <main className="bg-[#F5F5F5] flex flex-col justify-center min-w-[390px] font-barlow">
      <div className="flex flex-col text-center items-center  bg-cover bg-[url(../images/iteration-1-images/home-banner.png)] bg-center min-h-screen ">
        <Header></Header>
        <div className="mt-15 pb-65 mx-15 flex-col items-center flex justify-center">
          <p className="font-satisfy  text-[#FDC913] text-2xl">
            firsati Kacirma
          </p>
          <h1 className="text-white text-[86px] font-roboto-condensed font-light leading-[92px] tracking-[1.5px]">
            KOD ACIKTIRIR
            <br />
            PİZZA, DOYURUR
          </h1>
          <ScrollLink
            key="hero"
            to="radioSection"
            smooth={true}
            duration={800}
            className="cursor-pointer"
          >
            <button className="font-semibold w-[193px] h-[56px] text-[24px] sm:text-[18px] mt-10  rounded-[50px] text-[#292929] leading-[56px]  bg-[#FDC913] hover:bg-white transition-all duration-200 shadow-md cursor-pointer">
              ACIKTIM
            </button>
          </ScrollLink>
        </div>
      </div>
      <div className="flex flex-col bg-[#FAF7F2]">
        <div className="bg-white py-5">
          <div className="px-5 max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-4 ">
            {types.map((type, index) => {
              const newTypeHype = index === 0 ? newType[1] : type;
              return (
                <ScrollLink
                  key={`${type}123${index}`}
                  to="radioSection"
                  smooth={true}
                  duration={800}
                  className="cursor-pointer"
                  onClick={() => setSelectedOption(newTypeHype)}
                >
                  <div className="flex items-center justify-center rounded-[50px] p-2 bg-white transition-all duration-170 shadow-md hover:bg-[#292929] cursor-pointer hover:text-white">
                    <img
                      src={`../images/iteration-2-images/icons/${toKebabCase(
                        newTypeHype
                      )}.svg`}
                      alt=""
                    />
                    <p>{index === 0 ? newType[0] : type}</p>
                  </div>
                </ScrollLink>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center px-6 mx-auto w-full max-w-6xl mt-8 text-center">
          <p className="font-satisfy text-[32px] text-[#CE2829]">
            en çopk paketlenen menüler
          </p>
          <h2 className="text-[42px] font-semibold">
            Acıktıran Kodlara Doyuran Lezzetler
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center px-6 mx-auto w-full max-w-6xl mt-8 text-center gap-2">
          <div className="aspect-[422/336] md:aspect-[636/536] max-h-[536px] md:max-h[336px] bg-cover bg-[url(../images/iteration-2-images/cta/kart-1.png)] bg-center flex md:w-1/2 rounded-[12px]">
            <div className="flex flex-col text-white ml-[40px] mt-[25px] text-left">
              <p className="font-quattrocento text-[72px] leading-[72px]">
                Özel
                <br />
                Lezzetus
              </p>
              <p className="font-semibold text-[20px]">
                Position:Absolute Acı Burger
              </p>
              <button
                onClick={() => handleOrderClick(6)}
                className="w-[138px] h-[48px] text-[14px] font-semibold bg-[#FFFFFF] text-[#CE2829] rounded-[50px] mt-5 cursor-pointer transition-all duration-170 shadow-md hover:bg-[#FDC913] hover:text-[#292929] "
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/2 gap-2">
            <div className="aspect-[422/270] md:aspect-auto h-full max-h-[256px] bg-cover bg-[url(../images/iteration-2-images/cta/kart-2.png)] bg-center flex   rounded-[12px]">
              <div className="flex flex-col text-white ml-[30px] mt-[30px] text-left">
                <p className="text-white font-semibold text-[32px] leading-[44px]">
                  Hackathlon
                  <br /> Burger Menü
                </p>
                <button
                  onClick={() => handleOrderClick(15)}
                  className="w-[138px] h-[48px] text-[14px] font-semibold bg-[#FFFFFF] text-[#CE2829] rounded-[50px] mt-3 cursor-pointer transition-all duration-170 shadow-md hover:bg-[#FDC913] hover:text-[#292929] "
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
            <div className="aspect-[422/270] md:aspect-auto h-full max-h-[256px] bg-cover bg-[url(../images/iteration-2-images/cta/kart-3.png)] bg-center flex   rounded-[12px]">
              <div className="flex flex-col text-white ml-[30px] mt-[30px] text-left">
                <p className="text-[#292929] font-semibold text-[32px] leading-[44px]">
                  <span className="text-[#CE2829]">Çoooook</span> hızlı
                  <br /> npm gibi kurye
                </p>
                <button
                  onClick={() => handleOrderClick(9)}
                  className="w-[138px] h-[48px] text-[14px] font-semibold bg-[#FFFFFF] text-[#CE2829] rounded-[50px] mt-3 cursor-pointer transition-all duration-170 shadow-md hover:bg-[#FDC913] hover:text-[#292929] "
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </div>
        </div>

        <Element
          name="radioSection"
          className="px-5 max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-4 mt-8 "
        >
          {types.map((type) => (
            <div className="flex gap-1 " key={type}>
              <label
                htmlFor={type}
                className={`flex items-center justify-center rounded-[50px] transition-all duration-170 shadow-md p-2 bg-white hover:bg-[#292929] cursor-pointer hover:text-white ${
                  selectedOption === type
                    ? "!bg-[#292929] text-white"
                    : "bg-white"
                }`}
              >
                <input
                  id={type}
                  type="radio"
                  name="types"
                  className="hidden"
                  value={type}
                  checked={selectedOption === type}
                  onChange={handleChange}
                />
                <span className="flex gap-1 items-center justify-center p-1 ">
                  <img
                    src={`../images/iteration-2-images/icons/${toKebabCase(
                      type
                    )}.svg`}
                    alt=""
                  />
                  <p>{type}</p>
                </span>
              </label>
            </div>
          ))}
        </Element>

        <div className="px-5 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {filteredArray.map((item, index) => (
            <div
              key={index}
              className="flex gap-1 items-center justify-center flex-col bg-white p-[32px] rounded-[12px]"
            >
              <img
                src={`../images/iteration-2-images/pictures/${toKebabCase(
                  item.type
                )}-${item.id}.png`}
                className="aspect-1/1"
                alt={item.name}
              />
              <div className="flex flex-col w-full gap-1 ">
                <p className="font-semibold text-[22px]">{item.name}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <p>({item.reviewsCount})</p>
                    <p>{item.rating}⭐</p>
                  </div>
                  <p className="font-bold text-[20px]">{item.price}₺</p>
                </div>
                <button
                  onClick={() => handleOrderClick(item.id)}
                  className="font-semibold text-[24px] sm:text-[18px]  rounded-[50px] text-[#292929] leading-[56px] bg-[#FDC913] hover:bg-white transition-all duration-170 shadow-md cursor-pointer"
                >
                  Sipariş Ver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
