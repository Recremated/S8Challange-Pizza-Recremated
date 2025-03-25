import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const pathName = location.pathname.replace("/", "").replace("-", " ");
  return (
    <header className="bg-red-600 text-white w-full h-[207px] flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <Link to="/">
          <img
            className="aspect-8/1 max-w-[362px]"
            src="../images/iteration-1-images/logo.svg"
            alt="Teknolojik Yemekler Logo"
          />
        </Link>
      </div>

      <div className="w-full flex justify-center">
        <div className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-l lg:max-w-xl  w-full mx-[60px] pb-4">
          <div className="text-[20px] sm:text-[16px] font-barlow flex items-center">
            <Link to="/">Anasayfa</Link>
            <span className="mx-1">-</span>
            <span className="font-bold">
              {pathName === "Order" ? "Sipariş Oluştur" : pathName}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
