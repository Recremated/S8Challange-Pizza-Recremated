import { Link } from "react-router-dom";

const Success = () => {
  return (
    <main className="flex justify-center min-h-screen bg-[#CE2829] min-w-[390px]">
      <div className="flex flex-col text-center items-center mt-[120px] pb-65 mx-15 ">
        <img
          className="aspect-8/1 max-w-[362px]"
          src="../images/iteration-1-images/logo.svg"
        ></img>
        <h1 className="text-white text-[86px] font-roboto-condensed font-light leading-[92px] mt-50 tracking-[1.5px] ">
          TEBRİKLER!
          <br />
          SİPARİŞİNİZ ALINDI!
        </h1>
      </div>
    </main>
  );
};

export default Success;
