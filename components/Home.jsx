import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-no-repeat flex justify-center bg-cover bg-[url(../images/iteration-1-images/home-banner.png)] bg-center min-h-screen min-w-[390px]">
      <div className="flex flex-col text-center items-center mt-[120px] pb-65 mx-15 ">
        <img
          className="aspect-8/1 max-w-[362px]"
          src="../images/iteration-1-images/logo.svg"
          alt="Logo"
        ></img>
        <h1 className="text-white text-[86px] font-roboto-condensed font-light leading-[92px] mt-10 tracking-[1.5px]">
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </h1>
        <Link to="/OrderPizza">
          <button className="font-barlow font-semibold w-[193px] h-[56px] text-[24px] sm:text-[18px] mt-10  rounded-[50px] text-[#292929] leading-[56px] bg-[#FDC913] hover:bg-white transition-all duration-200 shadow-md cursor-pointer">
            ACIKTIM
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
