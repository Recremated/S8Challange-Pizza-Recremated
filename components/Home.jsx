import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="bg-[#F5F5F5] flex flex-col justify-center min-w-[390px]">
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
            <button className="font-barlow font-semibold w-[193px] h-[56px] text-[24px] sm:text-[18px] mt-10  rounded-[50px] text-[#292929] leading-[56px] bg-[#FDC913] hover:bg-white transition-all duration-200 shadow-md cursor-pointer">
              ACIKTIM
            </button>
          </Link>
        </div>
      </header>
      <div className="flex flex-col">
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

        <div> butonlu resimler </div>
        <div> baslik </div>
        <div>bir div daha burasi ana navigasiyon</div>
      </div>
      <Footer></Footer>
    </main>
  );
};

export default Home;
