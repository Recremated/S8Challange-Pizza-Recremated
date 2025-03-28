import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import Header from "../components/Header";

const Home = ({ productData }) => {
  const navigate = useNavigate();
  const { products, newType, types } = productData;
  const [filteredArray, setFilteredArray] = useState([]);
  const [selectedOption, setSelectedOption] = useState(types[0]);
  const handleOrderClick = (itemId) => {
    const updatedProduct = products.find((product) => product.id === itemId);
    navigate("/order", { state: { selectedProduct: updatedProduct } });
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
  const toSvgType = (item) =>
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
            <button className="font-semibold w-[193px] h-[56px] text-[24px] sm:text-[18px] mt-10  rounded-[50px] text-[#292929] leading-[56px] bg-[#FDC913] hover:bg-white transition-all duration-200 shadow-md cursor-pointer">
              ACIKTIM
            </button>
          </ScrollLink>
        </div>
      </div>
      <div className="flex flex-col bg-[#FAF7F2]">
        <div className="bg-white py-5">
          <div className="px-5 max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-4">
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
                  <div className="flex gap-1 items-center justify-center p-1 hover:bg-[#292929] hover:text-white rounded-[50px]">
                    <img
                      src={`../images/iteration-2-images/icons/${toSvgType(
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

        <div className="flex justify-center px-6 mx-auto w-full max-w-6xl flex-wrap sm:flex-nowrap gap-2 mt-8 ">
          <div className=" aspect-636/536 bg-red-600 p-6 text-white flex flex-col w-full bg-cover bg-[url(../images/iteration-2-images/cta/kart-1.png)] bg-center rounded ">
            <h2 className="text-4xl font-bold mx-3">Özel Lezzetus</h2>
            <p className="mt-2 text-sm mx-3">Position: Absolute Acı Burger</p>
            <button className="mt-4 mx-3 bg-white text-red-600 py-2 px-4 rounded-full font-semibold w-1/3">
              SİPARİŞ VER
            </button>
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className=" aspect-636/268 bg-yellow-200  text-white p-6 flex flex-col bg-cover bg-[url(../images/iteration-2-images/cta/kart-2.png)] bg-center rounded">
              <h2 className="text-xl font-bold w-1/2">
                Hackathlon Burger Menü
              </h2>
              <button className=" bg-white text-gray-800 py-2 px-4 rounded-full font-semibold w-1/3 ">
                SİPARİŞ VER
              </button>
            </div>
            <div className=" aspect-636/268 bg-yellow-200 text-gray-900 p-6 flex flex-col bg-cover bg-[url(../images/iteration-2-images/cta/kart-3.png)] bg-center rounded ">
              <h2 className="text-xl font-bold w-1/2">
                <span className="text-red-600">Çoooook</span> hızlı npm gibi
                kurye
              </h2>
              <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-full font-semibold w-1/3">
                SİPARİŞ VER
              </button>
            </div>
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

        <Element
          name="radioSection"
          className="px-5 max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-4 mt-8 t"
        >
          {types.map((type) => (
            <div className="flex gap-1 items-center justify-center" key={type}>
              <label
                htmlFor={type}
                className={`flex items-center justify-center rounded-[50px] p-2 bg-white hover:bg-[#292929] cursor-pointer hover:text-white ${
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
                    src={`../images/iteration-2-images/icons/${toSvgType(
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

        <div className="px-5 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 my-8">
          {filteredArray.map((item, index) => (
            <div
              key={index}
              className="flex gap-1 items-center justify-center flex-col bg-white"
            >
              <img
                src="../images/iteration-2-images/pictures/food-1.png"
                className="aspect-1/1"
                alt={item.name}
              />
              <div className="flex flex-col w-full gap-1">
                <p>{item.name}</p>
                <div className="flex justify-between">
                  <p>{item.rating}⭐</p>
                  <div className="flex gap-3">
                    <p>({item.reviewsCount})</p>
                    <p>{item.price}₺</p>
                  </div>
                </div>
                <button
                  onClick={() => handleOrderClick(item.id)}
                  className="font-semibold text-[24px] sm:text-[18px]  rounded-[50px] text-[#292929] leading-[56px] bg-[#FDC913] hover:bg-white transition-all duration-200 shadow-md cursor-pointer"
                >
                  Siparis ver
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
