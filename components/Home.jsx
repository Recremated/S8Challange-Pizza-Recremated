import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="bg-no-repeat flex flex-col justify-center min-w-[390px]">
      <header className="flex flex-col text-center items-center  bg-cover bg-[url(../images/iteration-1-images/home-banner.png)] bg-center h-screen ">
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
      <Footer></Footer>
    </main>
  );
};

export default Home;
