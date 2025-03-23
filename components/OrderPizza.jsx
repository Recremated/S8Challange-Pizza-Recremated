import { Link } from "react-router-dom";
import "../src/styles/Success.css";

const OrderPizza = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex justify-center h-[207px] w-screen bg-[#CE2829]">
        <img
          className="aspect-8/1 max-w-[362px]"
          src="../images/iteration-1-images/logo.svg"
        ></img>
        {/* YARIN gride bak*/}
        <p className=" absolute top-[150px] left-[10%] text-right text-[20px] sm:text-[16px] font-barlow text-white">
          Anasayfa - <span className="font-bold">Sipariş Oluştur</span>
        </p>
      </div>
    </div>
  );
};

export default OrderPizza;
