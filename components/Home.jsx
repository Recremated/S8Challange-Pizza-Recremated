import { Link } from "react-router-dom";
import "../src/styles/Home.css";

const Home = () => {
  return (
    //bg-center ile ortaladik
    <div className="bg-no-repeat flex justify-center bg-cover bg-[url(../images/iteration-1-images/home-banner.png)] bg-center min-h-screen max-h-1094 ">
      <div className="flex flex-col text-center my-[10vh] space-y-10 mx-[13vw] justify-center items-center pb-[30vh] ">
        <img
          className="aspect-8/1 max-w-[362px]"
          src="../images/iteration-1-images/logo.svg"
        ></img>
        <h1 className="text-white text-[86px] font-roboto-condensed font-light leading-[92px]">
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </h1>
        <Link to="/OrderPizza">
          <button className="font-barlow font-semibold bg-[#FDC913] w-[193px] text-[24px] sm:text-[18px]  rounded-[50px] text-[#292929] leading-[56px]">
            ACIKTIM
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
