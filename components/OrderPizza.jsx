import { Link } from "react-router-dom";
import "../src/styles/Success.css";

const OrderPizza = () => {
  return (
    <div className="success-container">
      <h2 className="success-title">Başarıyla giriş yaptınız!</h2>
      <Link to="/" className="success-link">
        Geri dön ORDERPIZZA
      </Link>
    </div>
  );
};

export default OrderPizza;
