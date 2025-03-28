import { Link, useLocation } from "react-router-dom";
const Header = ({ className }) => {
  const location = useLocation();
  const pathName = location.pathname.replace("/", "").replace("-", " ");
  return (
    <header className={`text-white w-full flex flex-col ${className}`}>
      <div className="flex-1 flex items-center justify-center">
        <Link to="/">
          <img
            className="aspect-8/1 max-w-[362px]"
            src="../images/iteration-1-images/logo.svg"
            alt="Teknolojik Yemekler Logo"
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;
