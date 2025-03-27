import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="bg-[#F5F5F5] flex flex-col justify-center min-w-[390px] font-barlow">
      <header className="flex flex-col text-center items-center  bg-cover bg-[url(../images/iteration-1-images/home-banner.png)] bg-center min-h-screen ">
        <div className="mt-15 pb-65 mx-15 flex-col items-center flex justify-center">
          <img
            className="aspect-8/1 max-w-[362px]"
            src="../images/iteration-1-images/logo.svg"
            alt="Logo"
          ></img>
          <p className="font-satisfy mt-10 text-[#FDC913] text-2xl">
            {" "}
            Firsati Kacirma
          </p>
          <h1 className="text-white text-[86px] font-roboto-condensed font-light leading-[92px] tracking-[1.5px]">
            KOD ACIKTIRIR
            <br />
            PİZZA, DOYURUR
          </h1>
          <Link to="/Order">
            <button className="font-semibold w-[193px] h-[56px] text-[24px] sm:text-[18px] mt-10  rounded-[50px] text-[#292929] leading-[56px] bg-[#FDC913] hover:bg-white transition-all duration-200 shadow-md cursor-pointer">
              ACIKTIM
            </button>
          </Link>
        </div>
      </header>
      <div className="flex flex-col bg-[#FAF7F2]">
        <div className="bg-white py-5">
          <div className="px-5 max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="flex gap-1 items-center justify-center">
              <img src="../images/iteration-2-images/icons/1.svg" alt="" />
              <p>YENİ! Kore</p>
            </div>
            <div className="flex gap-1 items-center justify-center">
              <img src="../images/iteration-2-images/icons/2.svg" alt="" />
              <p>Pizza</p>
            </div>
            <div className="flex gap-1 items-center justify-center">
              <img src="../images/iteration-2-images/icons/3.svg" alt="" />
              <p>Burger</p>
            </div>
            <div className="flex gap-1 items-center justify-center">
              <img src="../images/iteration-2-images/icons/4.svg" alt="" />
              <p>Kızartmalar</p>
            </div>
            <div className="flex gap-1 items-center justify-center">
              <img src="../images/iteration-2-images/icons/5.svg" alt="" />
              <p>Fast food</p>
            </div>
            <div className="flex gap-1 items-center justify-center">
              <img src="../images/iteration-2-images/icons/6.svg" alt="" />
              <p>Gazlı İçecek</p>
            </div>
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

        <div className="px-5 max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-4 mt-8 t">
          <div className="flex gap-1 items-center justify-center">
            <label
              htmlFor="kucuk"
              className="flex items-center justify-center rounded-[50px] p-2 bg-white  hover:bg-[#292929] cursor-pointer hover:text-white  "
            >
              <input
                id="kucuk"
                type="radio"
                name="size"
                className="hidden"
                value="kucuk"
              />
              <span className="flex gap-1 items-center justify-center p-1">
                <img src="../images/iteration-2-images/icons/1.svg" alt="" />
                <p>Ramen</p>
              </span>
            </label>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <label
              htmlFor="kucuk"
              className="flex items-center justify-center rounded-[50px] p-2 bg-white hover:bg-[#292929] cursor-pointer hover:text-white  "
            >
              <input
                id="kucuk"
                type="radio"
                name="size"
                className="hidden"
                value="kucuk"
              />
              <span className="flex gap-1 items-center justify-center p-1">
                <img src="../images/iteration-2-images/icons/2.svg" alt="" />
                <p>Pizza</p>
              </span>
            </label>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <label
              htmlFor="kucuk"
              className="flex items-center justify-center rounded-[50px] p-2 bg-white hover:bg-[#292929] cursor-pointer hover:text-white  "
            >
              <input
                id="kucuk"
                type="radio"
                name="size"
                className="hidden"
                value="kucuk"
              />
              <span className="flex gap-1 items-center justify-center p-1">
                <img src="../images/iteration-2-images/icons/3.svg" alt="" />
                <p>Burger</p>
              </span>
            </label>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <label
              htmlFor="kucuk"
              className="flex items-center justify-center rounded-[50px] p-2 bg-white hover:bg-[#292929] cursor-pointer hover:text-white  "
            >
              <input
                id="kucuk"
                type="radio"
                name="size"
                className="hidden"
                value="kucuk"
              />
              <span className="flex gap-1 items-center justify-center p-1">
                <img src="../images/iteration-2-images/icons/4.svg" alt="" />
                <p>French fries</p>
              </span>
            </label>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <label
              htmlFor="kucuk"
              className="flex items-center justify-center rounded-[50px] p-2 bg-white hover:bg-[#292929] cursor-pointer hover:text-white  "
            >
              <input
                id="kucuk"
                type="radio"
                name="size"
                className="hidden"
                value="kucuk"
              />
              <span className="flex gap-1 items-center justify-center p-1">
                <img src="../images/iteration-2-images/icons/5.svg" alt="" />
                <p>Fast food</p>
              </span>
            </label>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <label
              htmlFor="kucuk"
              className="flex items-center justify-center rounded-[50px] p-2 bg-white hover:bg-[#292929] cursor-pointer hover:text-white  "
            >
              <input
                id="kucuk"
                type="radio"
                name="size"
                className="hidden"
                value="kucuk"
              />
              <span className="flex gap-1 items-center justify-center p-1">
                <img src="../images/iteration-2-images/icons/6.svg" alt="" />
                <p>Soft drinks</p>
              </span>
            </label>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
};

export default Home;
